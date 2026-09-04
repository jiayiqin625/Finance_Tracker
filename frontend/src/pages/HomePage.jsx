import React, { useState, useEffect } from "react";
import api from "../lib/axios.js";
import NoTransactions from "../components/NoTransactions";
import TransactionRow from "../components/TransactionRow";
import PieChart from "../components/PieChart.jsx";
import BarChart from "../components/BarChart.jsx";
import { Link } from "react-router";

const HomePage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await api.get("/");
      const data = res.data;
      console.log(data);
      setTransactions(data);
    };

    fetchTransactions();
  }, []);

  //{transactions.length === 0 && <NoTransactions />}

  return (
    <div className="w-max h-max">
      <Link to={"/create"}>Add Transaction</Link>
      <div className="mx-10">
        <PieChart transactions={transactions} />
      </div>

      <BarChart transactions={transactions} />

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table
          className="min-w-full divide-y divide-gray-200 bg-white text-sm text-left [&_th]:border [&_th]:border-gray-300 [&_th]:px-6 [&_th]:py-4
    [&_td]:border [&_td]:border-gray-300 [&_td]:px-6 [&_td]:py-4"
        >
          <caption className="font-bold text-4xl">Transactions</caption>
          <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-700">
            <tr>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Payment</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4"></th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <TransactionRow
                key={transaction._id}
                transaction={transaction}
                setTransactions={setTransactions}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
