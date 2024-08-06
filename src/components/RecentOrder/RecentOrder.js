import React from "react";
import "../RecentOrder/recentOrder.css";
import data from "../../container/data.json";

const RecentOrder = () => {
  return (
    <div className="recentOrder">
      <div className="insideCon">
        <div className="titleCon">
          <h6>Recent Orders</h6>
        </div>
        <table className="table">
          <thead className="head">
            <tr>
              <th className="customer">Customer</th>
              <th className="order">Order No</th>
              <th className="amount">Amount</th>
              <th className="status">Status</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {data.map((order, index) => (
              <tr key={index}>
                <td>
                  <div className="avatarCon">
                    <div className="avatar">
                      <img src={order.profilepicture} alt="...." />
                    </div>
                    <div> {order.name}</div>
                  </div>
                </td>
                <td>{order.orderno}</td>
                <td>{order.amount}</td>
                <td value={order.status}>
                  <div
                    className={
                      order.status === "Delivered"
                        ? "statusChild"
                        : "statusChildRed"
                    }
                  >
                    {order.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrder;
