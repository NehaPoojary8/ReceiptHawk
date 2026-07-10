import { useEffect, useState } from "react";
import "./Dashboard.css";
import SummaryCard from "../components/SummaryCard";
import ExpenseChart from "../components/ExpenseChart";
import BudgetAlert from "../components/BudgetAlert";
import HighestCategoryCard from "../components/HighestCategoryCard";
import MonthComparison from "../components/MonthComparison";
import RecentTransactions from "../components/RecentTransactions";
import { getAllExpenses } from "../services/expenseService";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await getAllExpenses();
      setExpenses(response.data);
    } catch (error) {
      console.log("Error fetching expenses:", error);
    }
  };

  // Dashboard Statistics
  const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const totalBudget = 20000;
  const remainingBudget = totalBudget - totalExpense;

  const averageExpense =
    expenses.length > 0
      ? Math.round(totalExpense / expenses.length)
      : 0;

  // Category Totals
  const categoryTotals = {};

  expenses.forEach((expense) => {
    if (!categoryTotals[expense.category]) {
      categoryTotals[expense.category] = 0;
    }

    categoryTotals[expense.category] += expense.amount;
  });

  // Pie Chart Data
  const chartData = Object.keys(categoryTotals).map(
    (category) => ({
      name: category,
      value: categoryTotals[category],
    })
  );

  // Highest Category
  const highestCategory =
    Object.keys(categoryTotals).length > 0
      ? Object.entries(categoryTotals).reduce((a, b) =>
          a[1] > b[1] ? a : b
        )
      : ["None", 0];

  // Recent Transactions
  const recentTransactions = [...expenses]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div className="dashboard-container">

      {/* Header */}
      <div className="dashboard-header">
        <h1 style={{ color: "blue" }}>
          Welcome to Your Dashboard
        </h1>
        <p>Here's your financial summary.</p>
      </div>

      {/* Summary Cards */}
      <div className="summary-grid">
        <SummaryCard
          title="Total Expense"
          amount={`₹${totalExpense}`}
        />

        <SummaryCard
          title="Total Budget"
          amount={`₹${totalBudget}`}
        />

        <SummaryCard
          title="Remaining Budget"
          amount={`₹${remainingBudget}`}
        />

        <SummaryCard
          title="Average Expense"
          amount={`₹${averageExpense}`}
        />
      </div>

      {/* Charts */}
      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h2>Expense Distribution</h2>

          <div className="chart-wrapper">
            <ExpenseChart data={chartData} />
          </div>
        </div>

        <div className="dashboard-card">
          <h2>Budget Status</h2>

          <div className="chart-wrapper">
            <BudgetAlert />
          </div>
        </div>

      </div>

      {/* Analytics */}
      <div
        style={{
          width: "90%",
          margin: "35px auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "25px",
        }}
      >
        <HighestCategoryCard
          category={highestCategory[0]}
          amount={highestCategory[1]}
        />

        <MonthComparison />
      </div>

      {/* Recent Transactions */}
      <div
        style={{
          width: "90%",
          margin: "35px auto",
        }}
      >
        <RecentTransactions
          transactions={recentTransactions}
        />
      </div>

    </div>
  );
}

export default Dashboard;