import "./Dashboard.css";
import SummaryCard from "../components/SummaryCard";
import ExpenseChart from "../components/ExpenseChart";
import BudgetAlert from "../components/BudgetAlert";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="dashboard-container">

      {/* Header */}
      <div className="dashboard-header">
        <h1 style={{ color: "blue" }}>Welcome to Your Dashboard</h1>
        <p>Here's your financial summary.</p>
      </div>
<div className="summary-grid">
  <SummaryCard title="Total Expense" amount="₹15,000" />
  <SummaryCard title="Total Budget" amount="₹20,000" />
  <SummaryCard title="Remaining Budget" amount="₹5,000" />
</div>
<div className="dashboard-grid">

  <div className="dashboard-card">
    <h2>Expense Distribution</h2>

    <div className="chart-wrapper">
      <ExpenseChart />
    </div>
  </div>

  <div className="dashboard-card">
    <h2>Budget Status</h2>

    <div className="chart-wrapper">
      <BudgetAlert />
    </div>
  </div>

</div>
      

      

    </div>
  );
}

export default Dashboard;