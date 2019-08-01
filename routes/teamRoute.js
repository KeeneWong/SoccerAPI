const express = require("express");
const router = express.Router();
const teamController = require("../controllers/teamController");

// get all the country
router.get("/", teamController.index);
//get country by id
router.get("/id/:id", teamController.getbyid);
//get country by name
router.get("/name/:name", teamController.getbyname);

module.exports = router;
