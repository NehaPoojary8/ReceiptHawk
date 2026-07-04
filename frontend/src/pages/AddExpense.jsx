import ExpenseForm from "../components/ExpenseForm";

function AddExpense() {
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">

        <h2 className="text-center text-primary mb-4">
          💰 Add New Expense
          
        </h2>

        <ExpenseForm />

      </div>
    </div>
  );
}

export default AddExpense;