function RecentTransactions({
  transactions = []
}) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "20px",
        padding: "30px",
        width: "100%",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          color: "#1e293b"
        }}
      >
        🕒 Recent Transactions
      </h2>

      {transactions.map((item) => (
        <div
          key={item.expenseId}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 10px",
            borderBottom: "1px solid #e2e8f0"
          }}
        >
          <div>
            <h3
              style={{
                margin: 0,
                color: "#1e293b"
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                margin: "4px 0 0",
                color: "#64748b"
              }}
            >
              {item.category}
            </p>
          </div>

          <h3
            style={{
              color: "#16a34a",
              margin: 0
            }}
          >
            ₹{item.amount}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default RecentTransactions;