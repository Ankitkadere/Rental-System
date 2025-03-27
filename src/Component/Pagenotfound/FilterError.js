import React from "react";
import "../Pagenotfound/Notfound.css"; // Import the CSS file
import { FaHome } from "react-icons/fa"; // Import FontAwesome Home Icon

const FilterByPrice = () => {
  return (
    <div className="notfound-container">
      <img
        className="notfound-image"
        src="https://storage.googleapis.com/a1aa/image/XUcZS5dP0JKC69w_ScFaKekuViPASigkpZ23p9jPG94.jpg"
        alt="Illustration of a broken or lost Room / House "
      />
      <h1 className="notfound-title">Filter Re-apply</h1>
      <p className="notfound-text">Oops ! The page you're looking for isn't here.</p>
      <a href="/Search" className="notfound-button">
        <FaHome className="notfound-icon" />
        Go Search
      </a>
    </div>
  );
};

export default FilterByPrice;
