import React from "react";
import "../MoreComp/MoreComp.css";
import { BiTargetLock } from "react-icons/bi";
import { PiHamburgerLight } from "react-icons/pi";
import { RxCaretRight } from "react-icons/rx";
import { GiOpenedFoodCan } from "react-icons/gi";
import { Link } from "react-router-dom";

const MoreComp = () => {
  return (
    <div className="moreContainer">
      <div className="insideMoreContainer">
        <div className="imageAndTitleBox">
          <div className="iconsBox1">
            <BiTargetLock size={30} />
          </div>
          <h6>Goals</h6>
        </div>
        <div className="navigateLinkIcon">
          <Link to="/" className="link">
            <RxCaretRight size={40} />
          </Link>
        </div>
      </div>
      <div className="insideMoreContainer">
        <div className="imageAndTitleBox">
          <div className="iconsBox2">
            <PiHamburgerLight size={30} />
          </div>
          <h6>Popular Dishes</h6>
        </div>
        <div className="navigateLinkIcon">
          <Link to="/" className="link">
            <RxCaretRight size={40} />
          </Link>
        </div>
      </div>
      <div className="insideMoreContainer">
        <div className="imageAndTitleBox">
          <div className="iconsBox3">
            <GiOpenedFoodCan size={30} />
          </div>
          <h6>Menus</h6>
        </div>
        <div className="navigateLinkIcon">
          <Link to="/" className="link">
            <RxCaretRight size={40} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoreComp;
