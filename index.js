const express = require("express");
const app = express();
const parser = require("body-parser");

app.use(parser.json());

app.use("/api/country", require("./routes/countryRoute"));
app.use("/api/league", require("./routes/leagueRoute"));
app.use("/api/team", require("./routes/teamRoute"));

app.get("/", (req, res) => res.send(`hello`));

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

app.listen(3000, () => console.log("server running on 3000"));
