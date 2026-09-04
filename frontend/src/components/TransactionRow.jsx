import React from "react";
import { formatDate } from "../lib/utils";
import { Link } from "react-router";
import api from "../lib/axios";

const TransactionRow = ({ transaction, setTransactions }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      await api.delete(`/${id}`);
      setTransactions((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting transaction", error);
    }
  };

  return (
    <tr>
      <td>{transaction.description}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.category}</td>
      <td>{transaction.payment}</td>
      <td>{formatDate(transaction.createdAt)}</td>
      <td>
        <Link to={`/${transaction._id}`}>Edit</Link>
      </td>
      <td
        onClick={(e) => {
          handleDelete(e, transaction._id);
        }}
      >
        Delete
      </td>
    </tr>
  );
};

export default TransactionRow;
