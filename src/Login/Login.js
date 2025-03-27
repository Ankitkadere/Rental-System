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
    alert("Saved data cleared!");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    

    if (document.getElementById("remember_me").checked) {
      localStorage.setItem("mobile", mobile);
      localStorage.setItem("password", password);
      setMobile(mobile);
      setPassword(password);
    }

    if (isForgotPassword) {
      alert(`Password reset link sent to ${mobile}`);
      setIsForgotPassword(false);
    } else if (isLogin) {
      alert("Alll Good");
    } else if (existingUser) {
      alert("Already Exist");
    } else {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
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
  const [user, setUser] = useState(null);
  const location = useLocation();

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
    switch (activePage) {
      case "dashboard":
        return (
          <>
            <div className="flex justify-between items-center mb-6 adminhead  setall">
              <div className="flex items-center">
                <button
                  className="mr-4 p-2 bg-gray-200 rounded-md"
                  onClick={toggleSidebar}
                ></button>
                <h1 className="text-2xl font-bold text-gray-700">Dashboard</h1>
              </div>
              <div className="flex items-center ">
                <input
                  className="border rounded-md p-2 mr-4 d-none"
                  placeholder="Search projects"
                  type="text"
                />
                <img
                  alt="User profile"
                  className="rounded-full"
                  height="40"
                  src="https://placehold.co/40x40"
                  width="40"
                />
              </div>
            </div>
            <hr></hr>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-medium">Weekly Sales</h2>
                <p className="text-2xl font-bold">$ 15,0000</p>
                <p className="text-sm">Increased by 60%</p>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-medium">Weekly Orders</h2>
                <p className="text-2xl font-bold">45,6334</p>
                <p className="text-sm">Decreased by 10%</p>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-medium">Visitors Online</h2>
                <p className="text-2xl font-bold">95,5741</p>
                <p className="text-sm">Increased by 5%</p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <PopularProducts />
              </div>
            </div>
          </>
        );
      case "Anylatics":
        return (
          <>
            <div className="flex justify-between items-center mb-6 setall">
              <div className="flex items-center">
                <button
                  className="mr-4 p-2 bg-gray-200 rounded-md"
                  onClick={toggleSidebar}
                ></button>
                <h1 className="text-2xl font-bold text-gray-700">Anylatics</h1>
              </div>
              <div className="flex items-center">
                <input
                  className="border rounded-md p-2 mr-4 d-none"
                  placeholder="Search projects"
                  type="text"
                />
                <img
                  alt="User profile"
                  className="rounded-full"
                  height="40"
                  src="https://placehold.co/40x40"
                  width="40"
                />
              </div>
            </div>
            <hr></hr>
            <h1 className="text-2xl font-bold text-gray-700 mb-6">
              Basic UI Elements
            </h1>
            <p className="text-gray-700">Content for Basic UI Elements page.</p>
          </>
        );
      case "Complaint":
        return (
          <>
            <div className="flex justify-between items-center mb-6 setall">
              <div className="flex items-center">
                <button
                  className="mr-4 p-2 bg-gray-200 rounded-md"
                  onClick={toggleSidebar}
                ></button>
                <h1 className="text-2xl font-bold text-gray-700">Complaint</h1>
              </div>
              <div className="flex items-center">
                <input
                  className="border rounded-md p-2 mr-4 d-none"
                  placeholder="Search projects"
                  type="text"
                />
                <img
                  alt="User profile"
                  className="rounded-full"
                  height="40"
                  src="https://placehold.co/40x40"
                  width="40"
                />
              </div>
            </div>
            <hr></hr>
            <h1 className="text-2xl font-bold text-gray-700 mb-6">Icons</h1>
            <p className="text-gray-700">Content for Icons page.</p>
          </>
        );
      case "Service":
        return (
          <>
            {" "}
            <div className="flex justify-between items-center mb-6 fix setall" >
              <div className="flex items-center">
                <button
                  className="mr-4 p-2 bg-gray-200 rounded-md"
                  onClick={toggleSidebar}
                ></button>
                <h1 className="text-2xl font-bold text-gray-700">Services</h1>
              </div>
              <div className="flex items-center">
                <input
                  className="border rounded-md p-2 mr-4 d-none"
                  placeholder="Search projects"
                  type="text"
                />
                <img
                  alt="User profile"
                  className="rounded-full"
                  height="40"
                  src="https://placehold.co/40x40"
                  width="40"
                />
              </div>
            </div>
            <hr></hr>
            <h1 className="text-2xl font-bold text-gray-700 mb-6">Forms</h1>
            <p className="text-gray-700">Content for Forms page.</p>
          </>
        );
      default:
        return <NotFound />;
    }
  };

  return (
    <>
      <div onSubmit={handleSubmit} className=" Adminfix">
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
                    <div className="flex h-screen w-screen" key={index}>
                      {/* Sidebar */}
                      <div
                        className={`sidebar w-64 bg-white shadow-md absolute h-full ${
                          sidebarHidden ? "sidebar-hidden" : ""
                        }`}
                        id="sidebar"
                      >
                        <div className="p-4 flex items-center">
                          <span className="ml-2 text-xl font-bold text-purple-500">
                            My Rom
                          </span>
                        </div>
                        <hr></hr>
                        <div className="p-4 pt-1 flex items-center">
                          <img
                            alt="User profile"
                            className="rounded-full"
                            height="50"
                            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
                            width="50"
                          />
                          <div className="ml-2 nameheader">
                            <p className="text-gray-900 font-medium ownername">
                              {User.FullName}
                            </p>
                            <p className="text-gray-500 text-sm">owner</p>
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
                              <span className="ml-2">Basic UI Elements</span>
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
                              <span className="ml-2">Forms</span>
                            </li>
                          </ul>
                        </nav>
                        <div className="p-4">
                          <button
                            className="w-full bg-purple-500 text-white py-2 rounded-md"
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
                                className="auth-button"
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

      <div className="auth-wrapper" >
        <div className="auth-box">
          <h2 className="auth-title">
            {isForgotPassword
              ? "Forgot Password"
              : isLogin
              ? "User Login"
              : "User Registration"}
          </h2>

          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLogin && !isForgotPassword && (
              <div>
                <label htmlFor="name">Name</label>
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
            )}

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
                pattern="[0-9]{10}" // Ensuring only 10-digit numbers
                maxLength="10"
              />
            </div>

            {!isForgotPassword && (
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
            )}

            {!isLogin && !isForgotPassword && (
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
            )}

            {/* Favorite Choices in Signup & Forgot Password */}
            {(!isLogin || isForgotPassword) && (
              <>
                <div>
                  <label htmlFor="state">Choose Your States:</label>
                  <select
                    id="states"
                    name="States"
                    className="favorites-dropdown"
                    value={favorites}
                    onChange={handleFavoriteChange}
                  >
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
                    <option value="Madhya Pradesh" selected>
                      Madhya Pradesh
                    </option>
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
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="pincode">Pin Code</label>
                  <input
                    type="number"
                    id="pincode"
                    name="pincode"
                    placeholder="482001"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="favorites">Choose Your Favorites:</label>
                  <select
                    id="favorites"
                    name="favorites"
                    className="favorites-dropdown"
                    value={favorites}
                    onChange={handleFavoriteChange}
                  >
                    <option value="Animals">Animals</option>
                    <option value="Dresses">Dresses</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Travel">Travel</option>
                    <option value="Food">Food</option>
                  </select>
                </div>
              </>
            )}

            {isLogin && !isForgotPassword && (
              <>
                <div className="auth-options">
                  <div className="checkbox-group">
                    <input type="checkbox" id="remember_me" />
                    <label htmlFor="remember_me">Remember me</label>
                  </div>
                  <button
                    type="button"
                    className="auth-link"
                    onClick={() => setIsForgotPassword(true)}
                  >
                    Forgot your password?
                  </button>
                </div>
              </>
            )}

            <button type="submit" className="auth-button">
              {isForgotPassword ? "Get Reset" : isLogin ? "Sign in" : "Sign up"}
            </button>
          </form>

          {!isForgotPassword && (
            <p className="auth-toggle">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="auth-link"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          )}

          {isForgotPassword && (
            <p className="auth-toggle">
              Remembered your password?
              <button
                onClick={() => setIsForgotPassword(false)}
                className="auth-link"
              >
                Sign in
              </button>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
