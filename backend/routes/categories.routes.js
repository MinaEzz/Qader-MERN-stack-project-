const router = require("express").Router();
const {
  getAllCategories,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/categories.controllers");

router.route("/").get(getAllCategories).post(addCategory);
router
  .route("/:categoryId")
  .get(getCategoryById)
  .patch(updateCategory)
  .delete(deleteCategory);

module.exports = router;
