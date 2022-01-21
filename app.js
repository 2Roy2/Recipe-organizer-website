const mongoDbPassword= require("./mongoDbPassword.js")

const dbURI=`mongodb+srv://royarad:${mongoDbPassword.password}@recipeorganizerwebsite.cszgb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
console.log(dbURI);