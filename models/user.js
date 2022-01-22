const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    password: String,
    recipes: [{
        name: String,
    img:
        { data: Buffer, contentType: String },
    description: {
        ingredients: [String],
        instructions: String
    }
    }]
}, { timeStamp: true })

const User = mongoose.model('User', userSchema)

module.exports = User
