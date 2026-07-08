import { useState } from "react";
import { changePassword } from "../services/userService";

function ChangePassword({ user }) {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    try {
      await changePassword({
        userId: user.id,
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
        confirmPassword: passwordData.confirmPassword,
      });

      alert("Password updated successfully!");

      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data ||
        error.response?.data?.message ||
        "Failed to update password!"
      );
    }
  };

  return (
    <div className="info-box mt-4">
      <h4 className="mb-3">🔒 Change Password</h4>

      <form onSubmit={handleUpdatePassword}>

        <div className="mb-3">
          <label className="form-label">Current Password</label>
          <input
            type="password"
            className="form-control"
            name="currentPassword"
            value={passwordData.currentPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">New Password</label>
          <input
            type="password"
            className="form-control"
            name="newPassword"
            value={passwordData.newPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={passwordData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
        >
          Update Password
        </button>

      </form>
    </div>
  );
}

export default ChangePassword;