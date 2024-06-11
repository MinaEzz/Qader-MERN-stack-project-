const { SUCCESS, FAIL, ERROR } = require("../utils/httpStatusText");
const User = require("../models/user.model");
const DisabilityType = require("../models/disability-type.model");

const getUserById = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const matchedUser = await User.findOne({ _id: userId });
    if (!matchedUser) {
      const error = new Error("User Not Found.");
      error.status = FAIL;
      error.code = 404;
      return next(error);
    }
    res.status(200).json({ status: SUCCESS, data: { user: matchedUser } });
  } catch (err) {
    const error = new Error(err.message);
    error.status = ERROR;
    error.code = 500;
    return next(error);
  }
};

const updateUser = async (req, res, next) => {
  const { userId } = req.params;
  const { disabilityTypeId, ...otherData } = req.body;
  try {
    const disabilityType = await DisabilityType.findById(disabilityTypeId);
    if (!disabilityType) {
      const error = new Error("Invalid Disability Type.");
      error.status = FAIL;
      error.code = 404;
      return next(error);
    }

    // Prepare updated user data
    let updateData = {
      ...otherData,
      disabilityType: { name: disabilityType.name, id: disabilityType._id },
    };
    // If a file is uploaded, add the image URL to the update data
    if (req.file) {
      updateData.image = req.file.filename; // Assuming the file path is stored in `req.file.path`
    }

    // Update the user
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true }
    );
    if (!updatedUser) {
      const error = new Error("User Not Found.");
      error.status = FAIL;
      error.code = 404;
      return next(error);
    }
    res.status(200).json({ status: SUCCESS, data: { user: updatedUser } });
  } catch (err) {
    const error = new Error(err.message);
    error.status = ERROR;
    error.code = 500;
    return next(error);
  }
};

const deleteUser = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      const error = new Error("User Not Found.");
      error.status = FAIL;
      error.code = 404;
      return next(error);
    }
    res.status(200).json({ status: SUCCESS, data: { user: deletedUser } });
  } catch (err) {
    const error = new Error(err.message);
    error.status = ERROR;
    error.code = 500;
    return next(error);
  }
};

module.exports = {
  getUserById,
  updateUser,
  deleteUser,
};
