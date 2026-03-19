import React from "react";
import "./advisory.css";

function Advisory() {
  return (
    <div className="advisory-wrapper">

      {/* Header */}
      <div className="advisory-header">
        <h1>🌱 Farming Advisory</h1>
        <p>Get expert guidance for better crop yield</p>
      </div>

      {/* Advisory Cards */}
      <div className="advisory-grid">

        <div className="advisory-card">
          <h3>🌾 Crop Advisory</h3>
          <p>Best crops to grow based on season and soil conditions.</p>
          <button>View Details</button>
        </div>

        <div className="advisory-card">
          <h3>🐛 Pest Control</h3>
          <p>Identify pests and get solutions to protect your crops.</p>
          <button>View Details</button>
        </div>

        <div className="advisory-card">
          <h3>💧 Irrigation Tips</h3>
          <p>Smart irrigation techniques to save water and improve yield.</p>
          <button>View Details</button>
        </div>

        <div className="advisory-card">
          <h3>🌦 Weather Advisory</h3>
          <p>Plan your farming activities based on weather conditions.</p>
          <button>View Details</button>
        </div>

        <div className="advisory-card">
          <h3>🧪 Soil Health</h3>
          <p>Check soil nutrients and improve soil fertility.</p>
          <button>View Details</button>
        </div>

        <div className="advisory-card">
          <h3>🚜 Modern Techniques</h3>
          <p>Use modern farming tools and technology for better results.</p>
          <button>View Details</button>
        </div>

      </div>

    </div>
  );
}

export default Advisory;