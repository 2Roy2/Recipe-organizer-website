const User = require("../../models/user")
const bcryptUtil =require('../../bcryptUtil')
const jwt = require('jsonwebtoken')

const logger = async(req,res)=>{
    try {
        const { name, password } = req.body

        if (!name || !password)
            return res.status(404).json({ err: "no name or password" });
        
        const users=await User.find({name:name})
        if(!users)
            return res.status(404).json({ err: "user not found" })

        const user = await users.find(usr=> bcryptUtil.comparePassword(password,usr.password))
        if(!user)
            return res.status(404).json({ err: "user not found" })
    
        const usrID=user._id.toString()

        const accessToken= jwt.sign(usrID,process.env.ACCESS_TOKEN)
        
        res.status(200).json({accessToken:accessToken})
    } catch (error) {
        console.log(error)
        res.status(500).json({ err: true })
    }

}
const register = async (req, res)=>{
    try {
        const { name, password } = req.body
        if (!name || !password)
            return res.status(404).json({ err: "no name or password" });
        //check if user with same name already exists
        const existingUser = await User.findOne({ name: name })
            .then((result) => {
                if (result)
                    return { err: "user name already exists" }
            })
            .catch((err) => {
                res.status(404).json({ err })
            })
        if (existingUser)
            return res.status(404).json(existingUser)
        
        const hashPassword = await bcryptUtil.generateHashedPassword(password)

        if(!hashPassword)
            return res.status(404).json({err:'no hash password'})

        //create user
        const user = User({
            name: name,
            password: hashPassword,
            recipe: []
        });
        user.save().then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(404).json({ err })
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ err: true })
    }
}
module.exports={
    logger,
    register
}