import React from 'react'
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : {name:" ",email:" "}
  console.log(storedUser);
  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/"); 
  };
  return (
    <div>
      <h2>Welcome to the home {user.name}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
export default Home
