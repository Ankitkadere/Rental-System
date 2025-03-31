import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [favoriteType, setFavoriteType] = useState("Food");
  const [state, setState] = useState("Maharashtra");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userData = {
      fullName,
      mobile,
      password,
      favoriteType,
      state,
      city,
      pincode,
      address,
    };

    console.log("User Data:", userData);
    alert("Registration Successful!");
  };

  return (
    <div className="auth-box">
      <h2 className="auth-title">User Registration</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Enter your mobile number"
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            pattern="[0-9]{10}"
            maxLength="10"
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="********"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

     

        {/* Address */}
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* State Dropdown */}
        <div>
          <label htmlFor="state">State</label>
          <select
            id="state"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="Maharashtra">Maharashtra</option>
            <option value="Delhi">Delhi</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Gujarat">Gujarat</option>
          </select>
        </div>

        {/* City */}
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter your city"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        {/* Pincode */}
        <div>
          <label htmlFor="pincode">Pincode</label>
          <input
            type="number"
            id="pincode"
            name="pincode"
            placeholder="123456"
            required
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>

   {/* Favorite Type */}
   <div>
          <label htmlFor="favoriteType">Favorite Type</label>
          <select
            id="favoriteType"
            name="favoriteType"
            value={favoriteType}
            onChange={(e) => setFavoriteType(e.target.value)}
          >
            <option value="Food">Food</option>
            <option value="City">City</option>
            <option value="Travel">Travel</option>
            <option value="Fashion">Fashion</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="auth-button">
          Sign Up
        </button>

        {/* Already have an account? */}
        <p className="auth-toggle">
          Already have an account?{" "}
          <Link to="/Login">
            <button className="auth-link">Sign in</button>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Registration;
