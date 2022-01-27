const express = require("express")
const User = require("../models/user")
const {getAllRecipes, postNewRecipe, getOneRecipe, deleteRecipe,updateRecipe} = require('./routerFunctions/recipe')

const router = express.Router()

//get all recipes from user
router.get('/',getAllRecipes)

//get one recipe by his id
router.get('/:recipeID',getOneRecipe)

//post new recipe. set name img and description
router.post('/',postNewRecipe)

//delete spacific recipe by his id
router.delete('/:recipeID',deleteRecipe)

//change recipe properties if provided. properties: name, img, description
router.patch('/:recipeID',updateRecipe)

module.exports = router