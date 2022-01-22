const express = require("express")
const User = require("../models/user")
const router = express.Router()

// Get all posts
router.get('/', async (req, res) => {
    User.find().
        then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.json({ err })
        })
})


router.post('/', async (req, res) => {
    const { name, password } = req.body
    if (!name || !password)
        return res.status(400).json({ err: "no name or password" });

    //check if user with same name already exists
    const existingUser=await User.findOne({name:name})
    .then((result)=>{
        if(result)
        return {err:"user already exists"}
    })
    .catch((err) => {
        res.json({ err })
    })
    if(existingUser)
        return res.json(existingUser)
    
    //create user
    const user = User({
        name: name,
        password: password,
        recipe: []
    });
    user.save().then((result) => {
        res.json(result);
    })
        .catch((err) => {
            res.json({ err })
        });
})

router.get('/:name',(req, res)=>{


})

module.exports = router

