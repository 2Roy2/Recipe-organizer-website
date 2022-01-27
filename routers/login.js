const express = require("express")
const User = require("../models/user")
const {logger}=require('./routerFunctions/loginAndRegister')

const router = express.Router();

//log in to server
router.post('/',logger)

module.exports = router;