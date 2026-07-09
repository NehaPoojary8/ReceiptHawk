import "./SummaryCard.css";

function SummaryCard({ title, amount }) {
  return (
    <div className="summary-card">

      <div className="summary-icon">
        💼
      </div>

      <div className="summary-content">
        <p>{title}</p>
        <h2>{amount}</h2>
      </div>

    </div>
  );
}

export default SummaryCard;