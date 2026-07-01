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

          <form onSubmit={(e) => e.preventDefault()}>

            <div className="field">

              <FaUser className="icon"/>

              <input
                type="text"
                placeholder="Full Name"
              />

            </div>

            <div className="field">

              <FaEnvelope className="icon"/>

              <input
                type="email"
                placeholder="Email"
              />

            </div>

            <div className="field">

              <FaPhone className="icon"/>

              <input
                type="text"
                placeholder="Phone Number"
              />

            </div>

            <div className="field">

              <FaLock className="icon"/>

              <input
                type="password"
                placeholder="Password"
              />

              <FaEye className="eye"/>

            </div>

            <div className="field">

              <FaLock className="icon"/>

              <input
                type="password"
                placeholder="Confirm Password"
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