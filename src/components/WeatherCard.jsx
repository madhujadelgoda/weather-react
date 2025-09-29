import React from "react";
import { WiDaySunny, WiCloud, WiRain, WiSnow } from "react-icons/wi";
import "./WeatherCard.css";

export default function WeatherCard({ data }) {
  const { name, main, weather } = data;

  // icon mapping
  const weatherIcon = () => {
    const mainWeather = weather[0].main.toLowerCase();
    if (mainWeather.includes("cloud")) return <WiCloud size={60} />;
    if (mainWeather.includes("rain")) return <WiRain size={60} />;
    if (mainWeather.includes("snow")) return <WiSnow size={60} />;
    return <WiDaySunny size={60} />;
  };

  return (
    <div className="weather-card">
      <h2 className="weather-city">{name}</h2>
      <div className="weather-icon">{weatherIcon()}</div>
      <p className="weather-desc">{weather[0].description}</p>
      <p className="weather-temp">{Math.round(main.temp)}°C</p>
      <p className="weather-feels">Feels like {Math.round(main.feels_like)}°C</p>
    </div>
  );
}
