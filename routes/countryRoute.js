const express = require("express");
const router = express.Router();
const countryController = require("../controllers/countryController");

// get all the country
router.get("/", countryController.index);
//get country by id
router.get("/id/:id", countryController.getbyid);
//get country by name
router.get("/name/:name", countryController.getbyname);
//create a new country by json
router.post("/", countryController.create);
//update a country by json
router.put("/:id", countryController.update);
//delete a country by json
router.delete("/:id", countryController.delete);

module.exports = router;
