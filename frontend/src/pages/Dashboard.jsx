import SummaryCard from "../components/SummaryCard";
import ExpenseChart from "../components/ExpenseChart";
import BudgetAlert from "../components/BudgetAlert";

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
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
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
        <SummaryCard title="Total Expense" amount="₹15000" />
        <SummaryCard title="Total Budget" amount="₹20000" />
        <SummaryCard title="Remaining Budget" amount="₹5000" />
      </div>

      {/* Expense Chart */}
      <div
        style={{
          width: "90%",
          margin: "auto",
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
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
          <ExpenseChart />
        </div>
      </div>

      {/* Budget Alert */}
      <div
        style={{
          width: "90%",
          margin: "auto",
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 12px 32px rgba(0,0,0,0.08)"
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