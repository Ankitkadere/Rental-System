import React, { useState, useEffect } from "react";
import "../Header/Header.css";
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { RiMobileDownloadLine } from "react-icons/ri";
 
const AddToHomeScreen = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setIsSupported(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () =>
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
  }, []);

  const handleAddToHomeScreen = () => {
    deferredPrompt?.prompt();
    deferredPrompt?.userChoice.then(() => setDeferredPrompt(null));
  };

  return (
    <div className="a2hs-container">
      {isSupported ? (
        <button className="a2hs-button" onClick={handleAddToHomeScreen}>
         <RiMobileDownloadLine className="sicon" />
        </button>
      ) : (
        <div className="social-icons">
        <FaFacebookF className="sicon" /> <FaTwitter className="sicon" />{" "}
        <FaInstagramSquare className="sicon" />
      </div>
      )}
    </div>
  );
};



export default AddToHomeScreen;
