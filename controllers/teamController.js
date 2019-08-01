const Team = require("../models/team");

module.exports = {
  index: (req, res) => {
    Team.find({}).then(allTeam => res.json(allTeam));
  },
  getbyid: (req, res) => {
    Team.findOne({ _id: req.params.id }).then(data => res.json(data));
  },
  getbyname: (req, res) => {
    Team.findOne({ name: req.params.name }).then(data => res.json(data));
  }
};
