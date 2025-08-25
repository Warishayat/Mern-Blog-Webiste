const express = require('express');
const router = express.Router();
const {SignupUser,LoginUser} = require("../Controllers/UserModel");
const {SignupValidation,LoginValidation} = require('../Middlewares/Validation');

router.post("/signup",SignupValidation,SignupUser);
router.post("/login".LoginValidation,LoginUser);

module.exports = router;