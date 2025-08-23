import React, { useState } from "react";
import { Box, TextField, Button,Typography } from "@mui/material";
import logo from "../assets/logo.png";
import { useNavigate} from 'react-router-dom'
import "./Login.css";

function Login() {
  const [mail,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const Navigate = useNavigate();
  const HandleLogin =()=>{
    console.log("Payload is");
    const payload = {"email":mail,"password":password}
    console.log(payload);
  }
  return (
    <Box className="Login-container">
      <img src={logo} alt="logo" className="Logoimage" />
      <Box className="Wrapper-Login">
        <TextField
          variant="standard"
          placeholder="Enter your Email"
          value={mail}
          className="NameLogin"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <TextField
          variant="standard"
          type="password"
          value={password}
          placeholder="Enter your password"
          className="NameLogin"
          onChange={(e)=>setPassword(e.target.value)}
        />
        <Button variant="contained" className="LoginButton" onClick={HandleLogin}>
          Login
        </Button>
        <Typography className="or-button-login">OR</Typography>
        <Button variant="outlined" className="SignedIn" onClick={()=>Navigate("/signup")}>
          Creat An Account
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
