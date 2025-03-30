<<<<<<< HEAD
import React from "react";
import Login from "./Login.js";
 
 
const register = () => {
  return (
     <>
     <Login/>
     </>
  );
};

export default register;
=======
import { useState, useEffect } from "react";
import "../Login/Login.css"; // Ensure you have the correct CSS path
import Unablepage from "../Component/Pagenotfound/Notfound";
import Data from "../Database/Login.json";
import "../Login/Admin.css";
import "../Pages/Productlist/Productlist.css";
import { FaBed } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { PiCurrencyInrFill } from "react-icons/pi";
import "../Login/Admin.css";
import { Link } from "react-router-dom"; // Import useLocation

const Registration = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const savedMobile = localStorage.getItem("mobile");
    const savedPassword = localStorage.getItem("password");

    if (savedMobile && savedPassword) {
      setMobile(savedMobile);
      setPassword(savedPassword);
    }
  }, []);

  const existingUser = Data.Users.find((User) => User.Number === mobile);

  const handleClearLocalStorage = () => {
    localStorage.removeItem("mobile");
    localStorage.removeItem("password");
    setMobile("");
    setPassword("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (document.getElementById("remember_me").checked) {
      localStorage.setItem("mobile", mobile);
      localStorage.setItem("password", password);
      setMobile(mobile);
      setPassword(password);
    } else if (isForgotPassword) {
    
      setIsForgotPassword(false);
    } else if (isLogin) {
    } else if (existingUser) {
      alert("Already Exist");
    } else {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
      }
      alert(`Registration successful!`);
      setIsLogin(true);
    }
  };

  return (
    <>
      <div className="auth-box">
        <h2 className="auth-title">User Registration</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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

          <div>
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              placeholder="********"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="auth-button">
            Sign up
          </button>

          <p className="auth-toggle">
            Already have an account? 
            <Link to={"/Login"}>
              <button className="auth-link">Sign in</button>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Registration;
>>>>>>> c807e00 (Initial commit or update)
