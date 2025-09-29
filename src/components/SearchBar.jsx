import React from "react";
import "./SearchBar.css";

export default function SearchBar({ city, setCity, onSearch }) {
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      onSearch();
    }
  }

  return (
    <div className="searchbar-container">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter city name"
        className="search-input"
      />
      <button onClick={onSearch} className="search-btn">
        Search
      </button>
    </div>
  );
}
