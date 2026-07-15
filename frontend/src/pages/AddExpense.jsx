import ExpenseForm from "../components/ExpenseForm";
import { useLocation } from "react-router-dom";

function AddExpense() {
  const location = useLocation();

const scannedExpense =
  location.state?.scannedExpense;
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">

        <h2 className="text-center text-primary mb-4">
          💰 Add New Expense
          
        </h2>

        <ExpenseForm
  scannedExpense={scannedExpense}
/>
      </div>
    </div>
  );
}

export default AddExpense;