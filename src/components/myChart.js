import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
const usersData = [
  {
    year: 2021,
    users: 230,
  },
  {
    year: 2022,
    users: 269,
  },
  {
    year: 2023,
    users: 351,
  },
  {
    year: 2024,
    users: 490,
  },
];
const MyChart = () => {
  const analyse = {
    labels: usersData.map((item) => item.year),
    datasets: [
      {
        label: "users gained",
        data: usersData.map((item) => item.users),
        backgroundColor: "rgba(0, 131, 255,0.4)",
        fill: true,
        borderColor: "rgb(0, 131, 255)",
      },
    ],
  };

  return (
    <div>
      <h1>this is a line chart</h1>
      <div>
        <Line data={analyse} />
      </div>
    </div>
  );
};

export default MyChart;
