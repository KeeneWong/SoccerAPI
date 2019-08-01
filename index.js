const express = require("express");
const app = express();
const parser = require("body-parser");

app.use(parser.json());

app.use("/api/country", require("./routes/countryRoute"));
app.use("/api/league", require("./routes/leagueRoute"));
app.use("/api/team", require("./routes/teamRoute"));

app.get("/", (req, res) => res.send(`hello`));

app.listen(3000, () => console.log("server running on 3000"));
