import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import "../Component/Tosts/Pops.css";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
 
const Registration = () => {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [favoriteType, setFavoriteType] = useState("Food");
  const [state, setState] = useState("Madhya Pradesh");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();
  const [data, setData] = useState({
    date: new Date().toISOString().split("T")[0],
    Name: "",
    Mobile: "",
    Password: "",
    ConfirmPassword: "",
    Address: "",
    State: "",
    City: "",
    Pincode: "",
    FavoriteType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.Password !== data.ConfirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("https://sheetdb.io/api/v1/wukwgcz66x0es", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Data submitted successfully!");

        // Show the success message and hide the form
 
        document.getElementById("authbox").style.display = "none";
        document.getElementById("golog").style.display = "block";
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
    
      <div className="containerregister" id="golog">
     
        <div className="card">
          <div className="icon-container">
            <FaCheck className="check-icon" />
          </div>
          <h1 className="title">Registration Successful!</h1>
          <p className="message">
            Thank you for registering. Your account has been successfully
            created.
          </p>
          <a href="/Login" className="dashboard-link">
            Go to Login
          </a>
        </div>
      </div>

      <div className="auth-box" id="authbox">
        <form onSubmit={handleSubmit} className="auth-form">
          <h2 className="auth-title">User Registration</h2>

          <div>
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              name="Name"
              className="form-control"
              value={data.Name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              name="Mobile"
              value={data.Mobile}
              onChange={handleChange}
              required
              minLength="10"
            />
          </div>

          <div>
            <label htmlFor="pssword">Password</label>
            <input
              type="password"
              name="Password"
              value={data.Password}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="ConfirmPassword"
              value={data.ConfirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="Address">Address</label>
            <input
              type="text"
              name="Address"
              value={data.Address}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="State">State</label>
            <select
              name="State"
              value={data.State}
              onChange={handleChange}
              required
            >
              <option value="">-- Select State --</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>

              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadra and Nagar Haveli and Daman and Diu">
                Dadra and Nagar Haveli and Daman and Diu
              </option>
              <option value="Delhi">Delhi</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Ladakh">Ladakh</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>

              {/* Add all other states and UTs as needed */}
            </select>
          </div>

          <div>
            <label htmlFor="City">City</label>
            <input
              type="text"
              name="City"
              className="form-control"
              value={data.City}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="Pincode">Pincode</label>
            <input
              type="number"
              name="Pincode"
              className="form-control"
              value={data.Pincode}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="FavoriteTpye">Favorite Type</label>
            <select
              name="FavoriteType"
              className="form-control"
              value={data.FavoriteType}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Type --</option>
              <option value="Food">Food</option>
              <option value="City">City</option>
              <option value="Travel">Travel</option>
              <option value="Fashion">Fashion</option>
            </select>
          </div>

          <div className="text-center">
            <button type="submit" className="auth-button">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;
