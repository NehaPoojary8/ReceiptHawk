import BudgetAlert from "../components/BudgetAlert";
import ExpenseChart from "../components/ExpenseChart";
import SummaryCard from "../components/SummaryCard";

function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Dashboard</h1>

      <div style={{ display: "flex" }}>
        <SummaryCard title="Total Expense" amount="₹15000" />
        <SummaryCard title="Total Budget" amount="₹20000" />
        <SummaryCard title="Remaining Budget" amount="₹5000" />
      </div>
      <ExpenseChart />
      <BudgetAlert />
    </div>
  );
}

export default Dashboard;