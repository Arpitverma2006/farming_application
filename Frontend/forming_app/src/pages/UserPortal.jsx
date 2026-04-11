import { useState } from "react";
import "./UserPortal.css";

function UserPortal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔥 Simple demo validation (replace with API call later)
    if (email === "admin@farm.com" && password === "1234") {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Invalid credentials. Try again!");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="portal-container">
      <div className="portal-card">

        {!loggedIn ? (
          <>
            <h2 className="title">🌾 User Portal Login</h2>

            <form onSubmit={handleLogin} className="form">
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit">Login</button>

              {error && <p className="error">{error}</p>}
            </form>

            <p className="hint">
              Demo Credentials: <br />
              Email: admin@farm.com <br />
              Password: 1234
            </p>
          </>
        ) : (
          <div className="dashboard">
            <h2>🌿 Welcome to User Portal</h2>
            <p>You are successfully logged in!</p>

            <div className="info-box">
              <p>✔ Crop Suggestions</p>
              <p>✔ Weather Updates</p>
              <p>✔ Farming AI Assistant</p>
            </div>

            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default UserPortal;