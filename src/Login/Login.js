import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Login/Login.css"; // Ensure you have the correct CSS path
import Unablepage from "../Component/Pagenotfound/Notfound";
import Data from "../Database/Login.json";
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

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [favorites, setFavorites] = useState([]); // State for favorite selections
  const navigate = useNavigate();

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
      }
      alert(`Registration successful!`);
      setIsLogin(true);
    }
  
  };

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
    alert("Saved data cleared!");
  };

  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  const loadPage = (page, element) => {
    setActivePage(page);
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

        {Object.keys(Data).map((userID) => (
          <div key={userID}>
            <h2 className="d-none">{userID}</h2>
            {Data[userID]
              .filter(
                (User) =>
                  parseFloat(User.Number) === parseInt(mobile) &&
                  User.Password === password
              )
              .map((User, index) => (
                <div key={index}>
                  <>
                    {activePage === "Owner" && (
                      <div className="dashboard-grid">
                        {[
                          {
                            title: User.FullName,
                            value: "Owner/Manager",
                            change: "Full Name",
                            className: "sales",
                          },
                          {
                            title: User.Number,
                            value: "Mobile Number",
                            change: "Registered Mobile Number",
                            className: "orders",
                          },
                          {
                            title: User.Password,
                            value: "Password",
                            change: "Verified Password",
                            className: "visitors",
                          },
                        ].map((stat, index) => (
                          <div
                            key={index}
                            className={`stat-card ${stat.className}`}
                          >
                            <h2>{stat.title}</h2>
                            <p className="stat-value">{stat.value}</p>
                            <p className="stat-change">{stat.change}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                </div>
              ))}
          </div>
        ))}

        {activePage === "dashboard" && (
          <div className="dashboard-grid">
            <PopularProducts />
          </div>
        )}
        {activePage === "ProductDetails" && (
          <>
            if (!product) {<Unablepage />}
            <div className="dashboard-grid">
              <>
                <div className="product-details">
                  <div className="product-images">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="product-info">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <div className="flex">
                      <p className="price mr-5">Rs {product.price} / Month</p>
                      <p className="availability">: {product.availability}</p>
                    </div>
                    <div className="specifications">
                      <ul>
                        <li>Wifi: {product.Wifi}</li>
                        <li>Kitchen: {product.Kitchen}</li>
                        <li>Toilet: {product.Toilet}</li>
                        <li>E-Bill: {product.Bill}</li>
                      </ul>
                    </div>

                    <div className="product-variants">
                      <h3>Address</h3>
                      <ul>
                        {product.variants?.map((variant, index) => (
                          <li key={index}>{variant}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="cta-buttons">
                      <Link to="/ProductBuy" className="buybutton">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-details productpolicy">
                    <div className="shipping-info">
                      <h3>Information</h3>
                      <p>{product.information}</p>
                    </div>

                    <div className="return-policy">
                      <h3>Refund Policy</h3>
                      <p>{product.returnPolicy}</p>
                    </div>

                    <div className="warranty">
                      <h3>Product Warranty</h3>
                      <p>{product.warranty}</p>
                    </div>

                    <div className="payment-options">
                      <h3>Payment Options</h3>
                      <p> {product.paymentOptions}</p>
                    </div>
                  </div>
                  <div className="related-products">
                    <h3>Related Products</h3>
                    <ul>
                      {product.relatedProducts?.map((related, index) => (
                        <li key={index}>
                          {related.name} - ${related.price}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            </div>
          </>
        )}
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
            <p>
              Gain insights into your data with real-time statistics and trends.
            </p>
          </div>
        )}
        {activePage === "Complaint" && (
          <div className="page-content">
            <h2>Complaint Management</h2>
            <p>Efficiently track and resolve customer complaints with ease.</p>
          </div>
        )}
        {activePage === "Service" && (
          <div className="page-content">
            <h2>Our Services</h2>
            <p>Explore and manage the services offered by our platform.</p>
          </div>
        )}
        {![
          "Owner",
          "dashboard",
          "Anylatics",
          "Chart",
          "Complaint",
          "Service",
        ].includes(activePage) && <NotFound />}
      </div>
    );
  };

  const location = useLocation();
  const product = location.state?.product; // Get product data from navigation

  return (
    <>
      <div   className="Adminfix" id="Adminfix">
        {Object.keys(Data).map((userID) => (
          <div key={userID}>
            <h2 className="d-none">{userID}</h2>
            {Data[userID]
              .filter(
                (User) =>
                  parseFloat(User.Number) === parseInt(mobile) &&
                  User.Password === password
              )
              .map((User, index) => (
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
                              {User.FullName}
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
                              <FaBed
                                className="text-purple-500"
                                icon={<FaBed />}
                              />
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
                            onClick={toggleSidebar}
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
              ))}
          </div>
        ))}
      </div>

      <div className="auth-box">
        <h2 className="auth-title">User Login</h2>
        <form className="auth-form"  >
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

          <button  onClick={handleSubmit} type="submit" className="auth-button">
            Sign in
          </button>

          <p className="auth-toggle">
            Don't have an account?{" "}
            <Link to="/Signup">
            <button className="auth-link" >
              Sign up
            </button></Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
