const { SUCCESS, FAIL, ERROR } = require("../utils/httpStatusText");
const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res
        .status(404)
        .json({ status: FAIL, data: null, message: "No Users Found!" });
    }
    res.status(200).json({ status: SUCCESS, data: { users } });
  } catch (error) {
    res
      .status(400)
      .json({ status: ERROR, data: null, msg: error.message, code: 400 });
  }
};

const getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const matchedUser = await User.findById(userId);
    if (!matchedUser) {
      return res.status(404).json({ status: FAIL, data: null });
    }
    res.status(200).json({ status: SUCCESS, data: { user: matchedUser } });
  } catch (error) {
    res
      .status(400)
      .json({ status: ERROR, data: null, msg: error.message, code: 400 });
  }
};

// const updateUser = async (req, res) => {
//   const { userId } = req.params;
//   const body = req.body;
//   try {
//     let updatedUser = await user.updateOne(
//       { _id: userId },
//       { $set: { ...body } }
//     );
//     res.status(200).json({ status: SUCCESS, data: { user: updatedUser } });
//   } catch (error) {
//     res
//       .status(400)
//       .json({ status: ERROR, data: null, msg: error.message, code: 400 });
//   }
// };

// const deleteUser = async (req, res) => {
//   const { userId } = req.params;
//   try {
//     await user.deleteOne({ _id: userId });
//     res.status(200).json({ status: SUCCESS, data: null });
//   } catch (error) {
//     res
//       .status(400)
//       .json({ status: ERROR, data: null, msg: error.message, code: 400 });
//   }
// };

const deleteAllUsers = async (req, res) => {
  try {
    await User.deleteMany();
    res.status(200).json({ status: SUCCESS, data: null });
  } catch (error) {
    res
      .status(400)
      .json({ status: ERROR, data: null, msg: error.message, code: 400 });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  deleteAllUsers,
};
