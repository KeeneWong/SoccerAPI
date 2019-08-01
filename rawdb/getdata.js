var unirest = require("unirest");
const fs = require("fs");

var req = unirest(
  "GET",
  "https://api-football-v1.p.rapidapi.com/v2/teams/league/10"
);

req.headers({
  "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
  "x-rapidapi-key": "03e41bfe75msh90c177e80cd721ep1e3544jsn9c7eb82ff772"
});

req.end(function(res) {
  if (res.error) throw new Error(res.error);

  let data = res.body.api.teams;

  // console.log(res.body);
  data.forEach(each => {
    each.league_id = 10;
  });

  console.log(data);

  let stringified = JSON.stringify(res.body.api.teams);

  fs.writeFile(__dirname + "/team10.json", stringified, "utf8", err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`successfully wrote  records to db/data.json`);
    }
  });
});
