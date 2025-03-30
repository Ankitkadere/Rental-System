import React, { useState } from "react";
<<<<<<< HEAD
import "./Search.css";
import { FaSearch } from "react-icons/fa";
const  Search = () => {
=======
import { useEffect, useRef } from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";
const Search = () => {
>>>>>>> c807e00 (Initial commit or update)
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
<<<<<<< HEAD
    { name: "Accessible Room", link: "/accessible-room" }
  ];

  const filteredRoomTypes = roomTypes.filter(roomType =>
=======
    { name: "Accessible Room", link: "/accessible-room" },
  ];

  const filteredRoomTypes = roomTypes.filter((roomType) =>
>>>>>>> c807e00 (Initial commit or update)
    roomType.name.toLowerCase().startsWith(query.toLowerCase())
  );

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setSuggestionsVisible(e.target.value.length > 0);
    setUrl(`/${e.target.value.replace(/\s+/g, "-").toLowerCase()}`);
  };

<<<<<<< HEAD
=======
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

>>>>>>> c807e00 (Initial commit or update)
  const handleSearchClick = () => {
    window.location.href = url;
  };

<<<<<<< HEAD
=======
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus(); // Auto-select input on page load
  }, []);

>>>>>>> c807e00 (Initial commit or update)
  return (
    <div className="search-container">
      <h1 className="search-title">Search For Better Result</h1>
      <div className="search-box">
        <input
<<<<<<< HEAD
          type="text"
          value={query}
          onChange={handleInputChange}
          className="search-input"
          placeholder="Type here for search..."
        />
        <FaSearch className="search-icon" onClick={handleSearchClick}/>
        {suggestionsVisible && (
          <ul className="suggestions-list">
            {filteredRoomTypes.map((roomType, index) => {
              const startIndex = roomType.name.toLowerCase().indexOf(query.toLowerCase());
=======
          ref={inputRef} // Attach ref to input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // Detect Enter key
          className="search-input"
          placeholder="Type here for search..."
        />
        <FaSearch className="search-icon" onClick={handleSearchClick} />
        {suggestionsVisible && (
          <ul className="suggestions-list">
            {filteredRoomTypes.map((roomType, index) => {
              const startIndex = roomType.name
                .toLowerCase()
                .indexOf(query.toLowerCase());
>>>>>>> c807e00 (Initial commit or update)
              const endIndex = startIndex + query.length;
              return (
                <li key={index} className="suggestion-item">
                  <a href={roomType.link}>
                    {roomType.name.substring(0, startIndex)}
<<<<<<< HEAD
                    <span className="highlight">{roomType.name.substring(startIndex, endIndex)}</span>
=======
                    <span className="highlight">
                      {roomType.name.substring(startIndex, endIndex)}
                    </span>
>>>>>>> c807e00 (Initial commit or update)
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
