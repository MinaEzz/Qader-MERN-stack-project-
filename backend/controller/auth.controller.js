const { SUCCESS, ERROR, FAIL } = require("../utils/httpStatusText");
const { validationResult } = require("express-validator");
const User = require("../models/user.model");
const DisabilityType = require("../models/disability-type.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signUp = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Invalid Inputs Passed, Please Check Your Data.");
    error.status = FAIL;
    error.code = 422;
    return next(error);
  }

  const {
    disabilityTypeId,
    password,
    confirmPassword,
    email,
    phoneNumber,
    ...otherData
  } = req.body;
  if (password !== confirmPassword) {
    const error = new Error("Password Doesn't Match.");
    error.status = FAIL;
    error.code = 400;
    return next(error);
  }

  try {
    const disabilityType = await DisabilityType.findById(disabilityTypeId);
    if (!disabilityType) {
      const error = new Error("Invalid Disability Type.");
      error.status = FAIL;
      error.code = 404;
      return next(error);
    }

    const hasUser = await User.findOne({
      $or: [{ email: email }, { phoneNumber: phoneNumber }],
    });
    if (!hasUser) {
      const hashedPassword = await bcrypt.hash(password, 12);
      if (!hashedPassword) {
        const error = new Error("Couldn't Create User, Please Try Again.");
        error.status = ERROR;
        error.code = 500;
        return next(error);
      }
      const createdUser = new User({
        ...otherData,
        email,
        phoneNumber,
        password: hashedPassword,
        image: null,
        disabilityType: { name: disabilityType.name, id: disabilityType._id },
      });
      await createdUser.save();

      const token = jwt.sign(
        { userId: createdUser._id, name: createdUser.name },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );
      if (!token) {
        const error = new Error("Couldn't Create User, Please Try Again.");
        error.status = ERROR;
        error.code = 500;
        return next(error);
      }

      res.status(201).json({
        status: SUCCESS,
        data: {
          user: createdUser,
          token: token,
        },
      });
    } else {
      const error = new Error("User Is Already Exist, Please Login Instead.");
      error.status = FAIL;
      error.code = 409;
      return next(error);
    }
  } catch (err) {
    const error = new Error(err.message);
    error.status = ERROR;
    error.code = 500;
    return next(error);
  }
};

const login = async (req, res, next) => {
  const { identifier, password } = req.body;

  try {
    const identifiedUser = await User.findOne({
      $or: [
        { email: identifier },
        { phoneNumber: identifier },
        { username: identifier },
      ],
    });
    if (!identifiedUser) {
      const error = new Error(
        "Couldn't Identify The User, Credentials Seem To Be Wrong."
      );
      error.status = FAIL;
      error.code = 401;
      return next(error);
    }

    const isValidPassword = await bcrypt.compare(
      password,
      identifiedUser.password
    );
    if (!isValidPassword) {
      const error = new Error(
        "Couldn't Identify The User, Credentials Seem To Be Wrong."
      );
      error.status = FAIL;
      error.code = 401;
      return next(error);
    }

    const token = jwt.sign(
      { userId: identifiedUser._id, name: identifiedUser.name },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    if (!token) {
      const error = new Error("Couldn't Login, Please Try Again.");
      error.status = ERROR;
      error.code = 500;
      return next(error);
    }
    res.status(200).json({
      status: SUCCESS,
      data: {
        user: identifiedUser,
        token: token,
      },
    });
  } catch (err) {
    const error = new Error(err.message);
    error.status = ERROR;
    error.code = 500;
    return next(error);
  }
};

module.exports = { signUp, login };
