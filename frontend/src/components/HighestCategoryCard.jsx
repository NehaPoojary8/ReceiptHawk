function HighestCategoryCard() {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "20px",
        padding: "35px",
        width: "400px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        textAlign: "center",
        transition: "0.3s"
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          color: "#1e293b"
        }}
      >
        🏆 Highest Spending Category
      </h2>

      <div
        style={{
          fontSize: "65px",
          marginBottom: "15px"
        }}
      >
        🍔
      </div>

      <h1
        style={{
          color: "#6366f1",
          marginBottom: "10px"
        }}
      >
        Food
      </h1>

      <h2
        style={{
          color: "#16a34a",
          marginBottom: "15px"
        }}
      >
        ₹8,500
      </h2>

      <p
        style={{
          color: "#64748b",
          fontSize: "15px"
        }}
      >
        This category has the highest spending this month.
      </p>
    </div>
  );
}

export default HighestCategoryCard;