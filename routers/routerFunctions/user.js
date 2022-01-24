const { findByIdAndUpdate, findOneAndDelete } = require("../../models/user")
const User = require("../../models/user")
const router = require("../user")

const getAllUsers = async (req, res) => {
    try {
        User.find().
            then((result) => {
                res.status(200).json(result)
            })
            .catch((err) => {
                res.status(404).json({ err })
            })
    } catch (error) {
        res.status(500).json({ err: true })
    }
}
const getSpecificUser=async (req, res) => {
    try {
        const { id } = req.params

        const user = await User.findOne({_id:id})
    
        if(!user)
            return res.status(404).json({err:'user not found'})
        
        return res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({ err: true })
    }
}

const addUser = async (req, res) => {
    try {
        const { name, password } = req.body
        if (!name || !password)
            return res.status(404).json({ err: "no name or password" });

        //check if user with same name already exists
        const existingUser = await User.findOne({ name: name })
            .then((result) => {
                if (result)
                    return { err: "user already exists" }
            })
            .catch((err) => {
                res.status(404).json({ err })
            })
        if (existingUser)
            return res.json(existingUser)

        //create user
        const user = User({
            name: name,
            password: password,
            recipe: []
        });
        user.save().then((result) => {
            res.status(200).json(result);
        })
            .catch((err) => {
                res.status(404).json({ err })
            });
    } catch (error) {
        res.status(500).json({ err: true })
    }

}
const updateUser = async (req, res) => {
    try {
        const { newName, newPassword } = req.body
        const { id } = req.params

        if(!newName&&!newPassword)
            return res.status(404).json({err:'not provided new name'})

        const updateParmams={}
        if(newName)
            updateParmams.name=newName
        if(newPassword)
            updateParmams.password=newPassword
        
        const updatedUsr=await User.findOneAndUpdate({ _id: id },updateParmams,{
            new:true
        })

        if(!updatedUsr)
            return res.status(404).json('user not found')

        return res.status(200).json(updatedUsr)

    } catch (error) {
        console.log(error)
        res.status(500).json({ err: true })
    }
}
const deleteUSer = async (req, res) => {
    try {
        const { id } = req.params
        
        const deleteddUser = await User.findOneAndDelete({ _id: id })
        if (!deleteddUser)
            return res.status(404).json({ err: 'user not found' })

        return res.status(200).json({ deleteUSer: deleteddUser })

    } catch (error) {
        res.status(500).json({ err: true })
    }
}

module.exports = {
    getAllUsers,
    addUser,
    deleteUSer,
    updateUser,
    getSpecificUser
}