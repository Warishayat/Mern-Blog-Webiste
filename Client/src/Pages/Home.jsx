import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import HeroSection from "../Components/Hero/HeroSection";
import BlogSection from "../Components/BlogSection/BlogSection";

function Home() {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : { name: " ", email: " " };
  console.log(storedUser);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <HeroSection/>
      <BlogSection/>
    </div>
  )
}
export default Home;
