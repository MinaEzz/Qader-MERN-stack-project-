const router = require("express").Router();
const { getAllCategories } = require("../controller/categories.controllers");

router.route("/").get(getAllCategories);

module.exports = router;
