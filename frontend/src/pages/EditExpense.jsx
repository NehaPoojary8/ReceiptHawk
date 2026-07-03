import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExpenseForm from "../components/ExpenseForm";
import { getExpenseById } from "../services/expenseService";

function EditExpense() {
  const { id } = useParams();

  const [expense, setExpense] = useState(null);

  useEffect(() => {
    loadExpense();
  }, []);

  const loadExpense = async () => {
    try {
      const response = await getExpenseById(id);
      setExpense(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load expense");
    }
  };

  if (!expense) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">

        <h2 className="text-warning mb-4">
          ✏ Edit Expense
        </h2>

        <ExpenseForm expenseData={expense} isEdit={true} />

      </div>
    </div>
  );
}

export default EditExpense;