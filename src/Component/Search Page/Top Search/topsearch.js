import React, { useState } from "react";
import "./Search.css";
import { useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
const  Search = () => {
  const [query, setQuery] = useState("");
  const [suggestionsVisible, setSuggestionsVisible] = useState(false);
  const [url, setUrl] = useState("");

  const roomTypes = [
    { name: "Single Room", link: "/Singleroom" },
    { name: "Double Room", link: "/double-room" },
    { name: "Suite", link: "/suite" },
    { name: "Deluxe Room", link: "/deluxe-room" },
    { name: "Family Room", link: "/family-room" },
    { name: "Executive Room", link: "/executive-room" },
    { name: "Presidential Suite", link: "/presidential-suite" },
    { name: "Studio Room", link: "/studio-room" },
    { name: "Penthouse", link: "/penthouse" },
    { name: "Cabana", link: "/cabana" },
    { name: "Villa", link: "/villa" },
    { name: "Bungalow", link: "/bungalow" },
    { name: "Loft", link: "/loft" },
    { name: "Dormitory", link: "/dormitory" },
    { name: "Accessible Room", link: "/accessible-room" }
  ];

  const filteredRoomTypes = roomTypes.filter(roomType =>
    roomType.name.toLowerCase().startsWith(query.toLowerCase())
  );

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setSuggestionsVisible(e.target.value.length > 0);
    setUrl(`/${e.target.value.replace(/\s+/g, "-").toLowerCase()}`);
  };

  const handleSearchClick = () => {
    window.location.href = url;
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };
  const mobileInputRef = useRef(null);
  useEffect(() => {
    if (mobileInputRef.current) {
      mobileInputRef.current.focus();
    }
  }, []);
  return (
    <div className="search-container">
      <h1 className="search-title">Search For Better Result</h1>
      <div className="search-box">
        <input
          ref={mobileInputRef} // Attach ref here
          type="text"
          value={query}
          onChange={handleInputChange}
          className="search-input"
          onKeyDown={handleKeyPress}
          placeholder="Type here for search..."
        />
        <FaSearch className="search-icon" onClick={handleSearchClick}/>
        {suggestionsVisible && (
          <ul className="suggestions-list">
            {filteredRoomTypes.map((roomType, index) => {
              const startIndex = roomType.name.toLowerCase().indexOf(query.toLowerCase());
              const endIndex = startIndex + query.length;
              return (
                <li key={index} className="suggestion-item">
                  <a href={roomType.link}>
                    {roomType.name.substring(0, startIndex)}
                    <span className="highlight">{roomType.name.substring(startIndex, endIndex)}</span>
                    {roomType.name.substring(endIndex)}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
