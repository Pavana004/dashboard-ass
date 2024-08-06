import React from "react";
import SideBar from "../SideBar/SideBar";
import Navbar from "../Navbar/Navbar";

const State = () => {
  return (
    <div className="home">
      <div className="sideBarContainer">
        <SideBar />
      </div>
      <div className="containerBox">
        <div className="navbarDiv">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default State;
