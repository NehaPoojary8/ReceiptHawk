import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExpenseCard from "../components/ExpenseCard";
import { getAllExpenses, deleteExpense } from "../services/expenseService";
function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

const totalTransactions = expenses.length;

const highestExpense =
  expenses.length > 0
    ? Math.max(...expenses.map((expense) => expense.amount))
    : 0;
  

console.log("Expenses State:", expenses);
   
  const [search, setSearch] = useState("");
 const [category, setCategory] = useState("All Categories");
 const navigate = useNavigate();

useEffect(() => {
  loadExpenses();
}, []);

const loadExpenses = async () => {
  try {
    const response = await getAllExpenses();
    console.log("Response:", response.data);
    setExpenses(response.data);
  } catch (error) {
    console.error(error);
  }
};
const handleDelete = async (id) => {
  try {
    await deleteExpense(id);
    alert("Expense deleted successfully!");
    loadExpenses();
  } catch (error) {
    console.error(error);
    alert("Failed to delete expense!");
  }
};
  return (
    <div className="container mt-5">

      <h2 className="text-primary mb-4">Expense List</h2>

      {/* Summary Cards */}
      <div className="row mb-4">

        <div className="col-md-4 mb-3">
  <div className="card shadow border-0 rounded-4">
    <div className="card-body text-center">
      <div style={{ fontSize: "30px" }}>💰</div>
      <h6 className="text-muted mt-2">Total Expenses</h6>
      <h2 className="text-danger">₹{totalExpenses}</h2>
    </div>
  </div>
</div>

        <div className="col-md-4 mb-3">
  <div className="card shadow border-0 rounded-4">
    <div className="card-body text-center">
      <div style={{ fontSize: "30px" }}>💰</div>
      <h6 className="text-muted mt-2">Total Transcations</h6>
      <h2 className="text-danger">{totalTransactions}</h2>
    </div>
  </div>
</div>

        <div className="col-md-4 mb-3">
  <div className="card shadow border-0 rounded-4">
    <div className="card-body text-center">
      <div style={{ fontSize: "30px" }}>💰</div>
      <h6 className="text-muted mt-2">Highest Expenses</h6>
      <h2 className="text-danger">₹{highestExpense}</h2>
    </div>
  </div>
</div>

      </div>

      {/* Search & Filter */}
      <div className="row mb-4">

        <div className="col-md-8">
        <input
  type="text"
  className="form-control"
  placeholder="🔍 Search Expense..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
        </div>

        <div className="col-md-4">
          <select
    className="form-select"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
>
            <option>All Categories</option>
            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>Medical</option>
            <option>Education</option>
          </select>
        </div>

      </div>

      {/* Expense Cards */}
     <div className="mt-4">

  {/* Expense Cards */}

  {expenses.map((expense) => (
    <ExpenseCard
  key={expense.expenseId}
  expense={expense}
  onDelete={handleDelete}
/>
  ))}
</div>

    
     

    </div>
  );
}

export default ExpenseList;