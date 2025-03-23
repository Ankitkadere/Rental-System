import React from "react";
import "../Header/Header.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaBars, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="contact-info">
            <FaPhoneAlt /> <span>+91 9932105832</span>
            <FaEnvelope className="ml-12" /> <span>info@giftyonline.com</span>
          </div>
          <div className="social-icons">
            <FaFacebookF /> <FaTwitter /> <FaInstagram />
          </div>
        </div>
      </header>

      {/* Navigation */}
   
    </>
  );
};

export default Header;