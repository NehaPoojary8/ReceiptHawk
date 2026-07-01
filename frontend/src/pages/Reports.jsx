function Reports() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Reports</h1>

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