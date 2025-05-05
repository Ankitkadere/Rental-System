import { useState, useEffect } from "react";
import "./Addroom.css";
 
const AddRoomForm = () => {

  
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
    State: "",
    City: "",
    Pincode: "",
    RoomType: "",
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

  useEffect(() => {
    const randomValue = generateRandomValue();
    setRoom((prev) => ({ ...prev, Unique: randomValue }));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setRoom((prev) => ({ ...prev, [name]: imageUrl }));
      }
    } else {
      setRoom((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { Image, ...formData } = room;
    const payload = { data: [formData] };

    try {
      const response = await fetch("https://sheetdb.io/api/v1/cqydgetbk3ekl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();
      console.log("API Response:", responseData);

      if (response.ok) {
        alert("Room added successfully!");
        setRoom({
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
          State: "",
          City: "",
          Pincode: "",
          RoomType: "",
        });
      } else {
        alert("Failed to send data.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    
    <div className="form-wrapper">
    
       <form onSubmit={handleUpdate} className="room-form">
        {/* Hidden Unique Field */}
        <input
          type="text"
          name="Unique"
          value={room.Unique}
          onChange={handleChange}
          className="hidden-input d-none"
          readOnly
        />

        {/* Basic Info */}
        <div className="form-group">
          <label>Room ID (Mob)</label>
          <input
            type="text"
            name="Mob"
            placeholder="Enter Unique Room ID"
            value={room.Mob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Room Type</label>
          <select name="RoomType" value={room.RoomType} onChange={handleChange}>
            <option value="">Select Room Type</option>
            {[
              "Single Room",
              "Double Room",
              "Deluxe Room",
              "Student Room",
              "Hostel",
              "Suite",
              "Penthouse",
              "Luxury Villa",
              "Family Room",
            ].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Image Upload */}
        <div className="form-group">
          <label>Upload Room Image</label>
          <input
            type="file"
            name="Image"
            accept="image/*"
            onChange={handleChange}
          />
          {room.Image && (
            <img src={room.Image} alt="Preview" className="image-preview" />
          )}
        </div>

        {/* Text Fields */}
        {[
          { label: "Room Title", name: "Tittle" },
          { label: "Description", name: "Description", textarea: true },
          { label: "Current Price", name: "Price", type: "number" },
          { label: "Old Price", name: "OldPrice", type: "number" },
          { label: "Rating", name: "Rating", type: "number", step: "0.1" },
          { label: "Brand", name: "Brand" },
          { label: "Information", name: "Information" },
          { label: "Category", name: "Category" },
          { label: "Availability", name: "Availability" },
          { label: "Wifi Info", name: "Wifi" },
          { label: "Kitchen Info", name: "Kitchen" },
          { label: "Return Policy", name: "ReturnPolicy" },
          { label: "Payment Options", name: "PaymentOptions" },
          { label: "Toilet Info", name: "Toilet" },
          { label: "Bill Info", name: "Bill" },
          { label: "Address", name: "Address" },
          { label: "City", name: "City" },
          { label: "Pincode", name: "Pincode", type: "number" },
        ].map(({ label, name, type = "text", step, textarea }) => (
          <div className="form-group" key={name}>
            <label>{label}</label>
            {textarea ? (
              <textarea
                name={name}
                placeholder={label}
                value={room[name]}
                onChange={handleChange}
              />
            ) : (
              <input
                type={type}
                name={name}
                step={step}
                placeholder={label}
                value={room[name]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}

        {/* State Dropdown */}
        <div className="form-group">
          <label>State</label>
          <select name="State" value={room.State} onChange={handleChange}>
            <option value="">Select State</option>
            {[
              "Madhay Predesh",
              "Maharashtra",
              "Delhi",
              "Karnataka",
              "Tamil Nadu",
              "Gujarat",
            ].map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Add Room
        </button>
      </form>
    </div>
  );
};

export default AddRoomForm;
