import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Navbar/Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
      <NavLink to={"/home"} style={({ isActive }) => ({
                    color: isActive ? "orange" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                })}>Home</NavLink>
      <NavLink to={"/about"} style={({ isActive }) => ({
                    color: isActive ? "orange" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                })}>About</NavLink>
      <NavLink to={"/contact"} style={({ isActive }) => ({
                    color: isActive ? "orange" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                })}>Contact</NavLink>
      <NavLink to={"/service"} style={({ isActive }) => ({
                    color: isActive ? "orange" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                })}>Services</NavLink>
      <NavLink to={"/blogs"} style={({ isActive }) => ({
                    color: isActive ? "orange" : "black",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                })}>Blogs</NavLink>
    </div>
  )
}
export default Navbar
