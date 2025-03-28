import React from "react";
import "../Footer/Footer.css"; // Importing the CSS file

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="foot-container">
          {/* Newsletter Subscription */}
          <div className="newsletter">
            <div className="newsletter-text">
              <i className="fas fa-envelope icon"></i>
              <div>
                <h2>Subscribe Newsletter</h2>
                <p>Don't miss out on thousands of great deals & promotions</p>
              </div>
            </div>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email here..." />
              <button>Subscribe</button>
            </div>
          </div>
          <hr></hr>
          {/* Footer Sections */}
          <footer className="footer">
            <div className="footer-grid">
              {/* Logo and Description */}
              <div className="footer-logo">
                <img src="https://placehold.co/100x50" alt="Gifty logo" />
                <p className="footer-title">GIFTY - Happy Gift Store</p>
                <p className="footer-description">
                  Making Every Gift Uniquely Yours - Personalized with Love!
                </p>
                <div className="footer-social">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>

              {/* Footer Links */}
              <FooterColumn
                title="About"
                items={[
                  { name: "About Besa", link: "#" },
                  { name: "Sell on Besa", link: "#" },
                  { name: "Affiliate Program", link: "#" },
                  { name: "Terms & Conditions", link: "#" },
                  { name: "Privacy Policy", link: "#" },
                ]}
              />

              <FooterColumn
                title="Top Categories"
                items={[
                  { name: "T-shirts", link: "#" },
                  { name: "Calendars", link: "#" },
                  { name: "Name Plates", link: "#" },
                  { name: "Photo Frames", link: "#" },
                  { name: "Printed Cushion", link: "#" },
                ]}
              />

              <FooterColumn
                title="Help & Guide"
                items={[
                  { name: "Help Center", link: "#" },
                  { name: "How to Buy", link: "#" },
                  { name: "Shipping & Delivery", link: "#" },
                  { name: "Product Policy", link: "#" },
                  { name: "How to Return", link: "#" },
                ]}
              />

              {/* Contact Section */}
              <div className="footer-contact">
                <h3>Contact</h3>
                <ul>
                  <li>
                    <i className="fas fa-store"></i> GIFTY GIFT STORE
                  </li>
                  <li>
                    <i className="fas fa-phone"></i> +91 99321 05832
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i> info@giftyonline.com
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i> 14 SR Road,
                    Mumbai, 400001
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>{" "}
      </div>{" "}
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="fcopyright">
          <p>© 2025 Gifty. All Rights Reserved.</p>
        </div>
        <div className="footer-payments">
          <img src="https://placehold.co/16x16" alt="" />
          <img src="https://placehold.co/16x16" alt="" />
          <img src="https://placehold.co/16x16" alt="" />
          <img src="https://placehold.co/16x16" alt="" />
        </div>
      </div>
    </>
  );
};

const FooterColumn = ({ title, items }) => (
  <div className="footer-column">
    <h3>{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
