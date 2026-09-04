import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const PieChart = ({ transactions = [] }) => {
  let income = 0;
  let expenses = 0;

  for (const transaction of transactions) {
    if (transaction.amount >= 0) {
      income += transaction.amount;
    } else {
      // 3. Fixed: Keep tracking the real negative math for the balance
      expenses += transaction.amount;
    }
  }

  const finalBalance = income + expenses;

  const data = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        data: [income, Math.abs(expenses)],
      },
    ],
  };

  return (
    <div>
      <Doughnut data={data} />
      Final Balance ${finalBalance}
    </div>
  );
};

export default PieChart;
