const express = require("express");
const router = express.Router();
const countryController = require("../controllers/countryController");

// get all the country
router.get("/", countryController.index);
//get country by id
router.get("/", countryController.getbyid);
//get country by name
router.get("/", countryController.getbtname);

module.exports = router;
