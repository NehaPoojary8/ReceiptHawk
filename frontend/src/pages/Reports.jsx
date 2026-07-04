import ReportChart from "../components/ReportChart";

function Reports() {
  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#fafafa",
        minHeight: "100vh"
      }}
    >
      {/* Heading */}
      <div style={{ marginBottom: "40px" }}>
        <h1
          style={{
            marginBottom: "14px",
            fontSize: "58px",
            fontWeight: "700",
            lineHeight: "1.1"
          }}
        >
          Financial Reports
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: "1.5"
          }}
        >
          Analyze monthly spending trends and insights
        </p>
      </div>

      {/* Summary Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "35px",
          flexWrap: "wrap"
        }}
      >
        <div
          style={{
            padding: "22px",
            borderRadius: "16px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            width: "200px",
            backgroundColor: "white"
          }}
        >
          <h3>Total Expense</h3>
          <p>₹15000</p>
        </div>

        <div
          style={{
            padding: "22px",
            borderRadius: "16px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            width: "200px",
            backgroundColor: "white"
          }}
        >
          <h3>Highest Month</h3>
          <p>February</p>
        </div>

        <div
          style={{
            padding: "22px",
            borderRadius: "16px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            width: "200px",
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
          padding: "25px",
          backgroundColor: "white",
          borderRadius: "20px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
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
          backgroundColor: "white",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          borderRadius: "16px",
          overflow: "hidden"
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f1f5f9" }}>
            <th style={{ border: "1px solid #cbd5e1", padding: "14px" }}>
              Month
            </th>
            <th style={{ border: "1px solid #cbd5e1", padding: "14px" }}>
              Expense
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td style={{ border: "1px solid #cbd5e1", padding: "14px" }}>
              January
            </td>
            <td style={{ border: "1px solid #cbd5e1", padding: "14px" }}>
              ₹5000
            </td>
          </tr>

          <tr>
            <td style={{ border: "1px solid #cbd5e1", padding: "14px" }}>
              February
            </td>
            <td style={{ border: "1px solid #cbd5e1", padding: "14px" }}>
              ₹7000
            </td>
          </tr>

          <tr>
            <td style={{ border: "1px solid #cbd5e1", padding: "14px" }}>
              March
            </td>
            <td style={{ border: "1px solid #cbd5e1", padding: "14px" }}>
              ₹3000
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Reports;