import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MainLayout.css";

function MainLayout({ children }) {
  const [hoveredItem, setHoveredItem] = useState("");
  const navigate = useNavigate();

  const menuClass = (item) =>
    hoveredItem === item ? "menu-item active" : "menu-item";

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="layout">

      {/* Sidebar */}
      <div className="sidebar">

        <div>

          <div className="logo">
            <h1>ReceiptHawk</h1>
            <p>Track • Save • Analyze</p>
          </div>

          <div className="menu">

            <div
              className={menuClass("dashboard")}
              onMouseEnter={() => setHoveredItem("dashboard")}
              onMouseLeave={() => setHoveredItem("")}
              onClick={() => navigate("/dashboard")}
            >
              🏠 Dashboard
            </div>

            <div
              className={menuClass("expenses")}
              onMouseEnter={() => setHoveredItem("expenses")}
              onMouseLeave={() => setHoveredItem("")}
              onClick={() => navigate("/expenses")}
            >
              💰 Expenses
            </div>

            <div
              className={menuClass("reports")}
              onMouseEnter={() => setHoveredItem("reports")}
              onMouseLeave={() => setHoveredItem("")}
              onClick={() => navigate("/reports")}
            >
              📊 Reports
            </div>

            <div
              className={menuClass("profile")}
              onMouseEnter={() => setHoveredItem("profile")}
              onMouseLeave={() => setHoveredItem("")}
              onClick={() => navigate("/profile")}
            >
              👤 Profile
            </div>

            <div
              className={menuClass("upload")}
              onMouseEnter={() => setHoveredItem("upload")}
              onMouseLeave={() => setHoveredItem("")}
              onClick={() => navigate("/upload")}
            >
              📤 Upload Receipt
            </div>

            <div
              className={menuClass("settings")}
              onMouseEnter={() => setHoveredItem("settings")}
              onMouseLeave={() => setHoveredItem("")}
              onClick={() => navigate("/settings")}
            >
              ⚙ Settings
            </div>

          </div>

        </div>

        <div className="sidebar-footer">

  <div className="user-info">

    <div className="user-avatar">
      👤
    </div>

    <div>

      <h4>
        {JSON.parse(localStorage.getItem("user"))?.fullName || "User"}
      </h4>

      <p>ReceiptHawk User</p>

    </div>

  </div>

  <button
    className="logout-btn"
    onClick={logout}
  >
    🚪 Logout
  </button>

</div>

      </div>

      {/* Main Content */}
      <div className="main-content">
        {children}
      </div>

    </div>
  );
}

export default MainLayout;