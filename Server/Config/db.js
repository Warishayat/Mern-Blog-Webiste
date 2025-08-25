const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const database_uri = process.env.DATABASE_URI
const ConnectDB = async()=>{
    try{
        await mongoose.connect(database_uri);
        console.log("Database is connected")
    }catch(error){
        console.log(error);
    }

}
module.exports = ConnectDB