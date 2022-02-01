const User = require("../../models/user")
const bcryptUtil =require('../../bcryptUtil')
const jwt = require('jsonwebtoken')
const {findCurrectUser, findIfNameExists} = require('./utilFunctions')

const logger = async(req,res)=>{
    try {
        const { name, password } = req.body

        if (!name || !password)
            return res.status(404).json({ err: "no name or password" });
        
        const users=await User.find({name:name})

        const user = await findCurrectUser(users,password)

        if(!user)
            return res.status(404).json({ err: "user not found" })

        const usrID=user._id.toString()

        const accessToken= jwt.sign(usrID,process.env.ACCESS_TOKEN)
        
        return res.status(200).json({accessToken:accessToken})
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

        if(await findIfNameExists(name))
            return res.status(404).json({err:'user name already exists'})
        
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