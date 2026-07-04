import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  FaGoogle,
  FaFacebookF,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
} from "react-icons/fa";
import "../styles/Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8083/api/auth/login", loginData);
      localStorage.setItem("user", JSON.stringify(response.data));
      alert("Login Successful!");
      navigate("/profile");
    } catch (error) {
      alert("Invalid Email or Password!");
    }
  };

  return (
    <div className="new-login-wrapper">
      <div className="new-login-card">
        
        {/* LEFT DECORATIVE PANEL */}
        <div className="brand-side">
          <div className="brand-nav">
            <span className="nav-active">LOGIN</span>
            <Link to="/signup" className="nav-idle">SIGN UP</Link>
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
            <p className="subtext">Smart Expense Tracker</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="field-group">
              <FaEnvelope className="field-icon" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={loginData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field-group">
              <FaLock className="field-icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={handleChange}
                required
              />
              {showPassword ? (
                <FaEye className="toggle-password" onClick={() => setShowPassword(false)} />
              ) : (
                <FaEyeSlash className="toggle-password" onClick={() => setShowPassword(true)} />
              )}
            </div>

            <div className="forgot-lnk">Forgot Password?</div>

            <button type="submit" className="action-btn">
              LOGIN <FaArrowRight />
            </button>

            <div className="form-divider">
              <span>or continue with</span>
            </div>

            <div className="oauth-row">
              <button type="button" className="oauth-btn google">
                <FaGoogle /> <span>Google</span>
              </button>
              <button type="button" className="oauth-btn facebook">
                <FaFacebookF /> <span>Facebook</span>
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}