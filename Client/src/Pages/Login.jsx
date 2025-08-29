import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer ,toast } from "react-toastify";
import "./Login.css";

function Login() {
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Navigate = useNavigate();

  const HandleLogin = async(e) => {
    e.preventDefault(); 
    try {
    const login_url = "http://localhost:3000/auth/login"
    if (!mail || !password) {
      setError("Email and password are required!");
      return;
    }
    setError(""); 
    const payload = { email: mail, password };
    console.log("Login Payload:", payload);
    const res = await fetch(login_url,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(payload),
    });
    const result = await res.json();
    console.log(result);
    if(result?.success){
      localStorage.setItem("token",result?.token);
      localStorage.setItem("user",JSON.stringify({"name":result?.name,"email":result?.email}))
      toast.success(result?.message);
      Navigate("/home")
    }
    else{
      toast.error(result?.message)
    }
    } catch (error) {
      toast.error(error.message || "There is some error on client side")
    }
  };

  return (
    <Box className="Login-container">
      <img src={logo} alt="logo" className="Logoimage" />
      <Box component="form" className="Wrapper-Login" onSubmit={HandleLogin}>
        <TextField
          variant="standard"
          placeholder="Enter your Email"
          value={mail}
          className="NameLogin"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="standard"
          type="password"
          value={password}
          placeholder="Enter your password"
          className="NameLogin"
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <Typography color="error" className="error-message">
            {error}
          </Typography>
        )}

        <Button
          variant="contained"
          className="LoginButton"
          type="submit" 
        >
          Login
        </Button>
        <Typography className="or-button-login">OR</Typography>
        <Button
          variant="outlined"
          className="SignedIn"
          onClick={() => Navigate("/signup")}
        >
          Create An Account
        </Button>
      </Box>
      <ToastContainer/>
    </Box>
  );
}

export default Login;
