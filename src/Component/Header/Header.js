import React from "react";
import "../Header/Header.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Header = () => {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="contact-info">
            <FaPhoneAlt className="sicon" /> <span>+91 9174750864</span>
            <FaEnvelope className="ml-12 sicon" />{" "}
            <span>info@roomonline.com</span>
          </div>
          <div className="marque">
            <div behavior="scroll" direction="left" class="marquee">🔹 This is the best way to find your perfect, comfortable, and affordable room! | यह आपके लिए सबसे अच्छा तरीका है कि आप अपनी पसंद, आरामदायक और किफायती कमरा ढूंढ सकें!</div>
          </div>
          <div className="social-icons">
            <FaFacebookF className="sicon" /> <FaTwitter className="sicon" />{" "}
            <FaInstagramSquare className="sicon" />
          </div>
        </div>
      </header>

      {/* Navigation */}
    </>
  );
};

export default Header;
