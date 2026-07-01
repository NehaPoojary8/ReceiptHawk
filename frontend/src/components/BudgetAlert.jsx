function BudgetAlert() {
  const budget = 20000;
  const expense = 18000;

  let message = "✅ Budget Safe";
  let bgColor = "#d4edda";

  if (expense > budget) {
    message = "🚨 Budget Exceeded!";
    bgColor = "#f8d7da";
  } else if (expense >= budget * 0.8) {
    message = "⚠ Warning: Budget Almost Full!";
    bgColor = "#fff3cd";
  }

  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: "15px",
        marginTop: "20px",
        borderRadius: "10px",
        width: "400px",
        fontWeight: "bold"
      }}
    >
      {message}
    </div>
  );
}

export default BudgetAlert;