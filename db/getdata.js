const axios = require("axios");
const fs = require("fs");

axios
  .get(
    "https://soccer.sportmonks.com/api/v2.0/continents?api_token=5LdiGVpuLDU8j0K96D50kdgOsl3dpnivam9o3p43G7tCAaTTAWIwkElEnRak"
  )
  .then(response => {
    // handle success
    console.log(response.data);
    let stringified = JSON.stringify(response.data);
    console.log(stringified);
    fs.writeFile(__dirname + "/data.json", stringified, "utf8", err => {
      if (err) {
        console.error(err);
      } else {
        console.log(`successfully wrote  records to db/data.json`);
      }
    });
  });

country;
// GET https://soccer.sportmonks.com/api/v2.0/countries?api_token=d4ksomxFumF6...

league;
// GET https://soccer.sportmonks.com/api/v2.0/leagues?api_token=d4ksomxFumF6...
