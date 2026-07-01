import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaGoogle,
  FaFacebookF,
  FaEnvelope,
  FaLock,
  FaEye,
} from "react-icons/fa";

import "../styles/Login.css";

export default function Login() {
  return (
    <div className="page">

      <div className="card">

        {/* LEFT */}

        <div className="left">

          <div className="blue-bg"></div>

          <div className="curve"></div>

          <div className="menu">

            <div className="active-tab">

              LOGIN

            </div>

            <Link to="/signup" className="tab">

              SIGN UP

            </Link>

          </div>

        </div>

        {/* RIGHT */}

        <div className="right">

          <div className="profile">

            <FaUserCircle />

          </div>

          <h1>ReceiptHawk</h1>

          <p className="subtitle">

            Smart Expense Tracker

          </p>

          <form onSubmit={(e)=>e.preventDefault()}>

            <div className="field">

              <FaEnvelope className="icon"/>

              <input

                type="email"

                placeholder="Email"

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

            <div className="forgot">

              Forgot Password?

            </div>

            <button className="login">

              LOGIN

            </button>

          </form>

          <div className="line">

            <span>or continue with</span>

          </div>

          <div className="social">

            <button>

              <FaGoogle/>

              Google

            </button>

            <button>

              <FaFacebookF/>

              Facebook

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}