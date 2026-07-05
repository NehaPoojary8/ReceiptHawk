import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
} from "react-icons/fa";
import "../styles/Signup.css";

export default function Signup() {
  const navigate = useNavigate();
  
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // Adjust endpoint to match your backend signup logic
      await axios.post("http://localhost:8083/api/auth/register", {
        fullName: signupData.fullName,
        email: signupData.email,
        phoneNumber: signupData.phoneNumber,
        password: signupData.password,
      });

      alert("Signup Successful! Please login.");
      navigate("/login");
    } catch (error) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="new-signup-wrapper">
      <div className="new-signup-card">
        
        {/* LEFT DECORATIVE PANEL */}
        <div className="brand-side">
          <div className="brand-nav">
            <Link to="/login" className="nav-idle">LOGIN</Link>
            <span className="nav-active">SIGN UP</span>
          </div>
          <div className="brand-text">
            <h2>Track Smart.</h2>
            <h2>Save More.</h2>
            <h2>Live Better.</h2>
            <p>Manage every receipt with confidence.</p>
          </div>
        </div>

        {/* RIGHT FORM PANEL */}
        <div className="form-side">
          <div className="form-header">
            <div className="brand-badge">🦅</div>
            <h1>Receipt<span>Hawk</span></h1>
            <p className="subtext">Create your account</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            
            {/* FULL NAME */}
            <div className="field-group">
              <FaUser className="field-icon" />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={signupData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            {/* EMAIL */}
            <div className="field-group">
              <FaEnvelope className="field-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={signupData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* PHONE NUMBER */}
            <div className="field-group">
              <FaPhone className="field-icon" />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={signupData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            {/* PASSWORD */}
            <div className="field-group">
              <FaLock className="field-icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={signupData.password}
                onChange={handleChange}
                required
              />
              {showPassword ? (
                <FaEye className="toggle-password" onClick={() => setShowPassword(false)} />
              ) : (
                <FaEyeSlash className="toggle-password" onClick={() => setShowPassword(true)} />
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="field-group">
              <FaLock className="field-icon" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={signupData.confirmPassword}
                onChange={handleChange}
                required
              />
              {showConfirmPassword ? (
                <FaEye className="toggle-password" onClick={() => setShowConfirmPassword(false)} />
              ) : (
                <FaEyeSlash className="toggle-password" onClick={() => setShowConfirmPassword(true)} />
              )}
            </div>

            <button type="submit" className="action-btn">
              CREATE ACCOUNT <FaArrowRight />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}