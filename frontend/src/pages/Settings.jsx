function Settings() {
  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f8fafc",
        minHeight: "100vh"
      }}
    >
      {/* Heading */}
      <div
        style={{
          marginBottom: "45px"
        }}
      >
        <h1
          style={{
            margin: 0,
            paddingBottom: "18px",
            fontSize: "58px",
            fontWeight: "700",
            lineHeight: "1.1"
          }}
        >
          Settings
        </h1>

        <p
          style={{
            margin: 0,
            color: "#64748b",
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: "1.6"
          }}
        >
          Manage your account preferences
        </p>
      </div>

      {/* Settings Card */}
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "24px",
          boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
          width: "85%",
          maxWidth: "900px"
        }}
      >
        <div style={{ display: "grid", rowGap: "28px" }}>
          <div>
            <p style={{ color: "#64748b", marginBottom: "6px" }}>
              Profile Name
            </p>
            <h3 style={{ margin: 0 }}>Aisiri Shetty</h3>
          </div>

          <div>
            <p style={{ color: "#64748b", marginBottom: "6px" }}>Email</p>
            <h3 style={{ margin: 0 }}>user@gmail.com</h3>
          </div>

          <div>
            <p style={{ color: "#64748b", marginBottom: "6px" }}>
              Account Type
            </p>
            <span
              style={{
                backgroundColor: "#fef3c7",
                color: "#b45309",
                padding: "8px 16px",
                borderRadius: "12px",
                fontWeight: "600"
              }}
            >
              Premium
            </span>
          </div>

          <div>
            <p style={{ color: "#64748b", marginBottom: "6px" }}>Theme</p>
            <span
              style={{
                backgroundColor: "#e0e7ff",
                color: "#4338ca",
                padding: "8px 16px",
                borderRadius: "12px",
                fontWeight: "600"
              }}
            >
              Light Mode
            </span>
          </div>

          <div>
            <p style={{ color: "#64748b", marginBottom: "6px" }}>
              Notifications
            </p>
            <span
              style={{
                backgroundColor: "#dcfce7",
                color: "#15803d",
                padding: "8px 16px",
                borderRadius: "12px",
                fontWeight: "600"
              }}
            >
              Enabled
            </span>
          </div>

          <div>
            <p style={{ color: "#64748b", marginBottom: "6px" }}>
              Storage Usage
            </p>
            <h3 style={{ margin: 0 }}>72%</h3>
          </div>

          <div>
            <p style={{ color: "#64748b", marginBottom: "6px" }}>Security</p>
            <span
              style={{
                backgroundColor: "#dcfce7",
                color: "#15803d",
                padding: "8px 16px",
                borderRadius: "12px",
                fontWeight: "600"
              }}
            >
              Protected
            </span>
          </div>

          <div>
            <p style={{ color: "#64748b", marginBottom: "6px" }}>
              App Version
            </p>
            <h3 style={{ margin: 0 }}>v1.0.0</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;