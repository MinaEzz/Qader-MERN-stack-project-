const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
const helmet = require("helmet");
const usersRouter = require("./routes/users.routes.js");
const categoriesRouter = require("./routes/categories.routes");
const productsRouter = require("./routes/products.routes.js");

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
app.use("/api/categories", categoriesRouter);
app.use("/api/products", productsRouter);

// global middleware for Not Found router
app.all("*", (req, res, next) => {
  const error = new Error("This Resource Is Not Available");
  error.status = ERROR;
  error.code = 404;
  return next(error);
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
