function UploadReceipt() {
  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f8fafc",
        minHeight: "100vh"
      }}
    >
      <h1 style={{ marginBottom: "8px" }}>Upload Receipt</h1>
      <p style={{ color: "gray", marginBottom: "30px" }}>
        Upload receipt images or PDFs for expense tracking
      </p>

      <div
        style={{
          border: "2px dashed #94a3b8",
          borderRadius: "20px",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
        }}
      >
        <h2>📤 Drag & Drop Receipt Here</h2>
        <p style={{ color: "gray" }}>or</p>

        <button
          style={{
            padding: "12px 24px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#6366f1",
            color: "white",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Choose File
        </button>
      </div>
    </div>
  );
}

export default UploadReceipt;