const { SUCCESS, ERROR, FAIL } = require("../utils/httpStatusText");
const Category = require("../models/category.model");

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    if (!categories || categories.length === 0) {
      const error = new Error("No Categories Found.");
      error.status = FAIL;
      error.code = 404;
      return next(error);
    }
    res.status(200).json({ status: SUCCESS, data: { categories } });
  } catch (err) {
    const error = new Error(err.message);
    error.status = ERROR;
    error.code = 500;
    return next(error);
  }
};

module.exports = {
  getAllCategories,
};
