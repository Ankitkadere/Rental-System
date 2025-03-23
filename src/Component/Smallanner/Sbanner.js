import React from "react";
import "../Smallanner/Sbanner.css";
import { FaClock } from "react-icons/fa";

const Smallbanner = () => {
  return (
    <>
    <div className="container">
      <div className="sale-section">
        {/* Custom T-Shirt Section */}
        <div className="sale-box">
          <div className="content">
            <h2 className="subtitle">GIFT SHOP</h2>
            <h1 className="title">CUSTOM Cake;s</h1>
            <h3 className="subtitle">BIG SALE</h3>
            <div className="dotted-pattern">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="dot"></div>
              ))}
            </div>
            <div className=" ">
              <div className="discount-badge">             
                <h1 className="bold">50%</h1>    
              </div>
            </div>
          </div>
        </div>

        {/* New Launch Section */}
        <div className="sale-box  ">
          <div className="content">
            <h2 className="subtitle">GIFT SHOP</h2>
            <h1 className="title">NEW Cake</h1>
            <h3 className="subtitle">SALE LIVE</h3>
            <div className="dotted-pattern">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="dot"></div>
              ))}
            </div>
            <div className=" ">
            <div className="offer-badge">
              <FaClock className="icon" />
              <p>80% OFF</p>
            </div>
          </div>
          </div>
        
        </div>
      </div>
      <div className="back-to-top-container d-none">
        <button className="back-to-top">^ Back to top</button>
      </div>
    </div>
    </>
  );
};

export default Smallbanner;
