import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExpenseList from "./pages/ExpenseList";
import AddExpense from "./pages/AddExpense";
import EditExpense from "./pages/EditExpense";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExpenseList />} />
        <Route path="/add" element={<AddExpense />} />

        {/* Edit Expense */}
        <Route path="/edit/:id" element={<EditExpense />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;