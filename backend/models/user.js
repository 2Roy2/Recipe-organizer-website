const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    password: String,
    recipes: [{
    _id:mongoose.Schema.Types.ObjectId,
    name: String,
    description: {
        ingredients: String,
        instructions: String
    }
    }]
}, { timeStamp: true })

const User = mongoose.model('User', userSchema)

module.exports = User

