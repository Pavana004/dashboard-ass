import React from "react";
import "../DailyAct/dailyAct.css";
import { FaCaretDown } from "react-icons/fa6";
import cart from "../../image/cart.png";
import bag from "../../image/bag.png";
import cancel from "../../image/cancel.png";
import money from "../../image/money.png";

const DailyAct = () => {
  return (
    <div className="dailyAct">
      <div className="childContainer">
        <div className="dailyicons">
          <img src={cart} alt="..." />
        </div>
        <p className="orders">Total Orders</p>
        <div className="value">
          <h6>75</h6>
          <div className="carePrecentage">
            <FaCaretDown size={12} />
            <p>3%</p>
          </div>
        </div>
      </div>
      <div className="childContainer">
        <div className="dailyicons-1">
          <img src={bag} alt="..." />
        </div>
        <p className="orders-1">Total Delivered</p>
        <div className="value-1">
          <h6>70</h6>
          <div className="carePrecentage-1">
            <FaCaretDown size={12} />
            <p>3%</p>
          </div>
        </div>
      </div>
      <div className="childContainer">
        <div className="dailyicons-2">
          <img src={cancel} alt="..." />
        </div>
        <p className="orders-2">Total Cancelled</p>
        <div className="value-2">
          <h6>5</h6>
          <div className="carePrecentage-2">
            <FaCaretDown size={12} />
            <p>3%</p>
          </div>
        </div>
      </div>
      <div className="childContainer">
        <div className="dailyicons-3">
          <img src={money} alt="..." />
        </div>
        <p className="orders-3">Total Revenue</p>
        <div className="value-3">
          <h6>$ 12k</h6>
          <div className="carePrecentage-3">
            <FaCaretDown size={12} />
            <p>3%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyAct;
