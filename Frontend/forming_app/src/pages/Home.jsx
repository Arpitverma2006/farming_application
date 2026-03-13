import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Unnati Krashi</div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="#">Marketplace</Link></li>
          <li><Link to="#">Weather</Link></li>
          <li><Link to="#">Advisory</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>


      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">
          <h1>Manage Your Farm with Intelligence</h1>

          <p>
            Unnati Krashi – Your digital companion for modern agriculture.
          </p>

          <Link to="/register" className="hero-btn">
            Explore Services
          </Link>
        </div>

      </section>


      {/* Features */}
      <section className="features">

        <h2>Explore Unnati Krashi Features</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>Real-time Field Monitoring</h3>
            <p>Monitor soil, crops and environment conditions.</p>
          </div>

          <div className="feature-card">
            <h3>Livestock Tracking</h3>
            <p>Track animal health and productivity easily.</p>
          </div>

          <div className="feature-card">
            <h3>Precision Agriculture</h3>
            <p>Use smart technology to improve crop yields.</p>
          </div>

          <div className="feature-card">
            <h3>Weather Forecast</h3>
            <p>Get accurate weather updates for better planning.</p>
          </div>

          <div className="feature-card">
            <h3>Pest & Disease Advisory</h3>
            <p>Identify and solve crop disease problems.</p>
          </div>

          <div className="feature-card">
            <h3>Marketplace</h3>
            <p>Buy and sell agricultural products easily.</p>
          </div>

          <div className="feature-card">
            <h3>Smart Irrigation</h3>
            <p>Automated irrigation for efficient water use.</p>
          </div>

          <div className="feature-card">
            <h3>Community Forum</h3>
            <p>Connect with farmers and agriculture experts.</p>
          </div>

        </div>
      </section>


      {/* News Section */}

      <section className="news">

        <h2>Latest From Unnati Krashi</h2>

        <div className="news-grid">

          <div className="news-card">
            <h4>Crop Disease Alert</h4>
            <p>Stay informed about new crop diseases and prevention.</p>
          </div>

          <div className="news-card">
            <h4>Marketplace Trends</h4>
            <p>Latest market prices and agriculture trends.</p>
          </div>

        </div>

      </section>


      {/* Footer */}

      <footer className="footer">

        <div className="footer-grid">

          <div>
            <h3>Unnati Krashi</h3>
            <p>Empowering farmers with technology.</p>
          </div>

          <div>
            <h4>Services</h4>
            <p>Monitoring</p>
            <p>Marketplace</p>
            <p>Advisory</p>
          </div>

          <div>
            <h4>Support</h4>
            <p>Help Center</p>
            <p>Contact</p>
          </div>

        </div>

        <p className="copyright">
          © 2026 Unnati Krashi. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;