const jwt = require('jsonwebtoken')

const authenticate = async(req,res,next)=>{
    const authHeader= req.headers['authorization']
    const token =authHeader&& authHeader.split(' ')[1]

    if(token==null)
        return res.status(401).json({err:'no authorization'})
    jwt.verify(token, process.env.ACCESS_TOKEN, async (err,user)=>{
        if(err)
            return res.sendStatus(403)
            
        req.id=user
        next()
    })
}
module.exports ={authenticate}