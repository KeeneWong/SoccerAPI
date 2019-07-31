const leaguedata = require("./leagues.json");
const fs = require("fs");

console.log(leaguedata.length);

const newleague = leaguedata.filter(each => {
  return each.season == 2018;
});

let stringified = JSON.stringify(newleague);
fs.writeFile(__dirname + "/newleagues.json", stringified, "utf8", err => {
  if (err) {
    console.error(err);
  } else {
    console.log(stringified);
  }
});
