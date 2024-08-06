import React from "react";
import logo from "../../image/logo.png";
import { IoMdHome } from "react-icons/io";
import { BsClipboard2Check } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { BiBarChartSquare } from "react-icons/bi";
import { LuArrowDownRightFromCircle } from "react-icons/lu";
import "../SideBar/sidebar.css";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="main-icons">
        <div className="icons-box">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <IoMdHome size={30} />
          </NavLink>
        </div>
        <div className="icons-box">
          <NavLink
            to="/stats"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <BiBarChartSquare size={30} />
          </NavLink>
        </div>
        <div className="icons-box">
          <NavLink
            to="/note"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <BsClipboard2Check size={30} />
          </NavLink>
        </div>
        <div className="icons-box">
          <NavLink
            to="/wallet"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <CiWallet size={30} />
          </NavLink>
        </div>
        <div className="icons-box">
          <NavLink
            to="/store"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <IoBagCheckOutline size={30} />
          </NavLink>
        </div>
      </div>
      <div className="close-btn">
        <div className="icons-box">
          <Link className="link">
            <LuArrowDownRightFromCircle size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
