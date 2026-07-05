import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="profile-header">

          <div className="profile-avatar">
            👤
          </div>

        </div>

        <div className="profile-content">

          <h2>{user?.fullName || "User"}</h2>

          <p className="role">
            ReceiptHawk User
          </p>

          <div className="info-box">
            <span>Email</span>
            <p>{user?.email || "Not Available"}</p>
          </div>

          <div className="info-box">
            <span>Phone Number</span>
            <p>{user?.phoneNumber || "Not Available"}</p>
          </div>

          <div className="info-box">
            <span>Account Status</span>
            <p className="status">
              Active ✅
            </p>
          </div>

          <div className="profile-buttons">

            <button
              className="dashboard-btn"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </button>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;