import { useState, useEffect } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  // ✅ Auto redirect if already logged in
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("login/", formData);

      alert(res.data.message);

      // ✅ Store user properly
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // ✅ Redirect to dashboard
      navigate("/dashboard");

    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.error || "Login Failed");
    }
  };

  return (
    <div className="page-wrapper">
      <div className="left-panel">
        <h1>Unnati Krashi 🌾</h1>
      </div>

      <div className="right-panel">
        <div className="login-box">
          <h2>UnatiLogin🌾</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />

            <button type="submit">Login</button>

            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Login;