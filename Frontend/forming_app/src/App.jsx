import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/Registration.jsx";
import Weather from "./pages/Weather.jsx";
import MarketPlace from "./pages/MarketPlace.jsx";
import Advisory from "./pages/Advisory.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/marketplace" element={<MarketPlace/>}/>
        <Route path="/advisory" element={<Advisory/>}/>
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;