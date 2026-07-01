import ReportChart from "../components/ReportChart";

function Reports() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Reports</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px", marginBottom: "30px" }}>
        <div
          style={{
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            width: "180px"
          }}
        >
          <h3>Total Expense</h3>
          <p>₹15000</p>
        </div>

        <div
          style={{
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            width: "180px"
          }}
        >
          <h3>Highest Month</h3>
          <p>February</p>
        </div>

        <div
          style={{
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            width: "180px"
          }}
        >
          <h3>Avg Expense</h3>
          <p>₹5000</p>
        </div>
      </div>

      {/* NEW: Chart added here */}
      <div style={{ marginBottom: "30px" }}>
        <ReportChart />
      </div>

      <table
        style={{
          borderCollapse: "collapse",
          width: "60%",
          marginTop: "20px"
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ border: "1px solid black", padding: "12px" }}>
              Month
            </th>
            <th style={{ border: "1px solid black", padding: "12px" }}>
              Expense
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={{ border: "1px solid black", padding: "12px" }}>
              January
            </td>
            <td style={{ border: "1px solid black", padding: "12px" }}>
              ₹5000
            </td>
          </tr>

          <tr>
            <td style={{ border: "1px solid black", padding: "12px" }}>
              February
            </td>
            <td style={{ border: "1px solid black", padding: "12px" }}>
              ₹7000
            </td>
          </tr>

          <tr>
            <td style={{ border: "1px solid black", padding: "12px" }}>
              March
            </td>
            <td style={{ border: "1px solid black", padding: "12px" }}>
              ₹3000
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Reports;