import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addExpense, updateExpense } from "../services/expenseService";

function ExpenseForm({ expenseData, isEdit = false }) {

  const navigate = useNavigate();

  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
    description: "",
    receiptImage: "",
    userId: 1,
  });

  useEffect(() => {
    if (isEdit && expenseData) {
      setExpense(expenseData);
    }
  }, [expenseData, isEdit]);

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if (isEdit) {

        await updateExpense(expense.expenseId, expense);

        alert("Expense Updated Successfully!");

      } else {

        await addExpense(expense);

        alert("Expense Added Successfully!");

      }

      navigate("/");

    } catch (error) {

      console.error(error);

      alert(isEdit ? "Failed to update expense!" : "Failed to add expense!");

    }
  };

  return (

    <form onSubmit={handleSubmit}>

      <div className="mb-3">
        <label className="form-label">Title</label>

        <input
          type="text"
          className="form-control"
          name="title"
          value={expense.title}
          onChange={handleChange}
          required
        />

      </div>

      <div className="mb-3">
        <label className="form-label">Amount</label>

        <input
          type="number"
          className="form-control"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          required
        />

      </div>

      <div className="mb-3">

        <label className="form-label">Category</label>

        <select
          className="form-select"
          name="category"
          value={expense.category}
          onChange={handleChange}
          required
        >

          <option value="">Select Category</option>
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Medical</option>
          <option>Education</option>
          <option>Entertainment</option>
          <option>Other</option>

        </select>

      </div>

      <div className="mb-3">

        <label className="form-label">Date</label>

        <input
          type="date"
          className="form-control"
          name="date"
          value={expense.date}
          onChange={handleChange}
          required
        />

      </div>

      <div className="mb-3">

        <label className="form-label">Description</label>

        <textarea
          className="form-control"
          rows="3"
          name="description"
          value={expense.description}
          onChange={handleChange}
        />

      </div>

      <div className="mb-3">

       

      </div>

      <div className="d-grid">

        <button className="btn btn-primary btn-lg">

          {isEdit ? "Update Expense" : "Save Expense"}

        </button>

      </div>

    </form>

  );

}

export default ExpenseForm;