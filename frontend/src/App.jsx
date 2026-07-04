import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

import ExpenseList from "./pages/ExpenseList";
import AddExpense from "./pages/AddExpense";
import EditExpense from "./pages/EditExpense";

import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import UploadReceipt from "./pages/UploadReceipt";
import Settings from "./pages/Settings";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected pages */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Expense Module */}
        <Route path="/expenses" element={<ExpenseList />} />
        <Route path="/expenses/add" element={<AddExpense />} />
        <Route path="/expenses/edit/:id" element={<EditExpense />} />

        {/* Dashboard Module */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Reports />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <MainLayout>
                <UploadReceipt />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Settings />
              </MainLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;