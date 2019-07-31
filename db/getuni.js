var unirest = require("unirest");

var req = unirest(
  "GET",
  "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/4"
);

req.headers({
  "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
  "x-rapidapi-key": "03e41bfe75msh90c177e80cd721ep1e3544jsn9c7eb82ff772"
});

req.end(function(res) {
  if (res.error) throw new Error(res.error);

  //   console.log(res.body);
  let stringified = JSON.stringify(res.body);
});
