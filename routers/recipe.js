const express = require("express")
const User = require("../models/user")
const {getAllRecipes, postNewRecipe} = require('./routerFunctions/recipe')

const router = express.Router()

//get all recipes from user
router.get('/:id',getAllRecipes)

//post new recipe. set name img and description
router.post('/:id',postNewRecipe)


module.exports = router