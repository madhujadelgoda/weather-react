import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import SearchBar from "./components/SearchBar";
import "./App.css";

const API_KEY = "ADD A (openweathermap) API KEY HERE";

export default function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cityTime, setCityTime] = useState(null);

  useEffect(() => {
    if (!weatherData) return;

    const timer = setInterval(() => {
      const utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
      const cityDate = new Date(utc + 1000 * weatherData.timezone);
      setCityTime(cityDate);
    }, 1000);

    return () => clearInterval(timer);
  }, [weatherData]);

  const formatTime = (date) =>
    date
      ? date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      : "";

  async function getWeather(cityName) {
    if (!cityName) return;
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          cityName
        )}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(res.data);
    } catch (err) {
      setError("City not found!");
      setWeatherData(null);
      setCityTime(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Weather App</h1>
      {cityTime && <p className="current-time">{formatTime(cityTime)}</p>}

      {/* Search Bar */}
      <SearchBar city={city} setCity={setCity} onSearch={() => getWeather(city)} />

      {/* Loading / Error */}
      {loading && <p className="loading-text">Loading...</p>}
      {error && <p className="error-text">{error}</p>}

      {/* Current Weather */}
      {weatherData && <WeatherCard data={weatherData} />}

      {/* Forecast */}
      {weatherData && <Forecast city={weatherData.name} />}
    </div>
  );
}
