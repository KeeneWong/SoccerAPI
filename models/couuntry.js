const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  name: String,
  code: String,
  flag: String,
  league: [
    {
      type: Schema.Types.ObjectId,
      ref: "League"
    }
  ]
});

module.exports = mongoose.model("Country", CountrySchema);
