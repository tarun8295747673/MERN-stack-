const { ResponseHandler } = require("../../utils/responseHandler")

const {User} = require("../../model/user.model.js");


const addUserController = async (req, res) =>{
    try{
        const {name, age, email} = req.body;
        if(!name || age === undefined || !email){
            return res.status(200).json(ResponseHandler(false, null, "All fields are required"))
        }
        const profile = await User.findOne({email})
        if(profile){
            return res.status(200).json(ResponseHandler(false, null, `${email} already exists.`))
        }
        const newUser = new User({
            name, 
            age,
            email
        })
        await newUser.save();
        return res.status(200).json(ResponseHandler(true, {name, age, email}, "User added successfully"))
    }catch{
        return res.status(500).json(ResponseHandler(true, null, "Request Failed"))
    }
}

module.exports = {
    addUserController
}