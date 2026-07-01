function SummaryCard(props) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        color: "white",
        padding: "25px",
        margin: "15px",
        width: "220px",
        borderRadius: "15px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        transition: "0.3s"
      }}
    >
      <h3>{props.title}</h3>
      <h1>{props.amount}</h1>
    </div>
  );
}

export default SummaryCard;