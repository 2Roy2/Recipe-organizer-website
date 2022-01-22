const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: String,
    img:
        { data: Buffer, contentType: String },
    description: {
        ingredients: [String],
        instructions: String
    }
}, { timeStamp: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe; 