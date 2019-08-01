const express = require("express");
const router = express.Router();
const teamController = require("../controllers/teamController");

// get all the team
router.get("/", teamController.index);
//get team by id
router.get("/id/:id", teamController.getbyid);
//get team by name
router.get("/name/:name", teamController.getbyname);
//create a new team by json
router.post("/", teamController.create);
//update a team by json
router.put("/:id", teamController.update);
//delete a team by json
router.delete("/:id", teamController.delete);

module.exports = router;
