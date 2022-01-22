const mongoDbPassword= require('./mongoDbPassword.js');
const mongoose = require('mongoose');
const express= require('express');
const userRouter= require('./routers/user');


const dbURI=`mongodb+srv://roy2:${mongoDbPassword.password}@recipeorganizerwebsite.cszgb.mongodb.net/mainDB?retryWrites=true&w=majority`

mongoose.connect(dbURI).then(()=>{
    console.log("connected to db!")

    const app = express();
    app.use(express.urlencoded({extended:false}))
    app.use(express.json());
    app.use('/api/user',userRouter);

    app.listen(5000,()=>{
        console.log('server is running...');
    });
}
);
 
