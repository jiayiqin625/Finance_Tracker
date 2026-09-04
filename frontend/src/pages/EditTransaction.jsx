import React, { useState, useEffect } from "react";
import api from "../lib/axios";
import { useParams, useNavigate, Link } from "react-router";

const EditTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransaction = async () => {
      const res = await api.get(`/${id}`);
      setTransaction(res.data);
      console.log("loaded transaction:", res.data);
      setLoading(false);
    };

    fetchTransaction();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    await api.put(`/${id}`, data);
    navigate("/");
  };

  if (loading) return <div>Hi</div>;

  return (
    <div>
      <Link to="/"> Back to Home </Link>
      <form onSubmit={handleUpdate}>
        <div className="form-control">
          <label>
            <span>Description</span>
          </label>
          <input
            type="text"
            name="description"
            defaultValue={transaction.description}
          />
        </div>

        <div className="form-control">
          <label>
            <span>Amount</span>
          </label>
          <input
            type="number"
            name="amount"
            defaultValue={transaction.amount}
          />
        </div>

        <div className="form-control">
          <label>
            <span>Category</span>
          </label>
          <input
            type="text"
            name="category"
            defaultValue={transaction.category}
          />
        </div>

        <div className="form-control">
          <label>
            <span>Payment Method</span>
          </label>
          <select name="payment" defaultValue={transaction.payment}>
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

export default EditTransaction;
