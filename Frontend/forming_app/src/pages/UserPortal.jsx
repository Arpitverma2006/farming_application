import "./UserPortal.css";

function UserPortal() {
  const user = {
    name: "Ajay Verma",
    email: "ajay@example.com",
    role: "Farmer",
  };

  const features = [
    { icon: "🌾", text: "Crop Suggestions" },
    { icon: "🌦", text: "Weather Updates" },
    { icon: "🤖", text: "AI Farming Assistant" },
    { icon: "📊", text: "Market Prices" },
    { icon: "🚜", text: "Smart Farming Tips" },
    { icon: "🧪", text: "Soil Health Report" },
  ];

  return (
    <div className="portal-container">
      <div className="portal-card">

        {/* Profile Section */}
        <div className="profile-section">
          <div className="avatar">
            {user.name.charAt(0)}
          </div>

          <div>
            <h2 className="title">{user.name}</h2>
            <p className="subtitle">{user.role}</p>
            <p className="email">{user.email}</p>
          </div>
        </div>

        {/* Features */}
        <h3 className="section-title">🌿 Your Dashboard</h3>

        <div className="info-grid">
          {features.map((item, index) => (
            <div key={index} className="info-card">
              <span className="icon">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="actions">
          <button className="btn">View Profile</button>
          <button className="btn secondary">Settings</button>
        </div>

      </div>
    </div>
  );
}

export default UserPortal;