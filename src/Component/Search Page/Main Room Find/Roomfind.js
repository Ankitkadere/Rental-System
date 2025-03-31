import React, { useState, useEffect } from "react";
import "./Roomfind.css";

const RoomSearch = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const areas = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ];

  useEffect(() => {
    if (query) {
      const filteredAreas = areas.filter((area) =>
        area.toLowerCase().startsWith(query.toLowerCase())
      );
      setSuggestions(filteredAreas);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSuggestionClick = (area) => {
    setQuery(area);
    setSuggestions([]);
  };

  return (
    <div className="Finder">
      <div className="search-box">
        <h2 className="title">Search</h2>
        <form>
          <div className="input-group">
            <label htmlFor="area">Area</label>
            <input
              type="text"
              id="area"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="input"
              placeholder="Enter area"
            />
            <div className="suggestions">
              {suggestions.map((area, index) => (
                <div
                  key={index}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(area)}
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
          <div className="select-group">
            <div>
              <label htmlFor="room-type">Room Type</label>
              <select id="room-type" className="select">
                <option value="">Select room type</option>
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="suite">Suite</option>
              </select>
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <select id="price" className="select">
                <option value="">Select price range</option>
                <option value="0-50">$0 - $50</option>
                <option value="51-100">$51 - $100</option>
                <option value="101-150">$101 - $150</option>
                <option value="151-200">$151 - $200</option>
                <option value="201-250">$201 - $250</option>
                <option value="251-300">$251 - $300</option>
                <option value="301-350">$301 - $350</option>
                <option value="351-400">$351 - $400</option>
                <option value="401-450">$401 - $450</option>
                <option value="451-500">$451 - $500</option>=
                <option value="501+">$501+</option>
              </select>
            </div>
          </div>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default RoomSearch;
