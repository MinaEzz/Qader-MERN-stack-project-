const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  deleteAllUsers,
} = require("../controller/users.controller");
const { signUp, login } = require("../controller/auth.controller");
const validationSchema = require("../middlewares/user.validation");

router.route("/").get(getAllUsers).delete(deleteAllUsers);
router.route("/:userId").get(getUserById);
router.route("/signup").post(validationSchema(), signUp);
router.route("/login").post(login);

module.exports = router;
