import React from "react";
import "../Navbar/navbar.css";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="search">
        <div className="searchBox">
          <CiSearch size={20} />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="icons">
        <div className="icons-box1">
          <CiMail size={20} />
        </div>
        <div className="icons-box1">
          <IoSettingsOutline size={20} />
        </div>
        <div className="icons-box1">
          <IoIosNotificationsOutline size={20} />
        </div>
        <div className="icons-box2">
          <img
            src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
            alt="profileImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
