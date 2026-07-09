import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExpenseCard from "../components/ExpenseCard";
import {
  getAllExpenses,
  deleteExpense,
  exportPdf,
  exportExcel,
  filterByDate,
} from "../services/expenseService";

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [selectedDate, setSelectedDate] = useState("");

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
  const handleExportPdf = async () => {
  try {
    const response = await exportPdf();

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");

    link.href = url;
    link.setAttribute("download", "ReceiptHawk_Expenses.pdf");

    document.body.appendChild(link);
    link.click();
    link.remove();

  } catch (error) {
    console.error(error);
    alert("Failed to export PDF!");
  }
};

const handleExportExcel = async () => {
  try {
    const response = await exportExcel();

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");

    link.href = url;
    link.setAttribute("download", "ReceiptHawk_Expenses.xlsx");

    document.body.appendChild(link);
    link.click();
    link.remove();

  } catch (error) {
    console.error(error);
    alert("Failed to export Excel!");
  }
};
const handleDateFilter = async (date) => {
  setSelectedDate(date);

  if (date === "") {
    loadExpenses();
    return;
  }

  try {
    const response = await filterByDate(date);
    setExpenses(response.data);
  } catch (error) {
    console.error(error);
    alert("Failed to filter by date!");
  }
};

  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const totalTransactions = expenses.length;

  const highestExpense =
    expenses.length > 0
      ? Math.max(...expenses.map((expense) => expense.amount))
      : 0;

  console.log("Expenses State:", expenses);

  return (
  <div className="container-fluid px-4 py-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary">Expense List</h2>

        <div className="d-flex gap-2">



  <button
    className="btn btn-outline-danger"
    onClick={handleExportPdf}
  >
    <i className="bi bi-file-earmark-pdf"></i> PDF
  </button>

  <button
    className="btn btn-outline-success"
    onClick={handleExportExcel}
  >
    <i className="bi bi-file-earmark-excel"></i> Excel
  </button>

  <button
    className="btn btn-primary"
    onClick={() => navigate("/expenses/add")}
  >
    ➕ Add Expense
  </button>

</div>
</div>
      

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
              <div style={{ fontSize: "30px" }}>💳</div>
              <h6 className="text-muted mt-2">Total Transactions</h6>
              <h2 className="text-danger">{totalTransactions}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow border-0 rounded-4">
            <div className="card-body text-center">
              <div style={{ fontSize: "30px" }}>📈</div>
              <h6 className="text-muted mt-2">Highest Expense</h6>
              <h2 className="text-danger">₹{highestExpense}</h2>
            </div>
          </div>
        </div>

      </div>

      {/* Search & Filter */}
      
         {/* Search, Date Filter & Category Filter */}
<div className="row mb-4">

  {/* Search */}
  <div className="col-md-5">
    <input
      type="text"
      className="form-control"
      placeholder="🔍 Search Expense..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>

  {/* Date Filter */}
  <div className="col-md-3">
    <input
      type="date"
      className="form-control"
      value={selectedDate}
      onChange={(e) => handleDateFilter(e.target.value)}
    />
  </div>

  {/* Category Filter */}
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
        {expenses
          .filter(
            (expense) =>
              expense.title.toLowerCase().includes(search.toLowerCase()) ||
              expense.category.toLowerCase().includes(search.toLowerCase()) ||
              expense.description.toLowerCase().includes(search.toLowerCase())
          )
          .filter((expense) =>
            category === "All Categories"
              ? true
              : expense.category === category
          )
          .map((expense) => (
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