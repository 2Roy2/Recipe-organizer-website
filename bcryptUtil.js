const bcrypt = require('bcrypt')

const generateHashedPassword = async(password)=>{
    try {
        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(password, salt)
        return hashPassword
    } catch (error) {
        console.log(error)
    }
}

//compare password to hased version of password (with salt)
const comparePassword= async(password, hasedPassword)=>{
    try {
        return await bcrypt.comparePassword(password,hasedPassword)
    } catch (error) {
        console.log(error)

    }
}

module.exports = {
    generateHashedPassword
}