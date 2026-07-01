function MainLayout({ children, setPage }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "260px",
          background: "linear-gradient(180deg, #1e293b, #0f172a)",
          color: "white",
          padding: "30px 20px",
          boxShadow: "2px 0 15px rgba(0,0,0,0.2)"
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            marginBottom: "50px",
            color: "#38bdf8"
          }}
        >
          ReceiptHawk
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            onClick={() => setPage("dashboard")}
            style={{
              padding: "14px",
              borderRadius: "12px",
              cursor: "pointer",
              backgroundColor: "#334155"
            }}
          >
            🏠 Dashboard
          </div>

          <div
            onClick={() => setPage("reports")}
            style={{
              padding: "14px",
              borderRadius: "12px",
              cursor: "pointer",
              backgroundColor: "#334155"
            }}
          >
            📊 Reports
          </div>

          <div
            style={{
              padding: "14px",
              borderRadius: "12px",
              backgroundColor: "#1e293b"
            }}
          >
            📤 Upload Receipt
          </div>

          <div
            style={{
              padding: "14px",
              borderRadius: "12px",
              backgroundColor: "#1e293b"
            }}
          >
            ⚙ Settings
          </div>
        </div>
      </div>

      {/* Main content */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#f8fafc"
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default MainLayout;