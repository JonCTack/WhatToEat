const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');
const { default: axios } = require('axios');
require('dotenv').config()
const app = express();
const port = 5000;

app.use(cors({
    origin: "*"
}));
app.use(logger('dev'))
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));


//routes
app.get(`/get_recipe/:ingredients`, async (req, res) => {
    let ingredients = req.params.ingredients
    let apiResponse = await axios(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.APIKEY}&number=2&ranking=1&ingredients=${ingredients}`)
    res.json(apiResponse.data)
})
app.get(`/get_instructions/:recipeId`, async (req, res) => {
    let recipeId = req.params.recipeId
    let apiInfoResponse = await axios(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.APIKEY}&includeNutrition=false`)
    // let apiInstructResponse = await axios(`https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=${process.env.APIKEY}`)
    console.log(apiInfoResponse.data)
    res.json(apiInfoResponse.data)
})

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(port, () => {
    console.log(`Server is Listening on ${port}`);
});