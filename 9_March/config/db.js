const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

const connectToDB = async() =>{
    await mongoose.connect(process.env.Mongo_DB_URI).then(
        ()=>{
            console.log(`${process.env.Mongo_DB_URI} is connected`)
        }
    ).catch((err)=>{
        console.log(err)
    });
}

module.exports ={
    connectToDB
}