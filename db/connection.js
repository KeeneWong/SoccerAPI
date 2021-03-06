const mongoose = require("mongoose");

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/soccerAPI";
}

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

module.exports = mongoose;
