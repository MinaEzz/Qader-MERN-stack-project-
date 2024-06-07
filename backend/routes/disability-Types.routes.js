const express = require("express");
const router = express.Router();
const {
  getAllDisabilities,
} = require("../controller/disability-type.controller");

router.route("/").get(getAllDisabilities);

module.exports = router;
