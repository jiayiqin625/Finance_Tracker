import React from "react";
import api from "../lib/axios";
import { Link, useNavigate } from "react-router";

const CreateTransaction = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());

    await api.post("/", data);

    navigate("/");
  };

  return (
    <div>
      <Link to="/"> Back to Home </Link>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>
            <span>Description</span>
          </label>
          <input type="text" name="description" />
        </div>

        <div className="form-control">
          <label>
            <span>Amount</span>
          </label>
          <input type="number" name="amount" />
        </div>

        <div className="form-control">
          <label>
            <span>Category</span>
          </label>
          <input type="text" name="category" />
        </div>

        <div className="form-control">
          <label>
            <span>Payment Method</span>
          </label>
          <select name="payment" defaultValue="Cash">
            <option value="Card">Card</option>
            <option value="Cash">Cash</option>
            <option value="Check">Check</option>
          </select>

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTransaction;
