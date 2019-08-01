const League = require("../models/league");

module.exports = {
  index: (req, res) => {
    League.find({}).then(allLeague => res.json(allLeague));
  },
  getbyid: (req, res) => {
    League.findOne({ _id: req.params.id }).then(data => res.json(data));
  },
  getbyname: (req, res) => {
    League.findOne({ name: req.params.name }).then(data => res.json(data));
  }
};
