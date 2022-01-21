const mongoDbuserAndPassword= require("./mongoDbUserbanePassword.js")

const dbURI=`mongodb+srv://royarad:${mongoDbuserAndPassword.password}@recipeorganizerwebsite.cszgb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
console.log(dbURI);