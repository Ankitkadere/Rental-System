import React, { useEffect, useState } from "react";
import "../Productlist/Productlist.css";
import { BsCartCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const PopularProducts = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [currentUser, setcurrentUser] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("https://sheetdb.io/api/v1/cqydgetbk3ekl");
        const data = await response.json();
        const filteredRooms = data.filter(
          (room) => parseInt(room.Mob) === parseInt(9174750864)
        );
        setRooms(filteredRooms);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  const handleProductClick = (room) => {
    navigate("/Myproduct", { state: { room } });
  };

  return (
    <div className="popularproducts">
      <h2>Available Rooms</h2>
      <div className="product-list">
        {rooms.length === 0 ? (
          <p>No rooms found.</p>
        ) : (
          rooms.map((room, index) => (
            <div className="card" key={index}>
              <span className="badge badge-hot">Rent</span>
              {room.Image && (
                <img
                  src={room.Image}
                  alt={room.Tittle}
                  className="product-image"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleProductClick(room)}
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
                <span className="ml-1 text-gray-600">({room.Rating || 0})</span>
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
                  onClick={() => handleProductClick(room)}
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
  );
};

export default PopularProducts;
