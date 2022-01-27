const express = require("express")
const User = require("../models/user")
const {register} = require("./routerFunctions/loginAndRegister")
const router = express.Router();

//register to server provide name and password
router.post('/',register)

module.exports = router;