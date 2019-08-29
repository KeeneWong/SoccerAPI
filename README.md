# SoccerAPI

Description

<!-- What your project is / should be used for -->


This API is called soccer api.

It's a API developed for software developer who want to use soccer teams information.

it's like a database of football team and league.

Just use the endpoint and grab my data.


<img src="./soccer.jpg">

SoccerAPI support information of 8 leagues and over 200 teams


Function of SoccerAPI:

1. Get all the teams of the supported league

    Use axios or fetch to create a GET http request to https://keenesoccerapi.herokuapp.com/api/league.

    with this endpoint you can get all the leagues information

    example output:
    
        {
        teams: [
        "5d430238b1f7250004731bab",
        "5d430238b1f7250004731bac",
        "5d430238b1f7250004731bad",
        "5d430238b1f7250004731bae",
        "5d430238b1f7250004731baf",
        "5d430238b1f7250004731bb0",
        ],
        _id: "5d430238b1f7250004731b82",
        league_id: 2,
        name: "Premier League",
        countrycode: null,
        country: "England",
        __v: 2,
        countryref: "5d430238b1f7250004731b29"
        }

 You can get the teams in that league, id of the league, name etc.

2. Get all the teams 

    Use axios or fetch to create a GET http request to https://keenesoccerapi.herokuapp.com/api/team.

    with this endpoint you can get all the teams information

    example output:

    {
    _id: "5d430238b1f7250004731b9b",
    team_id: 23,
    name: "Saudi Arabia",
    code: null,
    country: "Saudi Arabia",
    founded: 1956,
    league_id: 1,
    venue: null,
    leagueref: "5d430238b1f7250004731b81"
    }

You can get all the information of the soccer team.




    





























<!-- What problem(s) your projects solves -->

Problem:

-getting api data can be different because of the limited route.

-connect the models together

-create a new por for the document

-deploy the api




Brief Example

<!-- This could be a code snippet showing how your project should be used (if it is meant to be integrated into another app)
This could be a screenshot of your project running in the browser (if it is a stand-alone application) -->

Step 1:

Choose the information you want to get from the API.

Step 2:

Get the data by using http Request with the route provided.

Step 3:

Enjoy your development :)




List of Features / User Stories

<!-- This typically will be a short list of the features / user stories that you planned during the development phase of the project
To provide more detail, you can show how you categorized these features into Bronze (MVP), Silver, and Gold Levels and indicate which features you complete / have yet to complete -->

MVP:

Bronze:
create a working database
create some basic route

Silver:
can get the data by using a for loop by once
create a playerb module


Gold:
having the function to update the score 
function to update a rating of player






List of Technologies Used

<!-- Often you will want to list the technologies you used to create the project.
This typically would consist of all primary languages, frameworks, and libraries your app is composed of
This is particularly important when it comes to recruiters scanning your projects for keywords -->

Javascript
Node.js
Express
MongoDB
Mongoose
Axious
Fs



Installation Instructions / Getting Started

<!-- This section should walk a reader, step by step, through the process of setting up your project
For a tool meant to be integrated into other projects, this would likely outline the process of installing and accessing this tool in your project
For an application, this would likely outline the process of forking, cloning, and starting the app locally -->

If you are interested of helping me to developing this game more further :).
You can fork it in git hub.
1. Go to my github  repo and fork it by click the clone button atr the top right corner.
2. clone it by copy the link and run the comment "git clone "the link" "
3. Open it locally at your computer and play around !!



Contribution Guidelines

<!-- This section should offer guidance on where and how users can contribute to your code, identify bugs, and propose improvements
Good links to include are:
A link to the project's main repository
A link to the project's issue tracker -->

Feel free to find me :)