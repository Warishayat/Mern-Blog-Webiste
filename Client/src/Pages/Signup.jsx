import React, { useState } from "react";
import { Box, TextField, Button,Typography } from "@mui/material";
import logo from "../assets/logo.png";
import {useNavigate} from 'react-router-dom'
import "./Signup.css";

function Signup() {
  const Navigate = useNavigate();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSignin = ()=>{
    console.log("Sinin payload is")
    const payload ={
      "name":name,
      "email":email,
      "password" : password
    }
    console.log(payload)
  }
  return (
    <Box className="signup-container">
      <img src={logo} alt="logo" className="Logoimage" />
      <Box className="Wrapper">
        <TextField
          variant="standard"
          value={name}
          placeholder="Enter your Name"
          className="NameSignup"
          onChange={(e)=>setName(e.target.value)}
        />
        <TextField
          variant="standard"
          value={email}
          placeholder="Enter your Email"
          className="NameSignup"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <TextField
          variant="standard"
          value={password}
          type="password"
          placeholder="Enter your password"
          onChange={(e)=>setPassword(e.target.value)}
          className="NameSignup"
        />
        <Button variant="contained" className="signupButton" onClick={handleSignin}>
          Signup
        </Button>
        <Typography className="or-button">OR</Typography>
        <Button variant="outlined" className="LoggedIn" onClick={()=>Navigate("/")}>
          Already have Account
        </Button>
      </Box>
    </Box>
  );
}

export default Signup;
