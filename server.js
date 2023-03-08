const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');

const bcrypt = require('bcrypt')
const passport = require('passport')
const session = require('express-session')
const MemoryStore = require('memorystore')(session)
const initPassport = require('./config/passport-config')

const User = require('./models/user')

const { default: axios } = require('axios');
require('dotenv').config()
require('./config/database')


const app = express();
const port = 5000;

app.use(cors({
    origin: "*"
}));
app.use(logger('dev'))
app.use(express.json());

initPassport(
    passport,
    async email => {
        let user = User.findOne({email: email});
        return user;
    },
    async id => {
        let user = User.findById(id);
        return user;
    }
);
app.use(session({
    
    secure: true,
    secret: process.env.SESSEC,
    resave: true,
    saveUninitialized: true,
    cookie: { originalMaxAge: 3600000 },
    store: new MemoryStore({
        checkPeriod: 86400000
      }),
}))
app.use(express.static(path.join(__dirname, 'build')));


//routes

app.get('/session-info', (req,res) => {
    res.json({
        session: req.session
    })
})


app.post('/users/signup', async (req, res) => {

    let hashPass = await bcrypt.hash(req.body.password, 10)

    let userFromCollect = await User.create({
        email: req.body.email,
        name: req.body.name,
        password: hashPass
    })

    res.json('signed up')
});

app.post('/users/addFav', async (req,res) => {
    if(req.session){ 
    let user = req.session.passport.user._doc._id
    let mongoUser = await User.findById(user)
    mongoUser.favorites.push({recipe: req.body})
    mongoUser.save()
    res.json(mongoUser)}
})

app.delete('/users/delFav', async (req,res) => {
    let user = req.session.passport.user._doc._id
    let mongoUser = await User.findById(user)
    const i = mongoUser._doc.favorites.findIndex(e => e.recipe.id == req.body.id)
    mongoUser.favorites.splice(i,1)
    mongoUser.markModified('favorites')
    mongoUser.save()
    res.json(mongoUser)
})


app.put('/users/login', async (req, res, next) => {

    passport.authenticate("local", (err, user, message) => {
        console.log("authenticating")
        if(err) throw err;
        if(!user){
            console.log("login failed")
            res.json({
                message: "login failed",
                user: false
            })
        } else {
            console.log("successfully authenticated");
            let noPasswordUser = {...user};
            delete noPasswordUser.password
            req.logIn(noPasswordUser, err => {
                if(err) throw err
                res.json({
                    message: "successfully authenticated",
                    
                })
            })
        }
    })(req, res, next);
});

app.post('/users/logout', async (req, res) => {
    if (req.session) {
      req.session.destroy(err => {
        if (err) {
          res.status(400).send('Unable to log out')
        } else {
         res.clearCookie('connect.sid')
         res.redirect('/')
        }
      });
    } else {
      res.end()
    }
  });


app.get(`/get_recipe/:ingredients`, async (req, res) => {
    let ingredients = req.params.ingredients
    let apiResponse = await axios(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.APIKEY}&number=2&ranking=1&ingredients=${ingredients}`)
    res.json(apiResponse.data)
})
app.get(`/get_instructions/:recipeId`, async (req, res) => {
    let recipeId = req.params.recipeId
    let apiInfoResponse = await axios(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.APIKEY}&includeNutrition=false`)
    // let apiInstructResponse = await axios(`https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=${process.env.APIKEY}`)
    res.json(apiInfoResponse.data)
})

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(port, () => {
    console.log(`Server is Listening on ${port}`);
});