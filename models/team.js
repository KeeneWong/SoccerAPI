const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
  team_id: Number,
  name: String,
  code: String,
  country: String,
  founded: Number,
  league_id: Number,
  venue: String
});

module.exports = mongoose.model("Team", TeamSchema);
