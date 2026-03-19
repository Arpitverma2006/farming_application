import React, { useState } from "react";
import "./weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "ff3c26d70c0df4e73e29c2d9208cdf1d"; // 🔥 Put your OpenWeather API key here

  const getWeather = async (cityName) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert("City not found ❌");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      getWeather(city);
    }
  };

  return (
    <div className="weather-wrapper">
      <h1>🌾 Unnati Krashi</h1>

      {/* Search */}
      <form onSubmit={handleSearch} className="search-box">
        <input
          type="text"
          placeholder="Enter city / village..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Weather Data */}
      {weather && (
        <div className="weather-card">
          <h2>{weather.name}</h2>
          <h1>{weather.main.temp}°C</h1>
          <p>{weather.weather[0].description}</p>

          <div className="info">
            <p>💧 Humidity: {weather.main.humidity}%</p>
            <p>🌬 Wind: {weather.wind.speed} km/h</p>
            <p>🌡 Feels Like: {weather.main.feels_like}°C</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;