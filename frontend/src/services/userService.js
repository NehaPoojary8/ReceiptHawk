import axios from "axios";

const API_URL = "http://localhost:8083/api/users";

export const updateUser = (id, user) => {
  return axios.put(`${API_URL}/${id}`, user);
};
export const changePassword = (data) => {
  return axios.put(`${API_URL}/change-password`, data);
};