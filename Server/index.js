const express = require('express')
const app = express()
const dotenv = require("dotenv").config()
const ConnectDB = require("../Server/Config/db")
const AuthRouter = require('../Server/Routes/AuthenticationRoute')
const BodyParser = require("body-parser"); 
const PORT = process.env.Port || 3000 ;


ConnectDB();

app.get("/",(req,res)=>{
    res.send("App is ready for deplloyment")
})

app.use("/auth",AuthRouter);


app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`)
})