const joi = require('joi');

// validate the signup user
const SignupValidation = async(req,res,next)=>{
   const schema = joi.object({
    name:joi.string.min(5).max(20).required(),
    email:joi.string().unique().required(),
    password:joi.string().min(4).max(30).required()
   })
   const error = schema.validate(req.body);

   if(error){
    return res.status(400).json({
        status:false,
        message:error
    })
   }
   next();
}

// validate the login user
const LoginValidation = async(req,res,next)=>{
    const schema = joi.object({
        email:joi.string().min(4).max(20).required(),
        password:joi.object().min(4).max(30).required(),
    })
    const error = joi.validate(req.body);
    if(error){
        res.status(400).json({
            success:false,
            message: error
        })
    }
    next();
}

module.exports = {SignupValidation,LoginValidation}