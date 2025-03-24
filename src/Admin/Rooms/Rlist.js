import React, { useEffect, useState } from "react";
import product from "../../Database/Data.json";
import "../../Pages/Productlist/productlist.css";


const Adminroomlist = ({ userID }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if (product[userID]) {
      setRooms(product[userID]); // Load rooms for the specific user
    } else {
      setRooms([]); // Set empty if no data found
    }
  }, [userID]); // Re-run when userID changes


  return (
    <>
    <div className="popularproducts">
      <a className="gridbox" href="/ProductDetailsPage">
        {rooms.map((product, index) => (
          <div className="card" key={index}>
            <span className="badge badge-hot">Hot</span>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="text-sm text-gray-500">{product.category}</div>
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={
                    i < product.rating ? "text-yellow-500" : "text-gray-300"
                  }
                >
                  ★
                </span>
              ))}
              <span className="ml-2 text-gray-600">({product.rating})</span>
            </div>
            <div className="text-sm text-gray-500 mb-[-5px] mt-[-5px] additional">
              By {product.brand}
            </div>
            <div className="flex items-center justify-between adddown">
              <div className="flex">
                <div className="text-lg font-bold text-green-600">
                  ${product.price}
                </div>
                <div className="text-sm text-gray-500 line-through">
                  ${product.oldPrice}
                </div>
              </div>
              <button className="button">Add</button>
            </div>
          </div>
        ))}
      </a>
    </div>
    </>
  );
};

export default Adminroomlist;
