import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { parseReceipt } from "../utils/receiptParser";

function UploadReceipt() {
  const navigate = useNavigate();

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

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", selectedFile);

      const response = await axios.post(
        "http://localhost:8083/receipt/scan",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const ocrText = response.data.text;

      const parsedExpense = parseReceipt(ocrText);

      navigate("/expenses/add", {
        state: {
          scannedExpense: parsedExpense,
        },
      });
    } catch (error) {
      console.error("OCR Error:", error);
      alert("Failed to process receipt.");
    }
  };

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      {/* Heading */}
      <div style={{ marginBottom: "40px" }}>
        <h1
          style={{
            marginBottom: "14px",
            fontSize: "58px",
            fontWeight: "700",
            lineHeight: "1.1",
          }}
        >
          Upload Receipt
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: "1.5",
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
          padding: "40px",
        }}
      >
        <h2 style={{ fontSize: "30px", marginBottom: "12px" }}>
          📤 Drag & Drop Receipt Here
        </h2>

        <p style={{ color: "#64748b", fontSize: "18px" }}>
          or
        </p>

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
            fontWeight: "600",
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
              fontSize: "18px",
            }}
          >
            Selected File: {selectedFile.name}
          </p>
        )}

        {previewUrl && (
          <div
            style={{
              marginTop: "25px",
              textAlign: "center",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>
              Receipt Preview
            </h3>

            <img
              src={previewUrl}
              alt="Receipt Preview"
              style={{
                width: "420px",
                maxHeight: "500px",
                objectFit: "contain",
                borderRadius: "16px",
                boxShadow:
                  "0 8px 24px rgba(0,0,0,0.2)",
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
              fontWeight: "bold",
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