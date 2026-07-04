function BudgetAlert() {
  return (
    <div
      style={{
        width: "90%",
        backgroundColor: "#fffbeb",
        border: "1px solid #facc15",
        padding: "30px",
        borderRadius: "18px",
        display: "flex",
        alignItems: "center",
        gap: "25px"
      }}
    >
      <div
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          backgroundColor: "#fef08a",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px"
        }}
      >
        ⚠
      </div>

      <div>
        <h2 style={{ margin: 0 }}>Warning: Budget Almost Full!</h2>
        <p style={{ color: "#64748b", marginTop: "10px" }}>
          You have used 75% of your total budget
        </p>
      </div>
    </div>
  );
}

export default BudgetAlert;