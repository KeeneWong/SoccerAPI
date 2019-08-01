const express = require("express");
const router = express.Router();
const leagueController = require("../controllers/leagueController");

// get all the league
router.get("/", leagueController.index);
//get league by id
router.get("/id/:id", leagueController.getbyid);
//get league by name
router.get("/name/:name", leagueController.getbyname);
//create a new league by json
router.post("/", leagueController.create);
//update a league by json
router.put("/:id", leagueController.update);
//delete a league by json
router.delete("/:id", leagueController.delete);

module.exports = router;
