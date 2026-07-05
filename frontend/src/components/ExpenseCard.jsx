import { useNavigate } from "react-router-dom";

function ExpenseCard({ expense, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="card shadow-sm mb-3 border-0 rounded-4">
      <div className="card-body d-flex justify-content-between align-items-center">

        <div>
          <h5 className="fw-bold">{expense.title}</h5>

          <span className="badge bg-primary me-2">
            {expense.category}
          </span>

          <small className="text-muted">
            {expense.date}
          </small>
        </div>

        <div className="text-end">

          <h4 className="text-success fw-bold">
            ₹ {expense.amount}
          </h4>

          <button
            className="btn btn-outline-warning btn-sm me-2"
            onClick={() => navigate(`/expenses/edit/${expense.expenseId}`)}
          >
            ✏ Edit
          </button>

          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => {
              if (
                window.confirm(
                  "Are you sure you want to delete this expense?"
                )
              ) {
                onDelete(expense.expenseId);
              }
            }}
          >
            🗑 Delete
          </button>

        </div>

      </div>
    </div>
  );
}

export default ExpenseCard;