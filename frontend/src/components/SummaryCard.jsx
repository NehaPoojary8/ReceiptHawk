import { useState } from "react";

function SummaryCard(props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "280px",
        padding: "28px",
        borderRadius: "20px",
        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
        color: "white",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        boxShadow: hovered
          ? "0 20px 40px rgba(99,102,241,0.4)"
          : "0 12px 30px rgba(99,102,241,0.25)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.25)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px"
        }}
      >
        💼
      </div>

      <div>
        <p style={{ margin: 0, opacity: 0.9 }}>{props.title}</p>
        <h1 style={{ marginTop: "10px", marginBottom: 0 }}>
          {props.amount}
        </h1>
      </div>

      <div
        style={{
          position: "absolute",
          right: "-10px",
          top: "-10px",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.12)"
        }}
      />
    </div>
  );
}

export default SummaryCard;