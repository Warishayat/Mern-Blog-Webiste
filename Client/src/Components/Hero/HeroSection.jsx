import React from 'react'
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import '../Hero/Home.css'
function HeroSection() {
    const navigate = useNavigate()
  return (
    <div className="hero-section">
      <div className="cardText">
        <h1 className="Card-heading">
          Welcome to the Application of AI Blogs — where innovation meets
          imagination..
        </h1>
        <div className="card-button">
          <Button variant="contained" onClick={()=>navigate("/blogs")}>Blogs</Button>
          <Button variant="outlined" onClick={()=>navigate("/contact")}>Contact Us</Button>
        </div>
      </div>
    </div>
  )
}
export default HeroSection
