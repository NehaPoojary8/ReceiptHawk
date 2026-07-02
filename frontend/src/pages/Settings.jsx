function Settings() {
  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f8fafc",
        minHeight: "100vh"
      }}
    >
      <h1 style={{ marginBottom: "8px" }}>Settings</h1>
      <p style={{ color: "gray", marginBottom: "30px" }}>
        Manage your account preferences
      </p>

      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          maxWidth: "600px"
        }}
      >
        <p><strong>Profile Name:</strong> User</p>
        <p><strong>Theme:</strong> Light Mode</p>
        <p><strong>Notifications:</strong> Enabled</p>
      </div>
    </div>
  );
}

export default Settings;