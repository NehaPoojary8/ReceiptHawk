import { useEffect, useState } from "react";
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
      value: categoryTotals[category]
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
    .sort(
      (a, b) =>
        new Date(b.date) - new Date(a.date)
    )
    .slice(0, 5);

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f8fafc",
        minHeight: "100vh"
      }}
    >
      {/* Heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px"
        }}
      >
        <h1
          style={{
            fontSize: "58px",
            fontWeight: "700",
            margin: 0
          }}
        >
          Dashboard Overview
        </h1>

        <p
          style={{
            marginTop: "15px",
            color: "#64748b",
            fontSize: "18px",
            fontWeight: "500"
          }}
        >
          Monitor expenses, budget, and spending insights
        </p>
      </div>

      {/* Summary Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginBottom: "40px",
          flexWrap: "wrap"
        }}
      >
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

      {/* Expense Chart */}
      <div
        style={{
          width: "90%",
          margin: "auto",
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "30px",
          boxShadow:
            "0 12px 32px rgba(0,0,0,0.08)",
          marginBottom: "35px"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px"
          }}
        >
          Expense Distribution
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            transform: "scale(1.25)"
          }}
        >
          <ExpenseChart data={chartData} />
        </div>
      </div>

      {/* Analytics Section */}
      <div
        style={{
          width: "90%",
          margin: "35px auto",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "stretch",
          gap: "25px",
          flexWrap: "wrap"
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
          margin: "35px auto"
        }}
      >
        <RecentTransactions
          transactions={recentTransactions}
        />
      </div>

      {/* Budget Alert */}
      <div
        style={{
          width: "90%",
          margin: "auto",
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "30px",
          boxShadow:
            "0 12px 32px rgba(0,0,0,0.08)"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px"
          }}
        >
          Budget Status
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            transform: "scale(1.15)"
          }}
        >
          <BudgetAlert />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;