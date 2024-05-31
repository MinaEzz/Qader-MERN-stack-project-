const express = require("express");
const router = express.Router();
const {
  addToCart,
  getCart,
  removeFromCart,
} = require("../controller/cart.controller");

router.route("/add").post(addToCart);
router.route("/:userId").get(getCart);
router.route("/remove").post(removeFromCart);

module.exports = router;
