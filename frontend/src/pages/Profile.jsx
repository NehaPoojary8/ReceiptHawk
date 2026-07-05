import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../services/userService";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      const response = await updateUser(user.id, user);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );

      setUser(response.data);

      alert("Profile Updated Successfully!");

      setIsEditing(false);

    } catch (error) {
      console.error(error);
      alert("Failed to update profile!");
    }
  };

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

          <h2>{user?.fullName}</h2>

          <p className="role">
            ReceiptHawk User
          </p>

          {/* Full Name */}

          <div className="info-box">

            <span>Full Name</span>

            {isEditing ? (
              <input
                className="form-control mt-2"
                name="fullName"
                value={user.fullName}
                onChange={handleChange}
              />
            ) : (
              <p>{user.fullName}</p>
            )}

          </div>

          {/* Email */}

          <div className="info-box">

            <span>Email</span>

            <p>{user.email}</p>

          </div>

          {/* Phone */}

          <div className="info-box">

            <span>Phone Number</span>

            {isEditing ? (
              <input
                className="form-control mt-2"
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={handleChange}
              />
            ) : (
              <p>{user.phoneNumber}</p>
            )}

          </div>

          <div className="info-box">

            <span>Account Status</span>

            <p className="status">
              Active ✅
            </p>

          </div>

          <div className="profile-buttons">

            {isEditing ? (
              <>
                <button
                  className="dashboard-btn"
                  onClick={handleSave}
                >
                  Save
                </button>

                <button
                  className="logout-btn"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  className="dashboard-btn"
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </button>

                <button
                  className="dashboard-btn"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>

                <button
                  className="logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;