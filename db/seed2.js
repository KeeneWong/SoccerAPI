const leaguedata = require("./leagues.json");
const countriesdata = require("./countries.json");
const teamdata = require("./team.json");

const Country = require("../models/couuntry");
const League = require("../models/league");
const Team = require("../models/team");

// League.findOne({ country: eachcountry.name });

Country.find({}).then(allcountry => {
  allcountry.forEach(eachcountry => {
    League.findOne({ country: eachcountry.name }).then(thatleague => {
      eachcountry.leagueref = thatleague._id;
      eachcountry.save();
      console.log(eachcountry);
    });
  });
});

League.find({}).then(allleague => {
  allleague.forEach(eachleague => {
    Country.findOne({ name: eachleague.country }).then(thatcountry => {
      eachleague.countryref = thatcountry._id;
      eachleague.save();
      console.log(eachleague);
    });
  });
});

League.find({}).then(allleague => {
  allleague.forEach(eachleague => {
    Team.find({ league_id: eachleague.league_id }).then(thoseteam => {
      const newteamidarray = thoseteam.map(each => each._id);
      eachleague.teams = newteamidarray;
      eachleague.save();
      console.log(eachleague);
    });
  });
});

Team.find({}).then(allteam => {
  allteam.forEach(eachteam => {
    Country.findOne({ name: eachteam.country }).then(thosecountry => {
      eachteam.countryref = thosecountry._id;
      eachteam.save();
      console.log(eachteam);
    });
  });
});

Team.find({}).then(allteam => {
  allteam.forEach(eachteam => {
    League.findOne({ league_id: eachteam.league_id }).then(thoseleague => {
      eachteam.leagueref = thoseleague._id;
      eachteam.save();
      console.log(eachteam);
    });
  });
});
