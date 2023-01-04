import React from 'react'
import "./navbar.css";
import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    if(true) {
     navigate("/login");
   }
 };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="headerSearchInput">
          <h2>Admin Booking for Hotel Booking</h2>
        </div>
        <div className="items">
          <div className="item">
            <Button 
              variant="contained"
              sx={{ mt: 3, mb: 3, mr: 2 }}
              onClick={handleClick}>Login</Button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default NavBar