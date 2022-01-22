const express = require("express")
const User = require("../models/user")
const {getAllUsers, addUser}=require('./routerFunctions/user')

const router = express.Router()

// Get all posts
router.get('/',getAllUsers )


router.post('/', addUser)

router.get('/:name',)

module.exports = router

