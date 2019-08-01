const Country = require("../models/couuntry");

module.exports = {
  index: (req, res) => {
    Country.find({}).then(allcountry => res.json(allcountry));
  },
  getbyid: (req, res) => {
    Country.findOne({ _id: req.params.id }).then(data => res.json(data));
  },
  getbyname: (req, res) => {
    Country.findOne({ name: req.params.name }).then(data => res.json(data));
  }
};
