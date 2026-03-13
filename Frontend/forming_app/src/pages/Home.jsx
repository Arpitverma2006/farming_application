import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Unnati Krashi</div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Unnati Krashi</h1>
        <p>
          Empowering farmers with technology, insights, and modern
          agricultural solutions.
        </p>

        <div className="hero-buttons">
          <Link to="/register" className="btn-primary">Get Started</Link>
          <Link to="/login" className="btn-secondary">Login</Link>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-card">
          <h3>Smart Farming</h3>
          <p>Use modern tools and data to improve crop productivity.</p>
        </div>

        <div className="feature-card">
          <h3>Market Insights</h3>
          <p>Get real-time information about crop prices and demand.</p>
        </div>

        <div className="feature-card">
          <h3>Farmer Support</h3>
          <p>Guidance and support to help farmers grow better crops.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Unnati Krashi. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Home;