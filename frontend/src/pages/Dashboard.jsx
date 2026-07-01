import BudgetAlert from "../components/BudgetAlert";
import ExpenseChart from "../components/ExpenseChart";
import SummaryCard from "../components/SummaryCard";

function Dashboard() {
  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f8fafc",
        minHeight: "100vh"
      }}
    >
      {/* Heading */}
      <div style={{ marginBottom: "30px" }}>
        <h1 style={{ marginBottom: "5px" }}>Dashboard Overview</h1>
        <p style={{ color: "gray", fontSize: "16px" }}>
          Monitor expenses, budget, and spending insights
        </p>
      </div>

      {/* Summary Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "35px"
        }}
      >
        <SummaryCard title="Total Expense" amount="₹15000" />
        <SummaryCard title="Total Budget" amount="₹20000" />
        <SummaryCard title="Remaining Budget" amount="₹5000" />
      </div>

      {/* Chart Section */}
      <div
        style={{
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "20px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          marginBottom: "30px",
          width: "fit-content"
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Expense Distribution</h2>
        <ExpenseChart />
      </div>

      {/* Budget Alert Section */}
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "20px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          width: "fit-content"
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>Budget Status</h2>
        <BudgetAlert />
      </div>
    </div>
  );
}

export default Dashboard;