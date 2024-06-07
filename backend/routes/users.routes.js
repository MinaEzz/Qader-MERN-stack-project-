const express = require("express");
const router = express.Router();
const {
  getUserById,
  updateUser,
  deleteUser,
} = require("../controller/users.controller");
const { signUp, login } = require("../controller/auth.controller");
const validationSchema = require("../middlewares/user.validation");
const fileUpload = require("../middlewares/file-upload.middleware");

router
  .route("/:userId")
  .get(getUserById)
  .patch(fileUpload.single("image"), updateUser)
  .delete(deleteUser);
router.route("/signup").post(validationSchema(), signUp);
router.route("/login").post(login);

module.exports = router;
