import React from "react";
import "../NetProfit/netProfit.css";
import { FaCaretDown } from "react-icons/fa6";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement);

const data = {
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ["#7395F9", "#273060"],
      borderColor: ["#7395F9", "#273060"],
      radius: "90%",
      hoverBackground: ["#7395F9", "#273060"],
      cutout: 40,
    },
  ],
};

const textCenter = {
  id: "textCenter",
  beforeDatasetsDraw(chart, arg, pluginOptions) {
    const ctx = chart.ctx;

    ctx.save();

    ctx.fillStyle = "white";
    ctx.font = "15px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      "70%",
      chart.getDatasetMeta(0).data[0].x,
      chart.getDatasetMeta(0).data[0].y
    );
  },
};

const NetProfit = () => {
  return (
    <div className="netprofit">
      <div className="totalCount">
        <p>Net Profit</p>
        <h2>$6759.25</h2>
        <div className="downCare">
          <FaCaretDown size={12} />
          <p>3%</p>
        </div>
      </div>
      <div className="pieChart">
        <div className="doughnut">
          <Doughnut data={data} plugins={[textCenter]} />
        </div>
        <p>* The values here has been rounded off</p>
      </div>
    </div>
  );
};

export default NetProfit;
