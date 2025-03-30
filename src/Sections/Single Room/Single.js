import React, { useState } from "react";
import "../../Pages/Productlist/Productlist.css";
import Data from "../../Database/Data.json";
import { BsCartCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { IoFilter } from "react-icons/io5";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import "../../Sections/Single Room/Single.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import FilterByPrice from "../../Component/Pagenotfound/FilterError";
const Single = () => {
  const navigate = useNavigate();
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleProductClick = (product) => {
    navigate("/ProductDetailsPage", { state: { product } });
  };

  const filterProducts = (products) => {
    return products.filter((product) => parseFloat(product.price) <= maxPrice && product.rating <= 2.8);
  };

  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleRangeChange = (e) => {
    const value = e.target.value;

    setMaxPrice(value);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  return (
    <>
   
        <div className="catch">
          <div className="leftright">
            <Link to="/Search" className="leftright">
              <MdKeyboardDoubleArrowLeft className="sicon" />
              <h5> Single Room ....</h5>
            </Link>
          </div>
          <div className="leftright">
            <button
              id="toggle-filter"
              className="toggle-filter-button"
              onClick={toggleFilterVisibility}
            >
              <IoFilter className="sicona" /> Filter
            </button>
          </div>
        </div>
  
      <div className="gridbox">
        <div className="filter-container">
          <div className={`filter-box ${isFilterVisible ? "" : "hidden"}`}>
            <h2 className="filter-title">Filter By Price</h2>
            <div className="price-range">
              <span className="price-text">
                Rs <span id="min-price"> 0</span>
              </span>
              <span className="price-text">
                Rs<span id="max-price"> {maxPrice * 1}</span>
              </span>
            </div>
            <input
              id="price-range"
              type="range"
              min="0"
              max="10000"
              value={maxPrice }
              className="price-range-slider"
              onChange={handleRangeChange}
            />

            <button
              onClick={toggleFilterVisibility}
              className="apply-filter-button"
            >
              Apply Filter
            </button>
          </div>
        </div>

        <div className="popularproducts">
          {maxPrice == 0 && <FilterByPrice />}
          {Object.keys(Data).map((userID) => (
            <div key={userID}>
              <h2 className="d-none">{userID}</h2>
              <div className="product-list">
                {filterProducts(Data[userID]).map((product, index) => (
                  <div className="card" key={index}>
                    <span className="badge badge-hot">Rent</span>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-image"
                      onClick={() => handleProductClick(product)}
                      style={{ cursor: "pointer" }}
                    />
                    <div className="text-sm text-gray-500">
                      {product.category}
                    </div>
                    <h2 className="text-lg font-semibold">{product.title}</h2>
                    <div className="flex items-center mb-0">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < product.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }
                        >
                          ★
                        </span>
                      ))}
                      <span className="ml-0 text-gray-600">
                        ({product.rating})
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mb-[-5px] mt-[-5px] additional">
                      By {product.brand}
                    </div>
                    <div className="flex items-center justify-between adddown">
                      <div className="flex">
                        <div className="text-lg font-bold text-green-600">
                          ${product.price}
                        </div>
                        <div className="text-sm text-gray-500 line-through oldpeice">
                          ${product.oldPrice}
                        </div>
                      </div>
                      <button className="button">
                        <FaShoppingCart/>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Single;
