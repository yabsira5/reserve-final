import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu";
import { Divider } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HouseIcon from "@mui/icons-material/House"
import "./navbar.css";

import { noUserSettings, withUserSettings } from "./constants";

const Navbar = () => {

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [navigateTo, setNavigateTo] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (navigateTo) {
        navigate(navigateTo);
    }
  }, [navigateTo]);

  const user = localStorage.getItem("auth");
  let settings = user ? withUserSettings : noUserSettings;

 const handleHome = () => {
  if(true) {
   navigate("/");
 }
};

const handleAccount = () => {
  if(true) {
   navigate("/profile");
 }
};

const handleSetting = (setting) => {
  if (setting.label === "Log out") {
      localStorage.removeItem("auth");
  }
  handleCloseUserMenu();
  setNavigateTo(setting.link);
};

const handleOpenUserMenu = (event) => {
  setAnchorElUser(event.currentTarget);
};


const handleCloseUserMenu = () => {
  setAnchorElUser(null);
};


  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Hotel booking</span>
        <div className="navItems">
            <IconButton
                className="actions__btn actions__btn--home"
                onClick={handleHome}
                sx={{ p: 0, ml:3 }}
              >
                  <HouseIcon className="actions__btn-icon" />
              </IconButton>

              <IconButton
                className="actions__btn actions__btn--user"
                onClick={handleOpenUserMenu}
                sx={{ p: 0,ml: 2 }}
              >
                <MenuIcon className="actions__btn-icon" />
                  <AccountCircleIcon className="actions__btn-icon" />
              </IconButton>

              {/* Actions' sub nav */}
              <Menu
                className="actions__sub-nav"
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                vertical: "top",
                horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                <div key={setting.label}>
                  <MenuItem
                    className="sub-nav__item"
                    key={setting.label}
                    onClick={() => handleSetting(setting)}
                  >
                  {setting.label}
                  </MenuItem>
                  {setting.divider ? <Divider /> : ""}
                  </div>
                  ))}
               </Menu>

              <Button 
              variant="contained"
              sx={{ mt: 4, mb: 3, mr: 2, ml: 2 }}
              onClick={handleAccount}>Account</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar