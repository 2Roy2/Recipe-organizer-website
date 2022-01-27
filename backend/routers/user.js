const express = require("express")
const User = require("../models/user")
const {deleteUSer,updateUser,getSpecificUser}=require('./routerFunctions/user')

const router = express.Router()

/*
// Get all posts
router.get('/all',getAllUsers )
*/

//get spacific user
router.get('/',getSpecificUser)

//delete one user
router.delete('/',deleteUSer)

//change user name or and password, you need name or and password in body
router.patch('/',updateUser)

module.exports = router

