# What to Eat
![favorites page of the app](https://jonctackportfolio.onrender.com/static/media/whatToEat.85360b340e2b56689ddb.png)
What to Eat is a simple single page application that can take in ingredients of the user and present recipes that could be made with those ingredients and features a favorite system. This is a fullstack application that references an API and a database for storing user information.
## The Stack
MERN (MongoDB, Express, React, Node.js)
- MongoDB:
This is a popular document database and one that can be interacted with quite easily through the mongoose Node.js module.
- Express:
This is a Node.js module that allows routing of incoming http requests.
- React:
This is a module that allows the creation of single page applications.
- Node:
This is a javascript(JS) runtime environment that the whole project is based on.
## The API
This project used [Spoonacular's food API](https://spoonacular.com/food-api) to search and retrieve recipes.
### Other Node modules Used
- Axios
- Bcrypt
- Cors
- Express-Session
- MemoryStore
- Morgan
- Passport
- Passport-Local
- React-dom
- React-router-dom
- React-scripts
- Serve-favicon
- Web-vitals
## Cloning This Repo
Simply run
`git clone https://github.com/JonCTack/WhatToEat.git`
and of course in that file run
`npm i`
`npm run dev`
and that will start a dev server on port 3000 for the app and 5000 for the server
## The Live App
You can look at this app live [here!](https://whattoeat.onrender.com)
## Unsolved Problems
I've done my best to run into as many bugs as possible but a large majority of issues seem to stem from using a free hosting service. Primarily, sometimes there will be a desync between the user account and the app. That is the most frequent issue. There is also a limit on how many API calls I can make per day but I've done my best to prevent heavy amounts of calls where I could.
## Future Enhancements
Hosting on a paid service and upping my tier with the Spoonacular API could do wonders for the site in terms of how the site behaves such as how many results I can display and the previously mentioned desync issue being mitigated. 
Beyond that, adding more recipe searching functions such as dietary restrictions such as lifestyle, allergies, or even calculated dietary restrictions! 
Even more far reaching, perhaps a system to add your own recipes. 