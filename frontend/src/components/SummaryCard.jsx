import { useState } from "react";

function SummaryCard(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
        color: "white",
        padding: "28px",
        margin: "15px",
        width: "250px",
        borderRadius: "20px",
        boxShadow: isHovered
          ? "0 18px 40px rgba(99,102,241,0.5)"
          : "0 12px 30px rgba(99,102,241,0.35)",
        transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0)",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer"
      }}
    >
      {/* Glow circle */}
      <div
        style={{
          position: "absolute",
          top: "-20px",
          right: "-20px",
          width: "80px",
          height: "80px",
          background: "rgba(255,255,255,0.15)",
          borderRadius: "50%"
        }}
      ></div>

      <p
        style={{
          fontSize: "15px",
          opacity: 0.9,
          marginBottom: "12px",
          fontWeight: "500"
        }}
      >
        {props.title}
      </p>

      <h1
        style={{
          fontSize: "32px",
          margin: 0,
          fontWeight: "700"
        }}
      >
        {props.amount}
      </h1>
    </div>
  );
}

export default SummaryCard;