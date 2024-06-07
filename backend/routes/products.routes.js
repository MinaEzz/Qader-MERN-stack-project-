const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  searchProduct,
  getRecommendedProducts,
} = require("../controller/products.controller");

router.route("/").get(getProducts);
router.route("/:productId").get(getProductById);
router.route("/search/:searchTerm").get(searchProduct);
router.route("/recommend/:userId").get(getRecommendedProducts);

module.exports = router;
