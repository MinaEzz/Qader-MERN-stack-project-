const express = require("express");
const router = express.Router();
const {getAllJobs} = require("../controller/job.controller")

router.route("/").get(getAllJobs)

module.exports = router;