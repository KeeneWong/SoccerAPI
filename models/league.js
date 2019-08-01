const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const LeagueSchema = new Schema({
  league_id: Number,
  name: String,
  countrycode: String,
  country: String,
  countryref: {
    type: Schema.Types.ObjectId,
    ref: "Country"
  },
  teams: [
    {
      type: Schema.Types.ObjectId,
      ref: "Team"
    }
  ]
});

module.exports = mongoose.model("League", LeagueSchema);
