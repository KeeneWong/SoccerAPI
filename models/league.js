const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const LeagueSchema = new Schema({
  league_id: Number,
  name: String,
  country: String,
  countrycode: String,
  teams: [
    {
      type: Schema.Types.ObjectId,
      ref: "Team"
    }
  ]
});

module.exports = mongoose.model("League", LeagueSchema);
