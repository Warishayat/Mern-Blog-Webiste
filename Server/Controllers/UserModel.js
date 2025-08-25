const User = require('../Models/User');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config();


const SignupUser  = async(req,res)=>{
    try {
        console.log(req.body);
        const {name,email,password} = req.body
        const existUser = await User.findOne({email});
        if (existUser){
            return res.status(404).json({
                success:false,
                message: "User is found already .You can login."
            })
        }
        const hashpassword = await bcrypt.hash(password,10);
        const newuser = new User({name,email,hashpassword})
        await newuser.save();
        res.status(201).json({
            sucesss:true,
            message: "User is created Successfully"
        })
    } catch (error) {
        console.log(req.body);
        return res.status(500).json({
            success:false,
            message:"Inrernal Server Error"
        })
    }
}

// Login the user
const LoginUser = async (req,res)=>{
    try {
        const {email,password}  = req.body;
        const error_message = "Auth Failed,Email or password is incorrect."
        const existUser =await User.findOne({email})
        if (!existUser){
            return res.status(403).json({
                success:false,
                message: "User not Found please login first"
            })
        }
        // user exist compare the password
        const savepassword = existUser.password;
        const MatchPassword = await bcrypt.compare(password, savepassword);

        if (!MatchPassword){
            return res.status(403).json({
                success:false,
                message:error_message
            })
        }
        console.log("Jwt is issuing wait for a moment");
        const token = jsonwebtoken.sign(
            {email:existUser.email,_id:existUser._id},
            process.env.Secret_key,
            {expiresIn:"12h"}
        )
        return res.status(200).json({
            sucess:true,
            message:"Login SuccessFull",
            token:token,
            email,
            name:existUser.name
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internal Server Error,Try it again"
        })
    }

}

module.exports = {
    SignupUser,
    LoginUser
}
