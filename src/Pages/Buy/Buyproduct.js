import React from "react";
import "../Buy/Buyproduct.css"; // Import CSS for additional styling

const ProductBuy = () => {
  return (
    <div className="Buy">
      <div className="form-card">
        <div className="image-container">
          <img
            src="https://img.freepik.com/premium-psd/birthday-cake-social-media-promotion-instagram-banner-template_545154-89.jpg?semt=ais_hybrid"
            alt="Cake with text 'It's time to celebrate!'"
          />
        </div>
        <h1 className="title">CAKE BOOKING</h1>
        <p className="description">
          Please fill in the details to book your cake.
        </p>
        <form>
          <div className="form-group ">
            <label htmlFor="first-name">Customer Name</label>
            <div className="input-group fa">
              <input type="text" id="first-name" placeholder="First Name" />
              <input type="text" id="last-name" placeholder="Last Name" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Contact Details</label>
            <div className="input-group fa">
              <input type="email" id="email" placeholder="Email" />
              <input type="tel" id="phone" placeholder="Phone Number" />
            </div>{" "}
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="street-address"
              placeholder="Street Address"
            />
            <input type="text" id="city" placeholder="City" />
            <select id="state">
              <option>Select State</option>
              <option>Andhra Pradesh</option>
              <option>Maharashtra</option>
              <option>Delhi</option>
              <option>West Bengal</option>
            </select>
            <input type="text" id="zip-code" placeholder="Zip Code" />
          </div>
          <div className="form-group">
            <label htmlFor="cake-details">Cake Details</label>
            <input type="text" id="cake-flavor" placeholder="Cake Flavor" />
            <input
              type="text"
              id="cake-size"
              placeholder="Cake Size (e.g., 1kg, 2kg)"
            />
            <textarea
              id="special-instructions"
              placeholder="Special Instructions"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="delivery-date">Delivery Date</label>
            <div className="input-group option">
              <select id="month">
                <option>Please select a month</option>
              </select>
              <select id="day">
                <option>Please select a day</option>
              </select>
              
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="payment-method">Payment Method</label>
            <select id="payment-method">
              <option value="online">Online</option>
              <option value="cash">Cash</option>
              <option value="card">Card</option>
            </select>
          </div>
          <div className="button-container">
            <button type="submit">Book Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductBuy;
