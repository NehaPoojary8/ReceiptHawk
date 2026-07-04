import { useState } from "react";

function UploadReceipt() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
      setShowResult(false);

      if (file.type.startsWith("image/")) {
        const imageUrl = URL.createObjectURL(file);
        setPreviewUrl(imageUrl);
      } else {
        setPreviewUrl(null);
      }
    }
  };

  const handleUpload = () => {
    setShowResult(true);
  };

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f8fafc",
        minHeight: "100vh"
      }}
    >
      {/* Heading */}
      <div style={{ marginBottom: "40px" }}>
        <h1
          style={{
            marginBottom: "14px",
            fontSize: "58px",
            fontWeight: "700",
            lineHeight: "1.1"
          }}
        >
          Upload Receipt
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: "1.5"
          }}
        >
          Upload receipts and extract expense data using AI-powered OCR
        </p>
      </div>

      {/* Upload Box */}
      <div
        style={{
          border: "3px dashed #94a3b8",
          borderRadius: "24px",
          minHeight: "500px",
          width: "85%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
          padding: "40px"
        }}
      >
        <h2 style={{ fontSize: "30px", marginBottom: "12px" }}>
          📤 Drag & Drop Receipt Here
        </h2>

        <p style={{ color: "#64748b", fontSize: "18px" }}>or</p>

        <input
          id="fileUpload"
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        <label
          htmlFor="fileUpload"
          style={{
            padding: "16px 32px",
            borderRadius: "14px",
            backgroundColor: "#6366f1",
            color: "white",
            cursor: "pointer",
            fontSize: "18px",
            marginTop: "15px",
            fontWeight: "600"
          }}
        >
          Choose File
        </label>

        {selectedFile && (
          <p
            style={{
              marginTop: "25px",
              color: "green",
              fontWeight: "bold",
              fontSize: "18px"
            }}
          >
            Selected File: {selectedFile.name}
          </p>
        )}

        {previewUrl && (
          <div style={{ marginTop: "25px", textAlign: "center" }}>
            <h3 style={{ marginBottom: "15px" }}>Receipt Preview</h3>
            <img
              src={previewUrl}
              alt="Receipt Preview"
              style={{
                width: "420px",
                maxHeight: "500px",
                objectFit: "contain",
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)"
              }}
            />
          </div>
        )}

        {selectedFile && (
          <button
            onClick={handleUpload}
            style={{
              marginTop: "30px",
              padding: "16px 34px",
              border: "none",
              borderRadius: "14px",
              backgroundColor: "#16a34a",
              color: "white",
              fontSize: "18px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Upload Receipt
          </button>
        )}
      </div>

      {/* OCR Result */}
      {showResult && (
        <div
          style={{
            marginTop: "40px",
            padding: "35px",
            backgroundColor: "white",
            borderRadius: "24px",
            boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
            width: "85%",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <h2 style={{ color: "green", marginBottom: "25px" }}>
            ✅ Receipt Processed Successfully
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              fontSize: "18px"
            }}
          >
            <p><strong>Merchant:</strong> DMart</p>
            <p><strong>Date:</strong> 02-07-2026</p>
            <p><strong>Amount:</strong> ₹850</p>
            <p><strong>Category:</strong> Grocery</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadReceipt;