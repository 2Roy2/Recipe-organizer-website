const { findByIdAndUpdate, findOneAndDelete } = require("../../models/user")
const bcryptUtil = require('../../bcryptUtil')
const User = require("../../models/user")
const router = require("../user")
const {findIfNameExists} = require('./utilFunctions')


const getSpecificUser = async (req, res) => {
    try {
        const { id } = req
    
        const user = await User.findOne({ _id: id })

        if (!user)
            return res.status(404).json({ err: 'user not found' })

        return res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({ err: true })
    }
}

const updateUser = async (req, res) => {
    try {
        const { newName, newPassword } = req.body
        const { id } = req

        if (!newName && !newPassword)
            return res.status(404).json({ err: 'not provided new name' })
        
        const updateParmams = {}
        if (newName){
            if(await findIfNameExists(newName))
            return res.status(404).json({err:'user name already exists'})
            updateParmams.name = newName
        }
        if (newPassword)
            updateParmams.password =await bcryptUtil.generateHashedPassword(newPassword)

        const updatedUsr = await User.findOneAndUpdate({ _id: id }, updateParmams, {
            new: true
        })

        if (!updatedUsr)
            return res.status(404).json('user not found')

        return res.status(200).json(updatedUsr)

    } catch (error) {
        console.log(error)
        res.status(500).json({ err: true })
    }
}
const deleteUSer = async (req, res) => {
    try {
        const { id } = req

        const deleteddUser = await User.findOneAndDelete({ _id: id })
        if (!deleteddUser)
            return res.status(404).json({ err: 'user not found' })

        return res.status(200).json({ deleteUSer: deleteddUser })

    } catch (error) {
        console.log(error)
        res.status(500).json({ err: true })
    }
}

/*
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
        console.log(error)
        res.status(500).json({ err: true })
    }
}
*/

module.exports = {
    deleteUSer,
    updateUser,
    getSpecificUser
}