const express = require("express");
const router = express.Router();
const countryController = require("../controllers/countryController");

// get all the country
router.get("/", countryController.index);
//get country by id
router.get("/id/:id", countryController.getbyid);
//get country by name
router.get("/name/:name", countryController.getbyname);

module.exports = router;
