const { generateToken } = require("../../utils/jwtUtils.js");
const { ResponseHandler } = require("../../utils/responseHandler.js");

const loginController = async(req, res) =>{
    try{

        const {email} = req.body;

        if(!email){
            return res.status(400).json(ResponseHandler(false, null, "Missing user email"));
        }

        const token = generateToken({email});

        return res.status(200).json(ResponseHandler(true, {email, token}, "Login Success"))

    }catch{
        return res.status(500).json(ResponseHandler(false, null, "Internal Server Error"))
    }
}


module.exports = {
    loginController
}