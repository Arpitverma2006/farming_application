import "./Dashboard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatBot from "./ChatBot";

function Dashboard() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user"));

  // ✅ Default = PROFILE (important)
  const [activeTab, setActiveTab] = useState("profile");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>🌾 Unnati Krashi</h2>

        <ul>
          <li
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => setActiveTab("profile")}
          >
            🏠 Profile
          </li>

          <li
            className={activeTab === "weather" ? "active" : ""}
            onClick={() => setActiveTab("weather")}
          >
            🌦 Weather
          </li>

          <li
            className={activeTab === "crops" ? "active" : ""}
            onClick={() => setActiveTab("crops")}
          >
            🌱 Crops
          </li>

          <li
            className={activeTab === "market" ? "active" : ""}
            onClick={() => setActiveTab("market")}
          >
            💰 Market Prices
          </li>

          <li
            className={activeTab === "analytics" ? "active" : ""}
            onClick={() => setActiveTab("analytics")}
          >
            📊 Analytics
          </li>
        </ul>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">

        {/* ================= PROFILE VIEW ================= */}
        {activeTab === "profile" && (
          <div className="profile-page">

            <div className="profile-card">
              
              <div className="avatar">
                {userData?.image ? (
                  <img src={userData.image} alt="profile" />
                ) : (
                  userData?.name?.charAt(0)?.toUpperCase() || "F"
                )}
              </div>

              <h2>{userData?.name || "Farmer"}</h2>
              <p>{userData?.email || "farmer@example.com"}</p>

              <div className="profile-info-box">
                <p>🌾 Role: Farmer</p>
                <p>📍 Location: India</p>
                <p>🚜 Account Type: Premium</p>
              </div>
            </div>

          </div>
        )}

        {/* ================= WEATHER ================= */}
        {activeTab === "weather" && (
          <div className="placeholder">
            <h2>🌦 Weather Module Coming Soon</h2>
          </div>
        )}

        {/* ================= CROPS ================= */}
        {activeTab === "crops" && (
          <div className="placeholder">
            <h2>🌱 Crops Module Coming Soon</h2>
          </div>
        )}

        {/* ================= MARKET ================= */}
        {activeTab === "market" && (
          <div className="placeholder">
            <h2>💰 Market Module Coming Soon</h2>
          </div>
        )}

        {/* ================= ANALYTICS ================= */}
        {activeTab === "analytics" && (
          <div className="placeholder">
            <h2>📊 Analytics Module Coming Soon</h2>
          </div>
        )}

      </div>

      {/* Chatbot */}
      <ChatBot />

    </div>
  );
}

export default Dashboard;