const mongoose = require("mongoose");
// create Schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    username: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true, minLength: 6 },
    disabilityType: { type: String, required: true },
    gender: { type: String, required: true },
    birthDate: { type: Date, required: true },
    age: Number,
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

// create model
module.exports = mongoose.model("User", userSchema);
