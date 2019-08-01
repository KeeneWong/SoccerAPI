const express = require("express");
const router = express.Router();
const leagueController = require("../controllers/leagueController");

// get all the country
router.get("/", leagueController.index);
//get country by id
router.get("/id/:id", leagueController.getbyid);
//get country by name
router.get("/name/:name", leagueController.getbyname);

module.exports = router;
