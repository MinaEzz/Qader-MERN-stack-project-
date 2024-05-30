const router = require("express").Router();
const {
  addProduct,
  getAllProducts,
} = require("../controller/products.controller");

router.route("/").get(getAllProducts);
router.route("/:categoryName").post(addProduct);
router.route("/:productId").get().patch().delete();
router.route("/:categoryId").get();

module.exports = router;
