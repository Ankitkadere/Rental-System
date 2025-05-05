import "../../Pages/Buy/Buyproduct.css";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "../../Pages/Fullproductdetails/Fullpage.css";
import { useState, useEffect } from "react";
import Unablepage from "../../Component/Pagenotfound/Notfound"; 
const ProductEdit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [show, setShow] = useState(false);
  const [room, setRoom] = useState({});
  const [formData, setFormData] = useState({ FavoriteType: "1" });

  useEffect(() => {
    if (product) {
      setRoom({ ...product });
    }
  }, [product]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleUpChange = (e) => {
    const { name, value } = e.target;
    setRoom((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { Image, ...formDataToSend } = room;
    const payload = { data: [formDataToSend] };

    try {
      const response = await fetch("https://sheetdb.io/api/v1/cqydgetbk3ekl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();
      console.log("API Response:", responseData);

      if (response.ok) {
        alert("Room updated successfully!");
      } else {
        alert("Failed to update room.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Submission failed. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Status:", formData.FavoriteType);
    handleClose();
  };

  if (!product) return <Unablepage />;

  return (
    <>
      <div className="product-details">
        <div className="product-images">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div className="flex">
            <p className="price mr-5">Rs {product.price} / Month</p>
            <p className="availability">: {product.availability}</p>
          </div>

          <div className="specifications">
            <ul>
              <li>Wifi: {product.Wifi}</li>
              <li>Kitchen: {product.Kitchen}</li>
              <li>Toilet: {product.Toilet}</li>
              <li>E-Bill: {product.Bill}</li>
            </ul>
          </div>

          <div className="product-variantsaddress">
            <h3>Address</h3>
            <ul>
              <li>{product.Address},</li>
              <li>{product.City},</li>
              <li>{product.State},</li>
              <li>{product.Pincode}</li>
            </ul>
          </div>

         
        </div>
      </div>

      <div className="product-info">
        <div className="product-details productpolicy">
          <div className="shipping-info">
            <h3>Information</h3>
            <p>{product.information}</p>
          </div>
          <div className="return-policy">
            <h3>Refund Policy</h3>
            <p>{product.returnPolicy}</p>
          </div>
          <div className="warranty">
            <h3>Product Warranty</h3>
            <p>{product.warranty}</p>
          </div>
          <div className="payment-options">
            <h3>Payment Options</h3>
            <p>{product.paymentOptions}</p>
          </div>
        </div>
      </div>

      <div className="Buy">
        <div className="form-card">
          <h1 className="title">Edit Room</h1>
          <p className="description">Please fill in the details to edit your listing.</p>
          <div className="page-content">
            <div className="form-wrapper">
              <form onSubmit={handleUpdate} className="room-form">
                {/* Example Input */}
                <input
                  type="text"
                  name="Mob"
                  value={room.Mob || ""}
                  onChange={handleUpChange}
                  placeholder="Mobile Number"
                />

                <input
                  type="text"
                  name="Image"
                  value={room.Image || ""}
                  onChange={handleUpChange}
                  placeholder="Hosted Image URL"
                />
                {room.Image && <img src={room.Image} alt="Preview" className="image-preview" />}

                {/* More fields can be added similarly */}
                <input
                  type="text"
                  name="Address"
                  value={room.Address || ""}
                  onChange={handleUpChange}
                  placeholder="Address"
                />

                <select
                  name="Availability"
                  value={room.Availability || ""}
                  onChange={handleUpChange}
                >
                  <option value="">Select Availability</option>
                  <option value="YES">YES</option>
                  <option value="NO">NO</option>
                </select>

                {/* Add all other fields using similar structure as needed */}

                <button type="submit" className="submit-button">Update Room</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductEdit;
