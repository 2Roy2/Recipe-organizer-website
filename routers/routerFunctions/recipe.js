const User = require("../../models/user")
const { use } = require("../user")
const router = require("../user")



const getAllRecipes= async (req, res)=>{
    try {
        const { id } = req.params
        const user = await User.findById(id)

        if(!user)
            return res.status(404).json({err:'user not found'})
        
        return res.status(200).json(user.recipes)

    } catch (error) {
        res.status(500).json({ err: true })
    }
}
const postNewRecipe=async (req, res)=>{
    try {

        const { id } = req.params
        const{name,img,description}=req.body

        const newrecipe={
            name:name,
            img:img,
            description:description
        }


        const user = await User.findById(id)

        if(!user)
            return res.status(404).json({err:'user not found'})


        const newUserRecipes =user.recipes
        newUserRecipes.push(newrecipe)   
        user.recipes=newUserRecipes
        
        const updatedUsr=await User.findByIdAndUpdate(id,{recipes:user.recipes})
        
        return res.status(200).json(user.recipes)
        
    } catch (error) {
        res.status(500).json({ err: true })
        
    }
}

module.exports={
    getAllRecipes,
    postNewRecipe
}
