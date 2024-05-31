const { SUCCESS, ERROR, FAIL } = require("../utils/httpStatusText");
const Product = require("../models/product.model");
const Category = require("../models/category.model");

// const getAllProducts = async (req, res, next) => {
//   try {
//     const products = await Product.find();
//     if (!products || products.length === 0) {
//       const error = new Error("No Products Found.");
//       error.status = FAIL;
//       error.code = 404;
//       return next(error);
//     }
//     res.status(200).json({ status: SUCCESS, data: { products } });
//   } catch (err) {
//     const error = new Error(err.message);
//     error.status = ERROR;
//     error.code = 500;
//     return next(error);
//   }
// };

const getProducts = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
  const limit = parseInt(req.query.limit) || 24; // Default to 24 items per page if not specified
  const skip = (page - 1) * limit;
  const { categoryId } = req.query;

  try {
    let filter = {};
    if (categoryId) {
      filter.category = categoryId;
    }
    const totalProducts = await Product.countDocuments(filter);
    const totalPages = Math.ceil(totalProducts / limit);
    const products = await Product.find(filter).skip(skip).limit(limit);

    if (!products || products.length === 0) {
      const error = new Error("No Products Found.");
      error.status = "fail";
      error.code = 404;
      return next(error);
    }
    res.status(200).json({
      status: "success",
      data: {
        products,
        totalProducts,
        totalPages,
        currentPage: page,
      },
    });
  } catch (err) {
    const error = new Error(err.message);
    error.status = "error";
    error.code = 500;
    return next(error);
  }
};

const addProduct = async (req, res, next) => {
  const body = req.body;
  const { categoryName } = req.params;
  try {
    const category = await Category.findOne({ name: categoryName });
    if (category) {
      const createdProduct = new Product({ ...body, category: category._id });
      await createdProduct.save();
      res.status(201).json({ status: SUCCESS, data: { user: createdProduct } });
    } else {
      const error = new Error(`Category "${categoryName}" Is Not Exists.`);
      error.status = FAIL;
      error.code = 404;
      return next(error);
    }
  } catch (err) {
    const error = new Error(err.message);
    error.status = ERROR;
    error.code = 500;
    return next(error);
  }
};

const getProductById = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const matchedProduct = await Product.findOne({ _id: productId });
    if (!matchedProduct) {
      const error = new Error("Product Not Found.");
      error.status = FAIL;
      error.code = 404;
      return next(error);
    }
    res
      .status(200)
      .json({ status: SUCCESS, data: { product: matchedProduct } });
  } catch (err) {
    const error = new Error(err.message);
    error.status = ERROR;
    error.code = 500;
    return next(error);
  }
};

const searchProduct = async (req, res, next) => {
  const { searchTerm } = req.params;
  try {
    // Use a regular expression to perform a case-insensitive search
    const searchRegex = new RegExp(searchTerm, "i");
    const filter = {
      $or: [
        { title: { $regex: searchRegex } },
        { description: { $regex: searchRegex } },
      ],
    };
    const products = await Product.find(filter);
    if (!products || products.length === 0) {
      const error = new Error("No Products Found Matches Your Search Term.");
      error.status = FAIL;
      error.code = 404;
      return next(error);
    }
    res.status(200).json({ status: SUCCESS, data: { products } });
  } catch (err) {
    const error = new Error(err.message);
    error.status = ERROR;
    error.code = 500;
    return next(error);
  }
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  searchProduct,
  //   updateProduct,
  //   deleteProduct,
};
