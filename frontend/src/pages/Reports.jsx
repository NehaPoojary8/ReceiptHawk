import ReportChart from "../components/ReportChart";

function Reports() {
  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#fafafa",
        minHeight: "100vh"
      }}
    >
      {/* Heading */}
      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ marginBottom: "5px" }}>Financial Reports</h1>
        <p style={{ color: "gray" }}>
          Analyze monthly spending trends and insights
        </p>
      </div>

      {/* Summary Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          marginBottom: "30px"
        }}
      >
        <div
          style={{
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            width: "180px",
            backgroundColor: "white"
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
            width: "180px",
            backgroundColor: "white"
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
            width: "180px",
            backgroundColor: "white"
          }}
        >
          <h3>Avg Expense</h3>
          <p>₹5000</p>
        </div>
      </div>

      {/* Chart */}
      <div
        style={{
          marginBottom: "30px",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          width: "fit-content"
        }}
      >
        <ReportChart />
      </div>

      {/* Table */}
      <table
        style={{
          borderCollapse: "collapse",
          width: "60%",
          marginTop: "20px",
          backgroundColor: "white",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
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