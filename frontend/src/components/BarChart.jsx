import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const BarChart = ({ transactions = [] }) => {
  const data = {
    labels: transactions.map((transaction) => transaction.category),
    datasets: [
      {
        label: "Categories of Spend",
        data: transactions.map((transaction) => transaction.amount),
      },
    ],
  };

  return <Bar data={data} />;
};

export default BarChart;
