import React from "react";
import Adminroomlist from "../../Pages/Productlist/productlist";

const Adminroom = () => {
  return (
    <div>
      <Adminroomlist userID="Owner" /> {/* Change userID dynamically */}
    </div>
  );
};

export default Adminroom;
