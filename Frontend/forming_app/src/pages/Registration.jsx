import { useState } from "react";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";

function Registration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    age: "",
    email: "",
    gender: "",
    phone_number: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("register/", {
        ...formData,
        age: parseInt(formData.age)  // ✅ FIX
      });

      alert(res.data.message);
      navigate("/login");

    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.error || "Registration Failed");
    }
  };

  return (
    <div className="page-wrapper">
      <div className="left-panel">
        <h1>Unnati Krashi 🌾</h1>
        <p>Join the future of smart farming</p>
      </div>

      <div className="right-panel">
        <div className="register-box">
          <h2>Create Account 🚀</h2>

          <form onSubmit={handleSubmit}>

            <input type="text" name="full_name" placeholder="Full Name"
              onChange={handleChange} required />

            <input type="number" name="age" placeholder="Age"
              onChange={handleChange} required />

            <select name="gender" onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <input type="email" name="email" placeholder="Email"
              onChange={handleChange} required />

            <input type="text" name="phone_number" placeholder="Phone"
              onChange={handleChange} required />

            <input type="password" name="password" placeholder="Password"
              onChange={handleChange} required />

            <button type="submit">Register</button>

            <p>Already have an account? <Link to="/login">Login</Link></p>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;