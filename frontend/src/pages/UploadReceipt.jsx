import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { parseReceipt } from "../utils/receiptParser";

function UploadReceipt() {

  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [ocrText, setOcrText] = useState("");

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleFile = (file) => {

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload only JPG, JPEG or PNG images.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5 MB.");
      return;
    }

    setSelectedFile(file);
    setShowResult(false);

    const imageUrl = URL.createObjectURL(file);
    setPreviewUrl(imageUrl);
  };

  const handleFileChange = (event) => {
    handleFile(event.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {

    e.preventDefault();

    setDragActive(false);

    if (e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }

  };

  const handleUpload = async () => {

    if (!selectedFile) {
      alert("Please select a receipt first.");
      return;
    }

    try {

      setLoading(true);

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

      const extractedText = response.data.text;
console.log("===== OCR RAW TEXT =====");
console.log(extractedText);
      setOcrText(extractedText);

      setShowResult(true);

      const parsedExpense = parseReceipt(extractedText);
console.log("===== PARSED EXPENSE =====");
console.log(parsedExpense);
      setTimeout(() => {

        navigate("/expenses/add", {
          state: {
            scannedExpense: parsedExpense,
          },
        });

      }, 2000);

    } catch (error) {

      console.error(error);

      alert("OCR Failed");

    } finally {

      setLoading(false);

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
          📄 Upload Receipt
        </h1>

        <p
          style={{
            color: "#64748b",
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: "1.5",
          }}
        >
          Upload receipts and extract expense data using AI-powered OCR.
        </p>
      </div>

      {/* Upload Box */}

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          border: dragActive
            ? "3px dashed #2563eb"
            : "3px dashed #94a3b8",

          borderRadius: "24px",
          minHeight: "500px",
          width: "85%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: dragActive
            ? "#eff6ff"
            : "white",

          boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
          padding: "40px",
          transition: "0.3s",
        }}
      >
        <h2 style={{ fontSize: "30px" }}>
          📤 Drag & Drop Receipt Here
        </h2>

        <p
          style={{
            color: "#64748b",
            marginTop: "10px",
            marginBottom: "15px",
          }}
        >
          or
        </p>

        <input
          id="fileUpload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        <label
          htmlFor="fileUpload"
          style={{
            padding: "16px 32px",
            backgroundColor: "#4f46e5",
            color: "white",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Choose Image
        </label>

        {selectedFile && (
          <>
            <p
              style={{
                marginTop: "25px",
                color: "green",
                fontWeight: "bold",
              }}
            >
              📁 {selectedFile.name}
            </p>

            <p style={{ color: "#64748b" }}>
              {(selectedFile.size / 1024).toFixed(2)} KB
            </p>
          </>
        )}

        {previewUrl && (
          <div
            style={{
              marginTop: "25px",
              textAlign: "center",
            }}
          >
            <h3>Receipt Preview</h3>

            <img
              src={previewUrl}
              alt="Preview"
              style={{
                width: "420px",
                maxHeight: "500px",
                objectFit: "contain",
                borderRadius: "15px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        )}

        <button
          disabled={!selectedFile || loading}
          onClick={handleUpload}
          style={{
            marginTop: "30px",
            padding: "16px 36px",
            backgroundColor: !selectedFile
              ? "#9ca3af"
              : "#16a34a",

            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: !selectedFile
              ? "not-allowed"
              : "pointer",

            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          {loading
            ? "🔄 Processing..."
            : "Upload Receipt"}
        </button>
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
            marginRight: "auto",
          }}
        >
          <h2
            style={{
              color: "#16a34a",
              marginBottom: "25px",
            }}
          >
            ✅ OCR Text Extracted Successfully
          </h2>

          <div
            style={{
              backgroundColor: "#f8fafc",
              padding: "20px",
              borderRadius: "12px",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              style={{
                whiteSpace: "pre-wrap",
                backgroundColor: "#f8fafc",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid #d1d5db",
                fontFamily: "monospace",
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#1f2937",
              }}
            >
              {ocrText}
            </div>
          </div>

          <hr style={{ margin: "25px 0" }} />

          <p
            style={{
              color: "#64748b",
              textAlign: "center",
            }}
          >
            Review the extracted text before continuing.
          </p>
        </div>
      )}
    </div>
  );
}

export default UploadReceipt;