import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";
import "../Activity/activity.css";

const Activity = () => {
  const data = [
    {
      name: "1",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "5",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "10",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "15",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "20",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "25",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "30",
      uv: 2490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "35",
      uv: 3000,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "40",
      uv: 3090,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "45",
      uv: 1590,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "50",
      uv: 2690,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "55",
      uv: 1490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "60",
      uv: 3090,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "65",
      uv: 200,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="activityChart">
      <div className="chartContainer">
        <div className="title">
          <h6>Activity</h6>
          <div className="select-div">
            <select className="select" name="cars" id="cars">
              <option value="week"> Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
            </select>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="60%">
          <BarChart
            width={10}
            height={20}
            data={data}
            margin={{
              top: 5,
              bottom: 2,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis dataKey="amt" />
            <Bar dataKey="uv" fill="#7095ff" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Activity;
