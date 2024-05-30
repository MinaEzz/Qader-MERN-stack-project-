const router = require("express").Router();
const {
  addProduct,
  getProducts,
  getProductById,
} = require("../controller/products.controller");

router.route("/").get(getProducts);
router.route("/:categoryName").post(addProduct);
router.route("/:productId").get(getProductById).patch().delete();
router.route("/:categoryId").get();

module.exports = router;
