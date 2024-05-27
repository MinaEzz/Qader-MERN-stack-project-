const { SUCCESS, ERROR, FAIL } = require("../utils/httpStatusText");
const { validationResult } = require("express-validator");
const User = require("../models/user.model");

const signUp = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Invalid Inputs Passed, Please Check Your Data.");
    error.status = FAIL;
    error.code = 422;
    return next(error);
  }

  const body = req.body;
  const createdUser = new User(body);
  try {
    const hasUser = await User.findOne({
      $or: [{ email: body.email }, { phoneNumber: body.phoneNumber }],
    });
    if (!hasUser) {
      if (body.password !== body.confirmPassword) {
        const error = new Error("Password Doesn't Match.");
        error.status = FAIL;
        error.code = 400;
        return next(error);
      }
      createdUser.save();
      res.status(201).json({ status: SUCCESS, data: { user: createdUser } });
    } else {
      const error = new Error("User Is Already Exist, Please Login Instead.");
      error.status = FAIL;
      error.code = 409;
      return next(error);
    }
  } catch (err) {
    const error = new Error(err.message);
    error.status = ERROR;
    error.code = 400;
    return next(error);
  }
};

const login = async (req, res, next) => {
  const body = req.body;

  try {
    const identifiedUser = await User.findOne({
      $or: [
        { email: body.identifier },
        { phoneNumber: body.identifier },
        { username: body.identifier },
      ],
    });
    if (!identifiedUser || identifiedUser.password != body.password) {
      const error = new Error(
        "Couldn't Identify The User, Credentials Seem To Be Wrong."
      );
      error.status = FAIL;
      error.code = 401;
      return next(error);
    }
    res.status(200).json({ status: SUCCESS, message: "Login Succefully !" });
  } catch (err) {
    const error = new Error(err.message);
    error.status = ERROR;
    error.code = 500;
    return next(error);
  }
};

module.exports = { signUp, login };
