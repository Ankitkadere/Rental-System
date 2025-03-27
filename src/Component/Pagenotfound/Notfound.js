import React from "react";
import "../Pagenotfound/Notfound.css"; // Import the CSS file
import { FaHome } from "react-icons/fa"; // Import FontAwesome Home Icon

const NotFound = () => {
  return (
    <div className="notfound-container">
      <img
        className="notfound-image"
        src="https://storage.googleapis.com/a1aa/image/XUcZS5dP0JKC69w_ScFaKekuViPASigkpZ23p9jPG94.jpg"
        alt="Illustration of a broken or lost page"
      />
      <h1 className="notfound-title">404</h1>
      <p className="notfound-text">Oops ! The page you're looking for isn't here.</p>
      <a href="/" className="notfound-button">
        <FaHome className="notfound-icon" />
        Go Home
      </a>
    </div>
  );
};

export default NotFound;
