 
import React, { useState } from "react";

const RoomForm = () => {
  const [room, setRoom] = useState({
    Unique: "",
    Mob: "",
    Image: "",
    Tittle: "",
    Description: "",
    Category: "",
    Availability: "",
    Wifi: "",
    Kitchen: "",
    Toilet: "",
    Bill: "",
    Price: "",
    OldPrice: "",
    Rating: "",
    Brand: "",
    Information: "",
    ReturnPolicy: "",
    PaymentOptions: "",
    Address: "",
    City: "",
    State: "",
    Pincode: "",
    Status: "",
    Delete: "",
  });
  const generateRandomValue = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwliMShgMNZXOBpyHCH1hlx-ouKgf6McOCsr1s_2SdvvgWyWMWAWMOlBoMAVecnzxioKA/exec", // Replace with your deployed Web App URL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(room),
        }
      );

      const result = await response.json();
      console.log(result);

      if (result.result === "success") {
        alert("Room data submitted successfully!");
        setRoom({ ...room, Unique: "", Mob: "", Tittle: "", Description: "", Price: "" }); // clear form if needed
      } else {
        alert("Submission failed.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred!");
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <input name="Unique" value={room.Unique} onChange={handleChange} placeholder="Unique ID" required />
      <input name="Mob" value={room.Mob} onChange={handleChange} placeholder="Mobile" required />
      <input name="Image" value={room.Image} onChange={handleChange} placeholder="Image URL" />
      <input name="Tittle" value={room.Tittle} onChange={handleChange} placeholder="Room Title" />
      <input name="Description" value={room.Description} onChange={handleChange} placeholder="Description" />
      <input name="Category" value={room.Category} onChange={handleChange} placeholder="Category" />
      <input name="Availability" value={room.Availability} onChange={handleChange} placeholder="Availability" />
      <input name="Wifi" value={room.Wifi} onChange={handleChange} placeholder="Wifi" />
      <input name="Kitchen" value={room.Kitchen} onChange={handleChange} placeholder="Kitchen" />
      <input name="Toilet" value={room.Toilet} onChange={handleChange} placeholder="Toilet" />
      <input name="Bill" value={room.Bill} onChange={handleChange} placeholder="Bill" />
      <input name="Price" value={room.Price} onChange={handleChange} type="number" placeholder="Price" />
      <input name="OldPrice" value={room.OldPrice} onChange={handleChange} type="number" placeholder="Old Price" />
      <input name="Rating" value={room.Rating} onChange={handleChange} placeholder="Rating" />
      <input name="Brand" value={room.Brand} onChange={handleChange} placeholder="Brand" />
      <input name="Information" value={room.Information} onChange={handleChange} placeholder="Information" />
      <input name="ReturnPolicy" value={room.ReturnPolicy} onChange={handleChange} placeholder="Return Policy" />
      <input name="PaymentOptions" value={room.PaymentOptions} onChange={handleChange} placeholder="Payment Options" />
      <input name="Address" value={room.Address} onChange={handleChange} placeholder="Address" />
      <input name="City" value={room.City} onChange={handleChange} placeholder="City" />
      <input name="State" value={room.State} onChange={handleChange} placeholder="State" />
      <input name="Pincode" value={room.Pincode} onChange={handleChange} placeholder="Pincode" />
      <input name="Status" value={room.Status} onChange={handleChange} placeholder="Status" />
      <input name="Delete" value={room.Delete} onChange={handleChange} placeholder="Delete" />

      <button type="submit">Submit Room</button>
    </form>
  );
};

export default RoomForm;
