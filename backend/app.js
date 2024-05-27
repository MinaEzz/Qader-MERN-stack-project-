const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
const helmet = require("helmet");
const usersRouter = require("./routes/users.routes");
const { ERROR } = require("./utils/httpStatusText.js");

const mongoose = require("mongoose");
const url = process.env.MONGO_URL;
// connect to mongoDB
mongoose
  .connect(url)
  .then(() => console.log("connected succesfully to mongoDB server"))
  .catch((err) => console.log("failed to connect to database", err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use("/api/users", usersRouter);

// global middleware for Not Found router
app.all("*", (req, res, next) => {
  res.json(
    res
      .status(404)
      .json({ status: ERROR, message: "This Resource Is Not Available" })
  );
});
// Default Error Handler
app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }
  res.status(error.code || 500).json({
    status: error.status || "Error",
    data: null,
    message: error.message || "Unkown Error Occured.",
    code: error.code || 500,
  });
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
