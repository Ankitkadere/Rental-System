import React from "react";
import Adminroomlist from "../../Pages/Productlist/productlist";

const Adminroom = () => {
  return (
    <div>
      <h1>User Booked Rooms</h1>
      <Adminroomlist userID="32324" /> {/* Change userID dynamically */}
    </div>
  );
};

export default Adminroom;
