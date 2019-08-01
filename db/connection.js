const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/soccerAPI", {
  useNewUrlParser: true,
  useFindAndModify: false
});

module.exports = mongoose;
