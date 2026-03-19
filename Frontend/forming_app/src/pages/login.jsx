// Login.jsx
import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="page-wrapper">
      <div className="left-panel">
        <h1>Unnati Krashi 🌾</h1>
        <p>Empowering Farmers with Smart Technology</p>
      </div>

      <div className="right-panel">
        <div className="login-box">
          <h2>Welcome Back 👋</h2>
          <p className="subtitle">Login to continue your farming journey</p>

          <form onSubmit={handleSubmit} className="login-form">

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="extra-options">
              <span>Forgot Password?</span>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>

            <p className="register-text">
              Don't have an account? <Link to="/register">Register</Link>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;


