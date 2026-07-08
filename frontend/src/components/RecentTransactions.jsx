function RecentTransactions() {
  const transactions = [
    {
      merchant: "DMart",
      amount: "₹850",
      category: "Grocery",
      icon: "🛒"
    },
    {
      merchant: "Uber",
      amount: "₹240",
      category: "Travel",
      icon: "🚕"
    },
    {
      merchant: "Pizza Hut",
      amount: "₹650",
      category: "Food",
      icon: "🍕"
    },
    {
      merchant: "Amazon",
      amount: "₹1200",
      category: "Shopping",
      icon: "🛍️"
    },
    {
      merchant: "Starbucks",
      amount: "₹450",
      category: "Coffee",
      icon: "☕"
    }
  ];

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

      {transactions.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 10px",
            borderBottom:
              index !== transactions.length - 1
                ? "1px solid #e2e8f0"
                : "none"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px"
            }}
          >
            <span style={{ fontSize: "30px" }}>{item.icon}</span>

            <div>
              <h3
                style={{
                  margin: 0,
                  color: "#1e293b"
                }}
              >
                {item.merchant}
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
          </div>

          <h3
            style={{
              color: "#16a34a",
              margin: 0
            }}
          >
            {item.amount}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default RecentTransactions;