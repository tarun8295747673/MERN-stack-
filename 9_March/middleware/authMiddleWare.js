const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');

dotenv.config();

const authMiddleware = (req, res, next) =>{
    try{

        const token = req.header("Authorization")?.split(" ")[1];

        if(!token){
            return res.status(401).json({message: "Access denied. No token found"})
        }

        // console.log(token)
        const decoded = jwt.verify(token, process.env.JWT_Secret)
        req.user = decoded;

        next();
    }catch{
        res.status(401).json({message: "Unauthorized! Invalid Token"})
    }
}

module.exports = {
    authMiddleware
}