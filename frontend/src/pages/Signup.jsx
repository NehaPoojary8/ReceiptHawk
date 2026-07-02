import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
} from "react-icons/fa";

import "../styles/Login.css";

export default function Signup() {
  const [user, setUser] = useState({
  fullName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
});
  const handleChange = (e) => {
  setUser({
    ...user,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (user.password !== user.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const response = await axios.post(
      "http://localhost:8083/api/auth/register",
      {
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        password: user.password,
      }
    );

    alert("Registration Successful!");

    console.log(response.data);

  } catch (error) {

    alert("Registration Failed!");

    console.error(error);

  }
};
  return (
    <div className="page">

      <div className="card">

        {/* LEFT PANEL */}

        <div className="left">

          <div className="blue-bg"></div>

          <div className="curve"></div>

          <div className="menu">

            <Link to="/" className="tab">
              LOGIN
            </Link>

            <div className="active-tab">
              SIGN UP
            </div>

          </div>

        </div>

        {/* RIGHT PANEL */}

        <div className="right">

          <div className="profile">

            <FaUserCircle />

          </div>

          <h1>ReceiptHawk</h1>

          <p className="subtitle">
            Create your account
          </p>

          <form onSubmit={handleSubmit}>

            <div className="field">

              <FaUser className="icon"/>
              <input
    type="text"
    name="fullName"
    placeholder="Full Name"
    value={user.fullName}
    onChange={handleChange}
/>

            </div>

            <div className="field">

              <FaEnvelope className="icon"/>

              <input
    type="email"
    name="email"
    placeholder="Email"
    value={user.email}
    onChange={handleChange}
/>

            </div>

            <div className="field">

              <FaPhone className="icon"/>

              <input
    type="text"
    name="phoneNumber"
    placeholder="Phone Number"
    value={user.phoneNumber}
    onChange={handleChange}
/>

            </div>

            <div className="field">

              <FaLock className="icon"/>

              <input
    type="password"
    name="password"
    placeholder="Password"
    value={user.password}
    onChange={handleChange}
/>

              <FaEye className="eye"/>

            </div>

            <div className="field">

              <FaLock className="icon"/>

              <input
    type="password"
    name="confirmPassword"
    placeholder="Confirm Password"
    value={user.confirmPassword}
    onChange={handleChange}
/>

              <FaEye className="eye"/>

            </div>

            <button className="login">

              CREATE ACCOUNT

            </button>

          </form>

          <p className="bottom-text">

            Already have an account?

            <Link to="/">

              Login

            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}