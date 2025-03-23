import React, { useRef } from "react";
import "../Categery/Categery.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const categories = [
  {
    name: "Printed Cushion",
    items: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrL9FWt37vL3JMVo_XwFJkQ2qDbx54oL7LzQ&s",
  },
  {
    name: "Mugs",
    items: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrL9FWt37vL3JMVo_XwFJkQ2qDbx54oL7LzQ&s",
  },
  {
    name: "Lamp",
    items: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrL9FWt37vL3JMVo_XwFJkQ2qDbx54oL7LzQ&s",
  },
  {
    name: "T-shirts",
    items: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrL9FWt37vL3JMVo_XwFJkQ2qDbx54oL7LzQ&s",
  },
  {
    name: "Mugs",
    items: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrL9FWt37vL3JMVo_XwFJkQ2qDbx54oL7LzQ&s",
  },
  {
    name: "Lamp",
    items: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrL9FWt37vL3JMVo_XwFJkQ2qDbx54oL7LzQ&s",
  },
  {
    name: "T-shirts",
    items: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrL9FWt37vL3JMVo_XwFJkQ2qDbx54oL7LzQ&s",
  },{
    name: "Mugs",
    items: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrL9FWt37vL3JMVo_XwFJkQ2qDbx54oL7LzQ&s",
  },
  {
    name: "Lamp",
    items: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrL9FWt37vL3JMVo_XwFJkQ2qDbx54oL7LzQ&s",
  },
  {
    name: "T-shirts",
    items: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrL9FWt37vL3JMVo_XwFJkQ2qDbx54oL7LzQ&s",
  },
  {
    name: "Photo Frames",
    items: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrL9FWt37vL3JMVo_XwFJkQ2qDbx54oL7LzQ&s",
  },
];

const Categories = () => {
  const categoryRef = useRef(null);

  const scrollLeftHandler = () => {
    if (categoryRef.current) {
      categoryRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRightHandler = () => {
    if (categoryRef.current) {
      categoryRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="Categery">
      <h2 className="title">Popular Categories</h2>
      <div className="category-section">
        <button className="nav-button left" onClick={scrollLeftHandler}>
          <FaChevronLeft />
        </button>
        <div
          className="categories"
          ref={categoryRef}
          style={{
            overflowX: "auto",
            whiteSpace: "nowrap",
            scrollBehavior: "smooth",
            cursor: "grab",
          }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-item"
              style={{ display: "inline-block", margin: "0 10px" }}
            >
              <img
                src={category.img}
                alt={category.name}
                className="category-img"
              />
              <p className="category-name">{category.name}</p>
              <p className="category-items d-none">{category.items} items</p>
            </div>
          ))}
        </div>
        <button className="nav-button right" onClick={scrollRightHandler}>
          <FaChevronRight />
        </button>
      </div>

      <div className="banner">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrL9FWt37vL3JMVo_XwFJkQ2qDbx54oL7LzQ&s"
          alt="Personalised Gifts"
          className="banner-img"
        />
        <div className="banner-overlay">
          <h2>Personalised Gifts</h2>
          <p>Add an extra special touch</p>
          <p>Browse through our special personalised gifts range below</p>
          <button className="banner-button">
            <FaChevronDown />
          </button>
        </div>
      </div>
      <button className="back-to-top">
        <FaChevronUp />
      </button>
    </div>
  );
};

export default Categories;
