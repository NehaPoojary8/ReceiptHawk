import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import MainLayout from "./components/MainLayout";
import UploadReceipt from "./pages/UploadReceipt";
import Settings from "./pages/Settings";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <MainLayout setPage={setPage}>
      {page === "dashboard" ? (
  <Dashboard />
) : page === "reports" ? (
  <Reports />
) : page === "upload" ? (
  <UploadReceipt />
) : (
  <Settings />
)}
    </MainLayout>
  );
}

export default App;