const leaguedata = require("./leagues.json");
const countriesdata = require("./countries.json");
const teamdata = require("./team.json");

const Country = require("../models/couuntry");
const League = require("../models/league");
const Team = require("../models/team");

Country.remove({}).then(start => {
  const newCountry = countriesdata.map(each => {
    const neweach = {
      name: each.country,
      code: each.code,
      flag: each.flag
    };
    return neweach;
  });
  Country.collection.insert(newCountry).then(newdata => {
    console.log(newdata);
  });
});

League.remove({}).then(start => {
  const newLeague = leaguedata.map(each => {
    const neweach = {
      league_id: each.league_id,
      name: each.name,
      countrycode: each.countrycode,
      country: each.country
    };
    return neweach;
  });
  League.collection.insert(newLeague).then(newdatas => {
    console.log(newdatas);
  });
});

Team.remove({}).then(start => {
  const newTeam = teamdata.map(each => {
    const neweach = {
      team_id: each.team_id,
      name: each.name,
      code: each.code,
      country: each.country,
      founded: each.founded,
      league_id: each.league_id,
      venue: each.venue
    };
    return neweach;
  });
  Team.collection.insert(newTeam).then(datas => {
    console.log(datas);
  });
});
