const bcryptUtil = require('../../bcryptUtil')
const User = require("../../models/user") 

//function that gets list of potential users and returns the right one
async function findCurrectUser(users,password){
    if(!users)
        return undefined

    for (let i = 0; i < users.length; i++) {
        const found = await bcryptUtil.comparePassword(password,users[i].password)
        if(found===true)
            return users[i]
      }
      
    return undefined
}

async function findIfNameExists(name){
    //check if user with same name already exists
    const existingUser = await User.findOne({ name: name })
    if(existingUser)
        return true
    return false
}

module.exports={
    findCurrectUser,
    findIfNameExists
}