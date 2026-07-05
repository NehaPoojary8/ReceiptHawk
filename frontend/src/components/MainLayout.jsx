import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MainLayout({ children }) {
  const [hoveredItem, setHoveredItem] = useState("");
  const navigate = useNavigate();

  const menuStyle = (item) => ({
    padding: "14px",
    borderRadius: "12px",
    cursor: "pointer",
    backgroundColor: hoveredItem === item ? "#475569" : "#334155",
    transform:
      hoveredItem === item
        ? "translateX(6px) scale(1.02)"
        : "translateX(0)",
    boxShadow:
      hoveredItem === item
        ? "0 6px 16px rgba(0,0,0,0.25)"
        : "none",
    transition: "all 0.3s ease",
  });

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "260px",
          background: "linear-gradient(180deg, #1e293b, #0f172a)",
          color: "white",
          padding: "30px 20px",
          boxShadow: "2px 0 15px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            marginBottom: "50px",
            color: "#38bdf8",
          }}
        >
          ReceiptHawk
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            onClick={() => navigate("/dashboard")}
            onMouseEnter={() => setHoveredItem("dashboard")}
            onMouseLeave={() => setHoveredItem("")}
            style={menuStyle("dashboard")}
          >
            🏠 Dashboard
          </div>
          <div
  onClick={() => navigate("/expenses")}
  onMouseEnter={() => setHoveredItem("expenses")}
  onMouseLeave={() => setHoveredItem("")}
  style={menuStyle("expenses")}
>
  💰 Expenses
</div>

          <div
            onClick={() => navigate("/reports")}
            onMouseEnter={() => setHoveredItem("reports")}
            onMouseLeave={() => setHoveredItem("")}
            style={menuStyle("reports")}
          >
            📊 Reports
          </div>
<div
  onClick={() => navigate("/profile")}
  onMouseEnter={() => setHoveredItem("profile")}
  onMouseLeave={() => setHoveredItem("")}
  style={menuStyle("profile")}
>
  👤 Profile
</div>
          <div
            onClick={() => navigate("/upload")}
            onMouseEnter={() => setHoveredItem("upload")}
            onMouseLeave={() => setHoveredItem("")}
            style={menuStyle("upload")}
          >
            📤 Upload Receipt
          </div>

          <div
            onClick={() => navigate("/settings")}
            onMouseEnter={() => setHoveredItem("settings")}
            onMouseLeave={() => setHoveredItem("")}
            style={menuStyle("settings")}
          >
            ⚙ Settings
          </div>
        </div>
      </div>
<div
  onClick={() => {
    localStorage.removeItem("user");
    navigate("/login");
  }}
  onMouseEnter={() => setHoveredItem("logout")}
  onMouseLeave={() => setHoveredItem("")}
  style={menuStyle("logout")}
>
  🚪 Logout
</div>
      {/* Main Content */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#f8fafc",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default MainLayout;