import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../services/userService";
import "./Profile.css";
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
    <div className="profile-container">
  <div className="profile-wrapper">

    <div className="profile-sidebar">

    <div className="profile-cover"></div>

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

    <h2 className="profile-name">
        {user?.fullName}
    </h2>

    <p className="profile-role">
        ReceiptHawk User
    </p>

    <div className="sidebar-buttons">

        <button
            className="sidebar-btn"
            onClick={() => navigate("/dashboard")}
        >
            Dashboard
        </button>

        <button
            className="sidebar-btn"
            onClick={() => setIsEditing(true)}
        >
            Edit Profile
        </button>

        <button
            className="sidebar-btn logout"
            onClick={handleLogout}
        >
            Logout
        </button>

    </div>

</div>

<div className="profile-main">

  <div className="profile-card">

    <div className="card-header-custom">

      <div>
        <h2>Personal Information</h2>
        <p>Manage your personal details</p>
      </div>

      {isEditing ? (
        <button
          className="save-btn"
          onClick={handleSave}
        >
          💾 Save Changes
        </button>
      ) : (
        <button
          className="edit-btn"
          onClick={() => setIsEditing(true)}
        >
          ✏ Edit Profile
        </button>
      )}

    </div>

    <div className="profile-grid">

      {/* Full Name */}

      <div className="input-group-custom">

        <label>Full Name</label>

        {isEditing ? (
          <input
            className="form-control"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
          />
        ) : (
          <div className="display-box">
            {user.fullName}
          </div>
        )}

      </div>

      {/* Email */}

      <div className="input-group-custom">

        <label>Email</label>

        <div className="display-box">
          {user.email}
        </div>

      </div>

      {/* Phone */}

      <div className="input-group-custom">

        <label>Phone Number</label>

        {isEditing ? (
          <input
            className="form-control"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleChange}
          />
        ) : (
          <div className="display-box">
            {user.phoneNumber}
          </div>
        )}

      </div>

      {/* Status */}

      <div className="input-group-custom">

        <label>Status</label>

        <div className="display-box status-active">
          🟢 Active
        </div>

      </div>
      {/* Password */}

<div className="input-group-custom">

  <label>Password</label>

  <div className="display-box">
    ************
  </div>

</div>

<div className="input-group-custom">

  <label>&nbsp;</label>

  <button
    className="edit-btn"
    data-bs-toggle="modal"
    data-bs-target="#passwordModal"
  >
    🔒 Change Password
  </button>

</div>

    </div>

  </div>
     
           </div>
  </div>

  {/* Change Password Modal */}

  <div
    className="modal fade"
    id="passwordModal"
    tabIndex="-1"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">

        <div className="modal-header">
          <h5 className="modal-title">
            🔒 Change Password
          </h5>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
          ></button>

        </div>

        <div className="modal-body">
          <ChangePassword user={user} />
        </div>

      </div>
    </div>
  </div>

</div>

);

}

export default Profile;