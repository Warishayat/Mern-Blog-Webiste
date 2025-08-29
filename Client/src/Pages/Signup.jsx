import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import "./Signup.css";

function Signup() {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignin = async(e) => {
    e.preventDefault(); 
    try {
      const singnup_url = "http://localhost:3000/auth/signup";
    if (!name || !email || !password) {
      setError("All fields are required!");
      return;
    }
    setError(""); 
    const payload = {
      name,
      email,
      password,
    };
    console.log("Signin payload is", payload);
    const res = await fetch(singnup_url,{
      method:"POST",
      headers:{
        "Content-Type":"Application/json"
      },
      body:JSON.stringify(payload)
    });
    const result = await res.json();
    if(result?.sucesss){
      toast.success(result?.message || "User Created Successfully")
      setTimeout(()=>Navigate("/"),2000);
    }
    else{
      toast.error(result.message || "Signup failed!");
    }
    } catch (error) {
      toast.error(error?.message  || "There is some error on client side")
    }
  };

  return (
    <Box className="signup-container">
      <img src={logo} alt="logo" className="Logoimage" />
      <Box component="form" className="Wrapper" onSubmit={handleSignin}>
        <TextField
          variant="standard"
          value={name}
          placeholder="Enter your Name"
          className="NameSignup"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="standard"
          value={email}
          placeholder="Enter your Email"
          className="NameSignup"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="standard"
          value={password}
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          className="NameSignup"
        />

        {error && (
          <Typography color="error" className="error-message">
            {error}
          </Typography>
        )}

        <Button
          variant="contained"
          className="signupButton"
          type="submit" 
        >
          Signup
        </Button>
        <Typography className="or-button">OR</Typography>
        <Button
          variant="outlined"
          className="LoggedIn"
          onClick={() => Navigate("/")}
        >
          Already have Account
        </Button>
      </Box>
      <ToastContainer/>
    </Box>
  );
}

export default Signup;
