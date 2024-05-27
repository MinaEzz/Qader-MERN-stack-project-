const mongoose = require("mongoose");

// create schema
const placeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // image: {
  //   type: String,
  //   required: true,
  // },
  address: {
    type: String,
    required: true,
  },
  creator: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

// create model
module.exports = mongoose.model("Place", placeSchema);
