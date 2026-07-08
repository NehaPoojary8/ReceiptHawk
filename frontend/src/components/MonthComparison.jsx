function MonthComparison() {
  const thisMonth = 18000;
  const lastMonth = 16000;

  const difference = thisMonth - lastMonth;
  const percentage = ((difference / lastMonth) * 100).toFixed(1);

  const increase = difference >= 0;

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "20px",
        padding: "35px",
        width: "400px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        textAlign: "center"
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          color: "#1e293b"
        }}
      >
        📅 Monthly Comparison
      </h2>

      <h1
        style={{
          color: "#6366f1",
          marginBottom: "10px"
        }}
      >
        ₹{thisMonth}
      </h1>

      <p
        style={{
          color: "#64748b",
          fontSize: "18px",
          marginBottom: "20px"
        }}
      >
        This Month
      </p>

      <h2
        style={{
          color: increase ? "#16a34a" : "#dc2626",
          marginBottom: "10px"
        }}
      >
        {increase ? "▲" : "▼"} {Math.abs(percentage)}%
      </h2>

      <p
        style={{
          color: "#64748b",
          fontSize: "15px"
        }}
      >
        Compared to last month
      </p>
    </div>
  );
}

export default MonthComparison;