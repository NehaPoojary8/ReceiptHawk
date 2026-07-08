import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../services/userService";
import "./Profile.css";
import { changePassword } from "../services/userService";
import ChangePassword from "../components/ChangePassword";
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
  const handleImageChange = (e) => {

  const file = e.target.files[0];

  if (!file) return;

  // ✅ Only allow image files
  if (!file.type.startsWith("image/")) {
    alert("Please select a valid image.");
    return;
  }

  // ✅ Maximum size 2MB
  if (file.size > 2 * 1024 * 1024) {
    alert("Please select an image smaller than 2MB.");
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {

    const updatedUser = {
      ...user,
      profileImage: reader.result,
    };

    setUser(updatedUser);

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

  };

  reader.readAsDataURL(file);

};

  return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="profile-header">
      <div className="profile-header">

  <div className="profile-avatar">

    {user?.profileImage ? (
      <img
        src={user.profileImage}
        alt="Profile"
        className="avatar-image"
      />
    ) : (
      <span className="avatar-icon">👤</span>
    )}

    <label className="edit-photo">

      ✏️

      <input
        type="file"
        hidden
        accept="image/*"
        onChange={handleImageChange}
      />

    </label>

  </div>

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
          <div className="info-box">

  <span>Profile Picture</span>

  <input
    type="file"
    accept="image/*"
    className="form-control mt-2"
    onChange={handleImageChange}
  />

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
            <ChangePassword user={user} />
        </div>

      </div>
    </div>
  );
}

export default Profile;