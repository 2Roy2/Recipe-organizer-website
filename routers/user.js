const express = require("express")
const User = require("../models/user")
const {getAllUsers, addUser,deleteUSer,updateUser,getSpecificUser}=require('./routerFunctions/user')

const router = express.Router()

// Get all posts
router.get('/',getAllUsers )

//get spacific user
router.get('/:id',getSpecificUser)

//add new user, you need name and password in body
router.post('/', addUser)

//delete one user
router.delete('/:id',deleteUSer)

//change user name or and password, you need name or and password in body
router.patch('/:id',updateUser)

module.exports = router

