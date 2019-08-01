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
  },
  create: (req, res) => {
    Country.create(req.body).then(data => res.json(data));
  },
  update: (req, res) => {
    Country.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    }).then(data => res.json(data));
  },
  delete: (req, res) => {
    Country.findOneAndDelete({ _id: req.params.id }).then(data =>
      res.json(data)
    );
  }
};
