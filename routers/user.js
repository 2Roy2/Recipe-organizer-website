const express = require("express")
const User = require("../models/user");
const router = express.Router()

// Get all posts
router.get('/', async (req, res) => {
    User.find().
    then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json({err})
    })
})


router.post('/', async (req, res) => {
    const {name, password}=req.body;

    const user=User({
        name:name,
        password:password,
    });
    user.save().then((result)=>{
        res.json(result);
    })
    .catch((err)=>{
        res.json({err})
    });
})

module.exports = router
 
