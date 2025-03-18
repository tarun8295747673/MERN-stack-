const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');

dotenv.config();


const generateToken = (payload) =>{
    return jwt.sign(payload, process.env.JWT_Secret,  {expiresIn: '7d'})
}


module.exports ={
    generateToken
}