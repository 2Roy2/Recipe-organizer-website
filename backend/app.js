require('dotenv').config()
const {dbURI}= require('./mongoDbPassword.js')
const mongoose = require('mongoose')
const express= require('express')
const {authenticate} = require('./middlewares/authentication')
const {addHeaderForCORS}= require('./middlewares/corsPolicySolution')
const userRouter= require('./routers/user')
const recipeRouter=require('./routers/recipe')
const loginRouter=require('./routers/login')
const registerRouter = require('./routers/register')


mongoose.connect(dbURI).then(()=>{
    console.log("connected to db!")

    const app = express();
    app.use(express.urlencoded({extended:false}))
    app.use(express.json())

    app.use(addHeaderForCORS)

    app.use('/api/login',loginRouter)
    app.use('/api/register',registerRouter)

    app.use(authenticate)
    app.use('/api/user',userRouter)
    app.use('/api/user/recipe',recipeRouter)

    app.listen(5000,()=>{
        console.log('server is running...')
    })
}
)
 
