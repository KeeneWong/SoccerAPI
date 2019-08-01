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
  },
  create: (req, res) => {
    Team.create(req.body).then(data => res.json(data));
  },
  update: (req, res) => {
    Team.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    }).then(data => res.json(data));
  },
  delete: (req, res) => {
    Team.findOneAndDelete({ _id: req.params.id }).then(data => res.json(data));
  }
};
