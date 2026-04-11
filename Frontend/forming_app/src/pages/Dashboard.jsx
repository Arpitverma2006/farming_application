import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import ChatBot from "./ChatBot";   // ✅ Import chatbot

function Dashboard() {
  const navigate = useNavigate();

  // ✅ Parse user properly (fix)
  const userData = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>🌾 Unnati Krashi</h2>

        <ul>
          <li><Link to='/userportal'>🏠 Dashboard</Link></li>
          <li><Link to='#'>🌦 Weather</Link></li>
          <li><Link to='#'>🌱 Crops</Link></li>
          <li><Link to='#'>💰 Market Prices</Link></li>
          <li><Link to='#'>📊 Analytics</Link></li>
        </ul>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">

        {/* Top Bar */}
        <div className="topbar">
          <h3>
            Welcome, {userData?.name || userData || "Farmer"} 👋
          </h3>
        </div>

        {/* Cards */}
        <div className="cards">

          <div className="card">
            <h4>🌦 Weather</h4>
            <p>25°C, Clear Sky</p>
          </div>

          <div className="card">
            <h4>🌱 Crop Status</h4>
            <p>Wheat Growing 🌿</p>
          </div>

          <div className="card">
            <h4>💰 Market Price</h4>
            <p>₹2200 / quintal</p>
          </div>

          <div className="card">
            <h4>📊 Productivity</h4>
            <p>+12% this month</p>
          </div>

        </div>

      </div>

      {/* 🔥 AI Chatbot Added */}
      <ChatBot />

    </div>
  );
}

export default Dashboard;