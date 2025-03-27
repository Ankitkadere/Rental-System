import React from "react";
import Adminroomlist from "../../Pages/Productlist/productlist";

const Adminroom = () => {
  return (
    <div>
      <h1>User Booked Rooms</h1>
      <Adminroomlist userID="Owner" /> {/* Change userID dynamically */}
    </div>
  );
};

export default Adminroom;
