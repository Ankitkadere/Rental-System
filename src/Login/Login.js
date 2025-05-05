 
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Login/Login.css"; // Ensure you have the correct CSS path
import Unablepage from "../Component/Pagenotfound/Notfound";
import { BsCartCheck } from "react-icons/bs";
import "../Login/Admin.css";
import { FaBars } from "react-icons/fa";
import PopularProducts from "../Pages/Productlist/productlist";
import "../Pages/Productlist/Productlist.css";
import { FaBed } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { PiCurrencyInrFill } from "react-icons/pi";
import { IoSettings } from "react-icons/io5";
import NotFound from "../Component/Pagenotfound/Notfound";
import "../Login/Admin.css";
import { GrServices } from "react-icons/gr";
import Bigproducts from "../Admin/Big Product/Bigproduct";
import { Link } from "react-router-dom"; // Import useLocation
import AddRoomForm from "../Admin/Rooms/Addproducts";
import Spinner from "react-bootstrap/Spinner";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [favorites, setFavorites] = useState([]); // State for favorite selections
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const [roomList, setRoomList] = useState([]); // <- For displaying available rooms

  const product = location.state?.product;

  const [room, setRoom] = useState({
    Unique: "",
    Mob: "",
    Image: "",
    Tittle: "",
    Description: "",
    Category: "",
    Availability: "",
    Wifi: "",
    Kitchen: "",
    Toilet: "",
    Bill: "",
    Price: "",
    OldPrice: "",
    Rating: "",
    Brand: "",
    Information: "",
    ReturnPolicy: "",
    PaymentOptions: "",
    Address: "",
    State: "",
    City: "",
    Pincode: "",
    RoomType: "",
  });

  const generateRandomValue = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  useEffect(() => {
    const randomValue = generateRandomValue();
    setRoom((prev) => ({ ...prev, Unique: randomValue }));
  }, []);
  // Fetching Users Data
  useEffect(() => {
    const savedMobile = localStorage.getItem("mobile");
    const savedPassword = localStorage.getItem("password");

    if (savedMobile && savedPassword) {
      setMobile(savedMobile);
      setPassword(savedPassword);
    }

    const fetchAllUsers = async () => {
      try {
        const res = await fetch("https://sheetdb.io/api/v1/wukwgcz66x0es");
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        <Unablepage />;
        setLoading(false);
      }
    };

    fetchAllUsers();
  }, []);

  const existingUser = Data.find((user) => user.Mobile === mobile);

  const handleClearLocalStorage = () => {
    localStorage.removeItem("mobile");
    localStorage.removeItem("password");
    setMobile("");
    setPassword("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (document.getElementById("remember_me")?.checked) {
      localStorage.setItem("mobile", mobile);
      localStorage.setItem("password", password);
      setMobile(mobile);
      setPassword(password);
      document.getElementById("Adminfix").style.display = "block";
    } else if (isForgotPassword) {
      alert(`Password reset link sent to ${mobile}`);
      setIsForgotPassword(false);
      document.getElementById("Adminfix").style.display = "none";
    } else if (isLogin) {
      document.getElementById("Adminfix").style.display = "block";
    } else if (existingUser) {
      alert("Already Exist");
      document.getElementById("Adminfix").style.display = "none";
    } else {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        document.getElementById("Adminfix").style.display = "none";
        return;
      }
      alert(`Registration successful!`);
      setIsLogin(true);
    }
  };

  // Optional: Filter based on search input
  const userData = Array.isArray(Data)
    ? Data.filter((user) => parseInt(user.Mobile) === parseInt(mobile))
    : [];

  const handleFavoriteChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setFavorites(selectedOptions);
  };

  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarHidden, setSidebarHidden] = useState(false);

  const handleClearLocal = () => {
    localStorage.removeItem("mobile");
    localStorage.removeItem("password");
  };

  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  const loadPage = (page, element) => {
    setActivePage(page);
  };

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setRoom((prev) => ({ ...prev, [name]: imageUrl }));
      }
    } else {
      setRoom((prev) => ({ ...prev, [name]: value }));
    }
  };
  // ✅ Place this here - before any early returns
  const currentUser = Array.isArray(userData)
    ? [...userData]
        .reverse()
        .find(
          (user) =>
            parseInt(user.Mobile) === parseInt(mobile) &&
            user.Password === password
        )
    : null;

  useEffect(() => {
    if (currentUser) {
      setRoom((prev) => ({
        ...prev,
        Mob: currentUser.Mobile || "",
        Address: currentUser.Address || "",
        City: currentUser.City || "",
        State: currentUser.State || "",
        Pincode: currentUser.Pincode || "",
      }));
    }
  }, [currentUser]);

  if (loading) return <Spinner animation="border m-auto" variant="primary" />;
  if (error) return <p>{error}</p>;

  const PopularProducts = () => { 
  
    useEffect(() => {
      const fetchRooms = async () => {
        try {
          const response = await fetch("https://sheetdb.io/api/v1/cqydgetbk3ekl");
          const data = await response.json();
          const filteredRooms = data.filter(
            (room) => parseInt(room.Mob) === parseInt(9174750864)
          );
          setRoom(filteredRooms);
          
        } catch (error) {
          console.error("Error fetching rooms:", error);
        }
      };
  
      fetchRooms();
    }, []);
  
  
  }
  const handleUpdate = async (e) => {
    e.preventDefault();
    const { Image, ...formData } = room;
    const payload = { data: [formData] };

    try {
      const response = await fetch("https://sheetdb.io/api/v1/cqydgetbk3ekl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();
      console.log("API Response:", responseData);

      if (response.ok) {
        alert("Room added successfully!");
        
        setRoom({
          Unique: "",
          Mob: "",
          Image: "",
          Tittle: "",
          Description: "",
          Category: "",
          Availability: "",
          Wifi: "",
          Kitchen: "",
          Toilet: "",
          Bill: "",
          Price: "",
          OldPrice: "",
          Rating: "",
          Brand: "",
          Information: "",
          ReturnPolicy: "",
          PaymentOptions: "",
          Address: "",
          State: "",
          City: "",
          Pincode: currentUser.Pincode,
          RoomType: "",
        });
      } else {
        alert("Failed to send data.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Submission failed. Please try again.");
    }
 
    
    const handleNavigate = (product) => {
      navigate("/details", {
        state: {
          room,
          mobile,
          password,
          name,
          favorites,
        },
      });
    };
  };

  const renderContent = () => {
    return (
      <div className="content-wrapper">
        <div className="header">
          <div>
            <button className="menu-toggle flex " onClick={toggleSidebar}>
              <FaBars className="tgicon" />{" "}
              <h1 className="page-title">{activePage}</h1>
            </button>
          </div>
          <div className="user-info">
            <img
              className="user-avatar"
              src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
              alt="User"
            />
            <br></br>
          </div>
        </div>
        <hr />

        {currentUser && activePage === "Owner" && (
          <div className="dashboard-grid">
            {[
              {
                title: currentUser.Name,
                value: "Owner/Manager",
                change: "Full Name",
                className: "sales",
              },
              {
                title: currentUser.Mobile,
                value: "Mobile Number",
                change: "Registered Mobile Number",
                className: "orders",
              },
              {
                title: currentUser.Password,
                value: "Password",
                change: "Verified Password",
                className: "visitors",
              },
              {
                title: currentUser.Address,
                value: "Address",
                change: "Location",
                className: "sales",
              },
              {
                title: currentUser.State,
                value: "State",
                change: "Registered State",
                className: "orders",
              },
              {
                title: currentUser.City,
                value: "City",
                change: "Verified City",
                className: "visitors",
              },
              {
                title: currentUser.Pincode,
                value: "Pin Code",
                change: "Registered Pincode",
                className: "orders",
              },
              {
                title: currentUser.FavoriteType,
                value: "Favorite Type",
                change: "User Preference",
                className: "visitors",
              },
            ].map((stat) => (
              <div className={`stat-card ${stat.className}`}>
                <h2>{stat.title}</h2>
                <p className="stat-value">{stat.value}</p>
                <p
                  onClick={() => {
                    loadPage("EditProfile");
                  }}
                  className="stat-change"
                >
                  {stat.change}
                </p>
              </div>
            ))}
          </div>
        )}

        {activePage === "dashboard" && (
          <div className="dashboard-grid">
            <PopularProducts />
 
             
                <div className="popularproducts">
                  <h2>Available Rooms</h2>
                  <div className="product-list">
                    {roomList.length === 0 ? (
                      <p>No rooms found.</p>
                    ) : (
                      roomList.map((room, index) => (
                        <div className="card" key={index}>
                          <span className="badge badge-hot">Rent</span>
                          {room.Image && (
                            <img
                              src={room.Image}
                              alt={room.Tittle}
                              className="product-image"
                              style={{ cursor: "pointer" }}
                              
                            />
                          )}
                        
                          <h2 className="text-lg font-semibold">{room.Tittle}</h2>
                          <div className="text-sm text-gray-500">{room.Category}</div>
                          <div className="flex items-center mb-0">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={
                                  i < parseFloat(room.Rating || 0)
                                    ? "text-yellow-500"
                                    : "text-gray-300"
                                }
                              >
                                ★
                              </span>
                            ))}
                            <span className="ml-1 text-gray-600">
                              ({room.Rating || 0})
                            </span>
                          </div>
                      
                          <div className="text-sm text-gray-500 mb-[-5px] mt-[-5px] additional">
                            By {room.Brand}
                          </div>
                          <div className="flex items-center justify-between adddown">
                            <div className="flex">
                              <div className="text-lg font-bold text-green-600">
                                ₹{room.Price}
                              </div>
                              <div className="text-sm text-gray-500 line-through oldpeice">
                                {room.OldPrice}
                              </div>
                            </div>
                            <button
                            
                              className="button"
                            >
                              View
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
        
          </div>
        )}
        {activePage === "ProductDetails" && <></>}
        {activePage === "Anylatics" && (
          <div className="dashboard-grid">
            {[
              {
                title: "Weekly Sales",
                value: "$150,000",
                change: "Increased by 60%",
                className: "sales",
              },
              {
                title: "Weekly Orders",
                value: "45,633",
                change: "Decreased by 10%",
                className: "orders",
              },
              {
                title: "Visitors Online",
                value: "95,574",
                change: "Increased by 5%",
                className: "visitors",
              },
            ].map((stat, index) => (
              <div key={index} className={`stat-card ${stat.className}`}>
                <h2>{stat.title}</h2>
                <p className="stat-value">{stat.value}</p>
                <p className="stat-change">{stat.change}</p>
              </div>
            ))}
          </div>
        )}
        {activePage === "Chart" && (
          <div className="page-content">
            <h2>Analytics Overview</h2>
            <div className="dashboard-grid">
              {[
                {
                  title: "Weekly Sales",
                  value: "$150,000",
                  change: "Increased by 60%",
                  className: "sales",
                },
                {
                  title: "Weekly Orders",
                  value: "45,633",
                  change: "Decreased by 10%",
                  className: "orders",
                },
                {
                  title: "Visitors Online",
                  value: "95,574",
                  change: "Increased by 5%",
                  className: "visitors",
                },
              ].map((stat, index) => (
                <div key={index} className={`stat-card ${stat.className}`}>
                  <h2>{stat.title}</h2>
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-change">{stat.change}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {activePage === "Complaint" && (
          <div className="page-content">
            <h2>Analytics Overview</h2>
            <div className="dashboard-grid">
              {[
                {
                  title: "Weekly Sales",
                  value: "$150,000",
                  change: "Increased by 60%",
                  className: "sales",
                },
                {
                  title: "Weekly Orders",
                  value: "45,633",
                  change: "Decreased by 10%",
                  className: "orders",
                },
                {
                  title: "Visitors Online",
                  value: "95,574",
                  change: "Increased by 5%",
                  className: "visitors",
                },
              ].map((stat, index) => (
                <div key={index} className={`stat-card ${stat.className}`}>
                  <h2>{stat.title}</h2>
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-change">{stat.change}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {activePage === "Service" && (
          <div className="page-content">
            <h2>Analytics Overview</h2>
            <div className="dashboard-grid">
              {[
                {
                  title: "Weekly Sales",
                  value: "$150,000",
                  change: "Increased by 60%",
                  className: "sales",
                },
                {
                  title: "Weekly Orders",
                  value: "45,633",
                  change: "Decreased by 10%",
                  className: "orders",
                },
                {
                  title: "Visitors Online",
                  value: "95,574",
                  change: "Increased by 5%",
                  className: "visitors",
                },
              ].map((stat, index) => (
                <div key={index} className={`stat-card ${stat.className}`}>
                  <h2>{stat.title}</h2>
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-change">{stat.change}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {activePage === "AddRoom" && (
          <div className="page-content">
            <div className="form-wrapper">
              <form onSubmit={handleUpdate} className="room-form">
                {/* Hidden Field */}
                <input
                  type="text"
                  name="Unique"
                  value={room.Unique}
                  onChange={handleUpChange}
                  className="d-none"
                  readOnly
                />

                {/* Room ID */}

                <input
                  type="text"
                  name="Mob"
                  value={room.Mob}
                  onChange={handleUpChange}
                  placeholder="Enter Room ID"
                  required
                  className="d-none"
                />

                {/* Room Type */}

                <select
                  name="RoomType"
                  value={room.RoomType}
                  onChange={handleUpChange}
                  required
                >
                  <option value="" disabled>
                    Select Room Type
                  </option>
                  {[
                    "Single Room",
                    "Double Room",
                    "Deluxe Room",
                    "Student Room",
                    "Hostel",
                    "Suite",
                    "Shared Room",
                    "Penthouse",
                    "Luxury Villa",
                    "Family Room",
                    "Guest House",
                    "Other",
                  ].map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>

                {/* Image Upload */}
                <label>Upload Room Image</label>
                <input
                  type="text"
                  name="Image"
                  accept="image/*"
                  onChange={handleUpChange}
                  required
                  placeholder="Hosted image URL"
                />
                {room.Image && (
                  <img
                    src={room.Image}
                    alt="Preview"
                    className="image-preview"
                  />
                )}

                {/* Inputs */}

                <select
                  name="Tittle"
                  value={room.Tittle}
                  onChange={handleUpChange}
                  required
                >
                  <option value="" disabled>
                    Select a room title
                  </option>
                  <option value="Single Room">Single Room</option>
                  <option value="Double Room">Double Room</option>
                  <option value="Studio Apartment">Studio Apartment</option>
                  <option value="1 BHK">1 BHK</option>
                  <option value="2 BHK">2 BHK</option>
                  <option value="3 BHK">3 BHK</option>
                  <option value="PG (Paying Guest)">PG (Paying Guest)</option>
                  <option value="Shared Room">Shared Room</option>
                  <option value="Guest House">Guest House</option>
                  <option value="Hostel Room">Hostel Room</option>
                  <option value="Luxury Suite">Luxury Suite</option>
                </select>

                <select
                  name="Description"
                  value={room.Description}
                  onChange={handleUpChange}
                >
                  <option
                    value=" Multiple beds in one room; suitable for groups, students, or
                    budget travelers sharing rent."
                    disabled
                  >
                    Select A Room Title
                  </option>
                  <option
                    value="A private room for one person featuring basic amenities,
                    perfect for solo renters or short stays."
                  >
                    A private room for one person featuring basic amenities,
                    perfect for solo renters or short stays.
                  </option>
                  <option
                    value=" Designed for two people with shared or separate beds,
                    suitable for couples or roommates."
                  >
                    Designed for two people with shared or separate beds,
                    suitable for couples or roommates.
                  </option>
                  <option
                    value="Spacious room with elegant interiors, upgraded amenities,
                    and often a great view or nature."
                  >
                    Spacious room with elegant interiors, upgraded amenities,
                    and often a great view or nature.
                  </option>
                  <option
                    value=" Compact, affordable setup with a study area, Wi-Fi, and
                    furniture, ideal for students."
                  >
                    Compact, affordable setup with a study area, Wi-Fi, and
                    furniture, ideal for students.
                  </option>
                  <option
                    value="Budget-friendly shared accommodation with common bathrooms,
                    perfect for travelers or students."
                  >
                    Budget-friendly shared accommodation with common bathrooms,
                    perfect for travelers or students.
                  </option>
                  <option
                    value="Premium accommodation with separate bedroom and living
                    areas, luxurious decor, and extras like a minibar."
                  >
                    Premium accommodation with separate bedroom and living
                    areas, luxurious decor, and extras like a minibar.
                  </option>
                  <option
                    value=" Multiple beds in one room; suitable for groups, students, or
                    budget travelers sharing rent."
                  >
                    Multiple beds in one room; suitable for groups, students, or
                    budget travelers sharing rent.
                  </option>
                  <option
                    value="High-end unit on the top floor, often with a private
                    terrace, modern design, and panoramic views."
                  >
                    High-end unit on the top floor, often with a private
                    terrace, modern design, and panoramic views.
                  </option>
                  <option
                    value="Standalone property with garden, parking, high-end
                    furnishings, and full privacy."
                  >
                    Standalone property with garden, parking, high-end
                    furnishings, and full privacy.
                  </option>
                  <option
                    value="Spacious room or suite suitable for a family, often includes
                    multiple beds and child-friendly features."
                  >
                    Spacious room or suite suitable for a family, often includes
                    multiple beds and child-friendly features.
                  </option>
                  <option
                    value="Home-like accommodation with privacy and services, ideal for
                    extended stays or visiting guests."
                  >
                    Home-like accommodation with privacy and services, ideal for
                    extended stays or visiting guests.
                  </option>
                  <option value="Custom or uncommon accommodation not listed here; describe the type and features in detail if possible.">
                    Custom or uncommon accommodation not listed here; describe
                    the type and features in detail if possible.
                  </option>
                </select>

                <select
                  name="Rating"
                  value={room.Rating}
                  onChange={handleUpChange}
                  placeholder="Rating"
                  required
                >
                  <option value="" disabled>
                    Select Rating
                  </option>
                  <option value="1">⭐ 1 - Poor</option>
                  <option value="2">⭐⭐ 2 - Fair</option>
                  <option value="3">⭐⭐⭐ 3 - Good</option>
                  <option value="4">⭐⭐⭐⭐ 4 - Very Good</option>
                  <option value="5">⭐⭐⭐⭐⭐ 5 - Excellent</option>
                </select>

                <select
                  name="Brand"
                  value={room.Brand}
                  onChange={handleUpChange}
                  className="d-none"
                >
                  <option value="Best | Level 3">Best | Level 3</option>
                  {[" Better | Level 2", "Good | Level 1"].map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                  <lebel>Information</lebel>
                <select
                  name="Information"
                  value={room.Information}
                  onChange={handleUpChange}
                  required
                  placeholder="Information"
                >
                  <option value="Violence">Violence</option>
                  {[" No Violence"].map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  name="Category"
                  value={room.Category}
                  onChange={handleUpChange}
                  placeholder="Category"
                  className="d-none"
                />
                <lebel>Availability</lebel>
                <select
                  name="Availability"
                  value={room.Availability}
                  onChange={handleUpChange}
                  required
                  placeholder="Availability"
                >
                  <option value="YES">YES</option>
                  {["NO"].map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>

                <label>Wifi Info</label>
                <select
                  name="Wifi"
                  value={room.Wifi}
                  onChange={handleUpChange}
                  required
                  placeholder="Wifi"
                >
                  <option disabled value="nor">
                    Wifi
                  </option>
                  <option value="YES">YES</option>
                  {["NO"].map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <label>Kitchen Info</label>
                <select
                  name="Kitchen"
                  value={room.Kitchen}
                  onChange={handleUpChange}
                  required
                >
                  <option value="YES">YES</option>
                  {["NO"].map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>

                <label>Toilet Info</label>
                <select
                  name="Toilet"
                  value={room.Toilet}
                  required
                  onChange={handleUpChange}
                >
                  <option value="YES">YES</option>
                  {["NO"].map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>

                <label>Bill Info</label>
                <select
                  name="Bill"
                  value={room.Bill}
                  required
                  onChange={handleUpChange}
                >
                  <option value="YES">YES</option>
                  {["NO"].map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>

                <label>Money Return Policy</label>
                <select
                  name="ReturnPolicy"
                  value={room.ReturnPolicy}
                  onChange={handleUpChange}
                  required
                >
                  <option value="YES">YES</option>
                  {["3 Day's", "7 Day's", "10 Day's", "15 Day's", "NO"].map(
                    (state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    )
                  )}
                </select>

                <label>Payment Options</label>

                <select
                  name="PaymentOptions"
                  value={room.PaymentOptions}
                  onChange={handleUpChange}
                  required
                >
                  <option value="Online / Cash">Online / Cash</option>
                  {["Online", "Cash", "Card"].map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>

                <label>Old Price / Monthly</label>
                <input
                  type="number"
                  name="OldPrice"
                  value={room.OldPrice}
                  onChange={handleUpChange}
                  placeholder="Old Price"
                />
                <label>Current Price / Monthly</label>
                <input
                  type="number"
                  name="Price"
                  value={room.Price}
                  onChange={handleUpChange}
                  placeholder="Current Price"
                  required
                />

                <input
                  type="text"
                  name="Address"
                  value={room.Address}
                  onChange={handleUpChange}
                  placeholder="Address"
                  required
                  className="d-none"
                />

                <input
                  type="text"
                  name="City"
                  value={room.City}
                  required
                  onChange={handleUpChange}
                  placeholder="City"
                />

                <input
                  type="number"
                  required
                  name="Pincode"
                  value={room.Pincode}
                  onChange={handleUpChange}
                  placeholder="Pincode"
                />

                <input
                  type="text"
                  name="State"
                  value={room.State}
                  required
                  onChange={handleUpChange}
                  placeholder="State"
                />

                <button type="submit" className="submit-btn">
                  Add Room
                </button>
              </form>
            </div>
          </div>
        )}
        {![
          "Owner",
          "dashboard",
          "Anylatics",
          "Chart",
          "Complaint",
          "Service",
          "AddRoom",
          "EditProfile",
        ].includes(activePage) && <NotFound />}
      </div>
    );
  };

  return (
    <>
      <div className="Adminfix" id="Adminfix">
        {Data.filter(
          (user) =>
            parseInt(user.Mobile) === parseInt(mobile) &&
            user.Password === password
        ).map((user, index) => (
          <div key={index}>
            <h2 className="d-none">{user.Name}</h2>
            <div key={index}>
              <>
                <div
                  className="flex h-screen w-screen "
                  id="main-screen"
                  key={index}
                >
                  {/* Sidebar */}
                  <div
                    className={`sidebar w-64 bg-white shadow-md absolute h-full ${
                      sidebarHidden ? "sidebar-hidden" : ""
                    }`}
                    id="sidebar"
                  >
                    <div className="p-4 flex items-center">
                      <span className="ml-2 text-xl font-bold text-blue-800">
                        BEST ROOM
                      </span>
                    </div>
                    <hr></hr>
                    <div
                      className=" flex items-center"
                      onClick={() => {
                        loadPage("Owner");
                        toggleSidebar();
                      }}
                    >
                      <img
                        alt="User profile"
                        className="rounded-full"
                        height="50"
                        src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                        width="50"
                      />
                      <div className="nameheader">
                        <p className="text-blue-900 mt-3 ownername">
                          {user.Name}
                        </p>
                      </div>
                    </div>
                    <nav className="mt-4">
                      <ul>
                        <li
                          className={`flex items-center p-2 text-gray-700 hover:bg-gray-200 cursor-pointer ${
                            activePage === "dashboard" ? "active" : ""
                          }`}
                          onClick={() => {
                            loadPage("dashboard");
                            toggleSidebar();
                          }}
                        >
                          <FaBed className="text-purple-500" icon={<FaBed />} />
                          <span className="ml-2">Dashboard</span>
                        </li>
                        <li
                          className={`flex items-center p-2 text-gray-700 hover:bg-gray-200 cursor-pointer ${
                            activePage === "Anylatics" ? "active" : ""
                          }`}
                          onClick={() => {
                            loadPage("Anylatics");
                            toggleSidebar();
                          }}
                        >
                          <FaUsers
                            className="text-purple-500"
                            icon={<FaUsers />}
                          />
                          <span className="ml-2">Anylatics</span>
                        </li>
                        <li
                          className={`flex items-center p-2 text-gray-700 hover:bg-gray-200 cursor-pointer ${
                            activePage === "Anylatics" ? "active" : ""
                          }`}
                          onClick={() => {
                            loadPage("Chart");
                            toggleSidebar();
                          }}
                        >
                          <FaUsers
                            className="text-purple-500"
                            icon={<FaUsers />}
                          />
                          <span className="ml-2">Chart</span>
                        </li>
                        <li
                          className={`flex items-center p-2 text-gray-700 hover:bg-gray-200 cursor-pointer ${
                            activePage === "complaint" ? "active" : ""
                          }`}
                          onClick={() => {
                            loadPage("Complaint");
                            toggleSidebar();
                          }}
                        >
                          <PiCurrencyInrFill
                            className="text-purple-500"
                            icon={<PiCurrencyInrFill />}
                          />
                          <span className="ml-2">Icons</span>
                        </li>
                        <li
                          className={`flex items-center p-2 text-gray-700 hover:bg-gray-200 cursor-pointer ${
                            activePage === "Service" ? "active" : ""
                          }`}
                          onClick={() => {
                            loadPage("Service");
                            toggleSidebar();
                          }}
                        >
                          <GrServices
                            className="text-purple-500"
                            icon={<GrServices />}
                          />
                          <span className="ml-2">Service</span>
                        </li>
                      </ul>
                    </nav>
                    <div className="p-4">
                      <button
                        className="auth-button bot"
                        onClick={() => {
                          loadPage("AddRoom");
                          toggleSidebar();
                        }}
                      >
                        + ADD ROOM
                      </button>
                      <br></br>
                      {isLogin && (
                        <>
                          <br></br>
                          <button
                            type="button"
                            className="auth-button botout"
                            onClick={handleClearLocalStorage} // Removed ()
                          >
                            Log Out !
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  {/* Main Content */}
                  <div
                    className={`flex-1 p-6 content ${
                      sidebarHidden ? "content-expanded" : "ml-64"
                    }`}
                    id="mainContent"
                  >
                    {renderContent()}
                  </div>
                </div>
              </>
            </div>
            ))
          </div>
        ))}
      </div>

      <div className="auth-box">
        <h2 className="auth-title">User Login</h2>
        <form className="auth-form">
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

          <div className="auth-options">
            <div className="checkbox-group">
              <input type="checkbox" id="remember_me" />
              <label htmlFor="remember_me"> Remember me</label>
            </div>
            <button type="button" className="auth-link">
              Forgot your password?
            </button>
          </div>

          <button onClick={handleSubmit} type="submit" className="auth-button">
            Sign in
          </button>

          <p className="auth-toggle">
            Don't have an account?{" "}
            <Link to="/Signup">
              <button className="auth-link">Sign up</button>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
