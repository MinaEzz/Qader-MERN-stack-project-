const router = require("express").Router();
const {
  addProduct,
  getProducts,
  getProductById,
  searchProduct,
} = require("../controller/products.controller");

router.route("/").get(getProducts);
router.route("/:categoryName").post(addProduct);
router.route("/:productId").get(getProductById).patch().delete();
router.route("/search/:searchTerm").get(searchProduct);

module.exports = router;
