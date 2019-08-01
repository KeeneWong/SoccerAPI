const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  name: String,
  code: String,
  flag: String,
  leagueref: [
    {
      type: Schema.Types.ObjectId,
      ref: "League"
    }
  ]
});

module.exports = mongoose.model("Country", CountrySchema);
