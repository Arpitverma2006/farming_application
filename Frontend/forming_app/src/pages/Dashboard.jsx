import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

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
          <li>🏠 Dashboard</li>
          <li>🌦 Weather</li>
          <li>🌱 Crops</li>
          <li>💰 Market Prices</li>
          <li>📊 Analytics</li>
        </ul>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">

        {/* Top Bar */}
        <div className="topbar">
          <h3>Welcome, {user} 👋</h3>
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
    </div>
  );
}

export default Dashboard;