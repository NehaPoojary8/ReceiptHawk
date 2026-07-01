import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import MainLayout from "./components/MainLayout";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <MainLayout setPage={setPage}>
      {page === "dashboard" ? <Dashboard /> : <Reports />}
    </MainLayout>
  );
}

export default App;