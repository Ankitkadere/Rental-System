import "../Navbar/navset.css";
import { FaSearch, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import {
  FaHeart,
  FaShoppingCart,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaTruck,
} from "react-icons/fa";

function Navset() {
  return (
    <>
      <div className="font-sans">
        {/* Top Bar */}
        <div className="bg-gray-100 text-center py-2 text-sm">
          Get up to 50% off new season styles, limited time only
        </div>

        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://storage.googleapis.com/a1aa/image/MYDr4RDuohPyroBc5UP4T5bFWi8e-UrjXrYFMLw3U34.jpg"
                alt="ClassyShop Logo"
                className="h-10 w-10 topimg"
              />
              <span className="ml-2 text-xl font-bold">CLASSYSHOP</span>
              <span className="ml-1 text-sm text-gray-500">BIG MEGA STORE</span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 mx-4">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* User Info */}
            <div className="flex items-center space-x-4">
              <div className="text-sm">
                <div className="font-bold">Rinku Verma</div>
                <div className="text-gray-500">Rinkuv.Planetc@Gmail.Com</div>
              </div>
              <div className="flex items-center space-x-2">
                <FaHeart className="text-gray-500" />
                <FaShoppingCart className="text-gray-500" />
              </div>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-700">
                <span>SHOP BY CATEGORIES</span>
                <FaChevronDown />
              </button>
              {[
                "Home",
                "Fashion",
                "Electronics",
                "Bags",
                "Footwear",
                "Groceries",
                "Beauty",
                "Wellness",
                "Jewellery",
              ].map((item) => (
                <a key={item} href="#" className="text-gray-700">
                  {item}
                </a>
              ))}
            </div>
            <div className="text-gray-700">
              <a href="#" className="flex items-center space-x-2">
                <FaTruck />
                <span>Free International Delivery</span>
              </a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="bg-gray-50 py-8">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
              <img
                src="https://storage.googleapis.com/a1aa/image/mjPOWTiXtVqrLFhIi8kILt5W2jE75V1rISwxTuvY_04.jpg"
                alt="Alpro Coconut and Almond"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <button className="bg-white rounded-full p-2 shadow-md">
                  <FaChevronLeft />
                </button>
                <button className="bg-white rounded-full p-2 shadow-md">
                  <FaChevronRight />
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-start px-8 text-white">
                <div className="bg-green-500 text-xs font-bold px-2 py-1 rounded-full mb-2">
                  EXCLUSIVE OFFER -40% OFF
                </div>
                <h1 className="text-4xl font-bold mb-2">
                  Quality Freshness Guaranteed!
                </h1>
                <p className="text-lg mb-4">Only this week. Don't miss...</p>
                <div className="text-2xl font-bold text-red-500 mb-4">
                  from $14.35
                </div>
                <a
                  href="#"
                  className="bg-blue-500 text-white px-4 py-2 rounded-full"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Navset;
