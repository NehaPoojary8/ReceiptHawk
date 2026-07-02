import { useState } from "react";

function UploadReceipt() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);

      if (file.type.startsWith("image/")) {
        const imageUrl = URL.createObjectURL(file);
        setPreviewUrl(imageUrl);
      } else {
        setPreviewUrl(null);
      }
    }
  };

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
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          padding: "30px"
        }}
      >
        <h2>📤 Drag & Drop Receipt Here</h2>
        <p style={{ color: "gray" }}>or</p>

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
            padding: "12px 24px",
            borderRadius: "10px",
            backgroundColor: "#6366f1",
            color: "white",
            cursor: "pointer",
            fontSize: "16px",
            marginTop: "10px"
          }}
        >
          Choose File
        </label>

        {selectedFile && (
          <p
            style={{
              marginTop: "20px",
              color: "green",
              fontWeight: "bold"
            }}
          >
            Selected File: {selectedFile.name}
          </p>
        )}

        {previewUrl && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h3>Receipt Preview</h3>
            <img
              src={previewUrl}
              alt="Receipt Preview"
              style={{
                width: "300px",
                maxHeight: "400px",
                objectFit: "contain",
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
              }}
            />
          </div>
        )}

        {selectedFile && (
          <button
            style={{
              marginTop: "25px",
              padding: "14px 28px",
              border: "none",
              borderRadius: "12px",
              backgroundColor: "#16a34a",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Upload Receipt
          </button>
        )}
      </div>
    </div>
  );
}

export default UploadReceipt;