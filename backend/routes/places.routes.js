const express = require("express");
const router = express.Router();
const {
  getAllPlaces,
  getPlaceById,
  getPlacesByUserId,
  createPlace,
  updatePlace,
  deletePlace,
} = require("../controller/places.controller");
const { check } = require("express-validator");

router
  .route("/")
  .get(getAllPlaces)
  .post(
    check(["title", "description", "address"])
      .notEmpty()
      .withMessage("Some fields are required."),
    check(["description", "address"]).isLength({ min: 5 }),
    createPlace
  );
router
  .route("/:placeId")
  .get(getPlaceById)
  .patch(
    check(["title", "description"]).notEmpty(),
    check("description").isLength({ min: 5 }),
    updatePlace
  )
  .delete(deletePlace);
router.route("/user/:userId").get(getPlacesByUserId);

module.exports = router;
