import React from "react";
import SideBar from "../components/SideBar/SideBar";
import "../container/home.css";
import Navbar from "../components/Navbar/Navbar";
import DailyAct from "../components/DailyAct/DailyAct";
import Activity from "../components/Activity/Activity";
import RecentOrder from "../components/RecentOrder/RecentOrder";
import NetProfit from "../components/NetProfit/NetProfit";
import MoreComp from "../components/MoreComp/MoreComp";
import CutomerFeedback from "../components/CutomerFeedback/CutomerFeedback";
import SmallNavbar from "../components/SmallNavbar/SmallNavbar";

const Home = () => {
  return (
    <div className="home">
      <div className="sideBarContainer">
        <SideBar />
      </div>
      <div className="containerBox">
        <div className="navbarDiv">
          <Navbar />
          <SmallNavbar />
        </div>
        <div className="dashboard">
          <h4>Dashboard</h4>
        </div>
        <div className="mainContainer">
          <div className="containerLeft">
            <DailyAct />
            <Activity />
            <RecentOrder />
          </div>
          <div className="containerRight">
            <NetProfit />
            <MoreComp />
            <CutomerFeedback />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
