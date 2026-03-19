// Marketplace.jsx
import React from "react";
import "./marketplace.css";
import seed from "../assets/seeds.jpg";
import clean from "../assets/clean.jpeg";
import fruit from "../assets/fruit.jpeg";
import veg from "../assets/vegitable.jpeg";

function Marketplace() {
  return (
    <div className="marketplace-wrapper">

      {/* Header */}
      <div className="market-header">
        <h1>🌾 Unnati Krashi Marketplace</h1>
        <p>Buy & Sell Agricultural Products Easily</p>
      </div>

      {/* Search + Filter */}
      <div className="market-controls">
        <input type="text" placeholder="Search crops, seeds, tools..." />
        <select>
          <option>All Categories</option>
          <option>Seeds</option>
          <option>Fertilizers</option>
          <option>Equipment</option>
          <option>Crops</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="product-grid">

        <div className="product-card">
          <img src={fruit} alt="Wheat" />
          <h3>Wheat</h3>
          <p>High quality wheat grains</p>
          <span>₹2200 / Quintal</span>
          <button>Buy Now</button>
        </div>

        <div className="product-card">
          <img src={veg} alt="Rice" />
          <h3>Rice</h3>
          <p>Premium basmati rice</p>
          <span>₹3500 / Quintal</span>
          <button>Buy Now</button>
        </div>

        <div className="product-card">
          <img src={seed} alt="Seeds" />
          <h3>Seeds</h3>
          <p>Organic vegetable seeds</p>
          <span>₹500 / Pack</span>
          <button>Buy Now</button>
        </div>

        <div className="product-card">
          <img src={clean} alt="Fertilizer" />
          <h3>Fertilizer</h3>
          <p>Eco-friendly fertilizer</p>
          <span>₹1200 / Bag</span>
          <button>Buy Now</button>
        </div>

      </div>

    </div>
  );
}

export default Marketplace;

