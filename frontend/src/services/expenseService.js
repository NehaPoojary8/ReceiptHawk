import axios from "axios";

const API_URL = "http://localhost:8083/expenses";

// Get all expenses
export const getAllExpenses = () => {
  return axios.get(API_URL);
};

// Get one expense by ID
export const getExpenseById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// Add expense
export const addExpense = (expense) => {
  return axios.post(API_URL, expense);
};

// Update expense
export const updateExpense = (id, expense) => {
  return axios.put(`${API_URL}/${id}`, expense);
};

// Delete expense
export const deleteExpense = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
// Export PDF
export const exportPdf = () => {
  return axios.get(`${API_URL}/export/pdf`, {
    responseType: "blob",
  });
};

// Export Excel
export const exportExcel = () => {
  return axios.get(`${API_URL}/export/excel`, {
    responseType: "blob",
  });
};