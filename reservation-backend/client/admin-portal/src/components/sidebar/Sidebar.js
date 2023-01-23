import React from 'react'
import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate } from "react-router-dom";
import { Button } from '@mui/material';


const Sidebar = () => {
  const navigate = useNavigate();
  const Logout =()=> {
    localStorage.removeItem("auth");
    localStorage.clear();
    navigate('/login');
  }
  return (
    <div className="sidebar">

      <div className="center">
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <p className="title">BOOKINGS</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>All Guests</span>
            </li>
          </Link>

          <Link to="/managers" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>All Managers</span>
            </li>
          </Link>

          <Link to="/bookings" style={{ textDecoration: "none", alignItems: 'center' }}>
            <li>
              <StoreIcon className="icon" />
              <span>Bookings</span>
            </li>
          </Link>

          <Link to="/hotels" style={{ textDecoration: "none", alignItems: 'center' }}>
            <li>
              <StoreIcon className="icon" />
              <span>Hotels</span>
            </li>
          </Link>
          
          <Link to="/profile" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          </Link>

         <Button onClick={Logout} style={{ textDecoration: "none" }}>
          <li>
            <ExitToAppIcon className="icon" />
            <span style={{ marginBottom: 12}}>Logout</span>
          </li>
          </Button>
          

        </ul>
      </div>
    </div>
  )
}

export default Sidebar;