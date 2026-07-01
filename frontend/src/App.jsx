import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import MainLayout from "./components/MainLayout";
import UploadReceipt from "./pages/UploadReceipt";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <MainLayout setPage={setPage}>
      {page === "dashboard" ? (
  <Dashboard />
) : page === "reports" ? (
  <Reports />
) : (
  <UploadReceipt />
)}
    </MainLayout>
  );
}

export default App;