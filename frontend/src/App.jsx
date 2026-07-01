import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button
          onClick={() => setPage("reports")}
          style={{ marginLeft: "10px" }}
        >
          Reports
        </button>
      </div>

      {page === "dashboard" ? <Dashboard /> : <Reports />}
    </div>
  );
}

export default App;