import React, { useEffect, useState } from "react";
import axios from "axios";
import { WiDaySunny, WiCloud, WiRain, WiSnow } from "react-icons/wi";
import "./Forecast.css";

const API_KEY = "ADD A (openweathermap) API KEY HERE";

export default function Forecast({ city }) {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!city) return;

    async function fetchForecast() {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
            city
          )}&units=metric&appid=${API_KEY}`
        );

        // filtering the list to show one forecast per day at 12:00
        const dailyForecast = res.data.list.filter((item) =>
          item.dt_txt.includes("12:00:00")
        );
        setForecastData(dailyForecast);
      } catch (err) {
        setError("Forecast not found!");
        setForecastData([]);
      } finally {
        setLoading(false);
      }
    }

    fetchForecast();
  }, [city]);

  // weather icon mapping
  const weatherIcon = (weatherMain) => {
    const mainWeather = weatherMain.toLowerCase();
    if (mainWeather.includes("cloud")) return <WiCloud size={40} />;
    if (mainWeather.includes("rain")) return <WiRain size={40} />;
    if (mainWeather.includes("snow")) return <WiSnow size={40} />;
    return <WiDaySunny size={40} />;
  };

  if (loading) return <p className="forecast-loading">Loading forecast...</p>;
  if (error) return <p className="forecast-error">{error}</p>;
  if (!forecastData.length) return null;

  return (
    <div className="forecast-container">
      <h3 className="forecast-title">Forecast</h3>
      <div className="forecast-cards">
        {forecastData.map((item) => (
          <div key={item.dt} className="forecast-card">
            <p className="forecast-date">{new Date(item.dt_txt).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</p>
            <div className="forecast-icon">{weatherIcon(item.weather[0].main)}</div>
            <p className="forecast-temp">{Math.round(item.main.temp)}°C</p>
            <p className="forecast-desc">{item.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
