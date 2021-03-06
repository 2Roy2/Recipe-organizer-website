const { isValidObjectId } = require("mongoose")
const User = require("../../models/user")
const { use } = require("../user")
const router = require("../user")
const { ObjectId } = require('mongodb')



const getAllRecipes = async (req, res) => {
    try {
        const { id } = req
        const user = await User.findById(id)

        if (!user)
            return res.status(404).json({ err: 'user not found' })

        return res.status(200).json(user.recipes)

    } catch (error) {
        console.log(error)

        res.status(500).json({ err: true })
    }
}
const postNewRecipe = async (req, res) => {
    try {
        const { id } = req
        const { name, description } = req.body

        if(!description)
            return res.status(400).json({err:'np description provided'})

        const {ingredients , instructions}=description
        const newrecipe = {
            _id: ObjectId(),
            name: name,
            description:{
                ingredients:ingredients,
                instructions: instructions
            }
        }

        const user = await User.findById(id)

        if (!user)
            return res.status(404).json({ err: 'user not found' })


        const newUserRecipes = user.recipes
        newUserRecipes.push(newrecipe)
        user.recipes = newUserRecipes

        await User.findByIdAndUpdate(id, { recipes: user.recipes })

        return res.status(200).json({newrecipe} )

    } catch (error) {
        console.log(error)
        res.status(500).json({ err: true })

    }
}
const getOneRecipe = async (req, res) => {
    try {
        const { id } = req
        const { recipeID } = req.params

        const user = await User.findById(id)

        if (!user)
            return res.status(404).json({ err: 'user not found' })

        const recipes = await user.recipes

        const recipe = await recipes.find(rec => rec._id.toString() === recipeID)

        if (!recipe)
            return res.status(404).json({ err: 'recipe not found' })

        return res.status(200).json(recipe)

    } catch (error) {
        console.log(error)
        res.status(500).json({ err: true })
    }
}
const deleteRecipe = async (req, res) => {
    try {
        const { id } = req
        const { recipeID } = req.params

        const user = await User.findById(id)

        if (!user)
            return res.status(404).json({ err: 'user not found' })

        const recipes = await user.recipes

        const recipe = await recipes.find(rec => rec._id.toString() === recipeID)

        if (!recipe)
            return res.status(404).json({ err: 'recipe not found' })

        newRecipes = await recipes.filter(recipe => recipe._id.toString() !== recipeID)

        const updatedUsr = await User.findByIdAndUpdate(id, { recipes: newRecipes })

        if (!updatedUsr)
            return res.status(404).json({ err: 'user not found' })

        return res.status(200).json(recipe)


    } catch (error) {
        console.log(error)
        res.status(500).json({ err: true })
    }
}
const updateRecipe = async (req, res) => {
    try {
        const { id } = req
        const { recipeID } = req.params
        const { name ,description } = req.body
        let ingredients= undefined
        let instructions= undefined

        if(description){
            ingredients=description.ingredients
            instructions=description.instructions
        }
           

        const user = await User.findById(id)

        if (!user)
            return res.status(404).json({ err: 'user not found' })

        const recipes = await user.recipes

        const recipe = await recipes.find(rec => rec._id.toString() === recipeID)

        if (!recipe)
            return res.status(404).json({ err: 'recipe not found' })

        if (name)
            recipe.name = name

        if (ingredients)
            recipe.description.ingredients = ingredients

        if (instructions)
            recipe.description.instructions = instructions

        await User.findByIdAndUpdate(id, { recipes: recipes })

        return res.status(200).json(recipe)


    } catch (error) {
        console.log(error)
        res.status(500).json({ err: true })
    }
}

module.exports = {
    getAllRecipes,
    postNewRecipe,
    getOneRecipe,
    deleteRecipe,
    updateRecipe
}
