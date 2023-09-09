import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import "./Header.css";

const Header = ({ userPhoto }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          src="raydrive-logo.png"
          alt="logo"
        />
        <span>RayDrive</span>
      </div>
      <div className="header__searchContainer">
        <div className="header__searchBar">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search in Storage"
          />
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="header__icons">
        <span>
          <HelpOutlineIcon />
          <SettingsIcon />
        </span>
        <AppsIcon />
        <Avatar
          src={userPhoto}
          className="header__iconsAvatar"
        />
      </div>
    </div>
  );
};
export default Header;
