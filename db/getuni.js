var unirest = require("unirest");
const fs = require("fs");

var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/countries");

req.headers({
  "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
  "x-rapidapi-key": "03e41bfe75msh90c177e80cd721ep1e3544jsn9c7eb82ff772"
});

req.end(function(res) {
  if (res.error) throw new Error(res.error);

  //   console.log(res.body);
  let stringified = JSON.stringify(res.body.api.countries);
  fs.writeFile(__dirname + "/countries.json", stringified, "utf8", err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`successfully wrote  records to db/data.json`);
    }
  });
});
