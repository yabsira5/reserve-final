import React from 'react'
import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="center">
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <p className="title">BOOKINGS</p>

          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>

          {/*<Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>All Users</span>
            </li>
          </Link>*/}

          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>My Hotels</span>
            </li>
          </Link>

          <Link to="/viewBooked" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>View Booked </span>
            </li>
          </Link>

        </ul>
      </div>
    </div>
  )
}

export default Sidebar;