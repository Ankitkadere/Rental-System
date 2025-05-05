import { useLocation, Link } from "react-router-dom";
import "../../Pages/Fullproductdetails/Fullpage.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Unablepage from "../../Component/Pagenotfound/Notfound";

function OffCanvasExample({
  placement,
  show,
  handleClose,
  formData,
  handleChange,
  handleSubmit,
}) {
  return (
    <Offcanvas show={show} onHide={handleClose} placement={placement}>
      <Offcanvas.Body>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="FavoriteType">Status</label>
            <select
              name="FavoriteType"
              className="form-control"
              value={formData.FavoriteType}
              onChange={handleChange}
              required
            >
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>
          <button type="submit" className="auth-button">
            Save
          </button>
        </form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

const Bigproducts = () => {
  const location = useLocation();
  const room = location.state?.room;

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [formData, setFormData] = useState({ FavoriteType: "1" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Status Changed To:", formData.FavoriteType);
    handleClose();
  };

  if (!room) return <Unablepage />;

  return (
    <>
      <div className="product-details">
        <div className="product-images">
          <img src={room.Image} alt={room.Tittle} />
        </div>
        <div className="product-info">
          <h1>{room.Tittle}</h1>
          <p>{room.Description}</p>
          <div className="flex">
            <p className="price mr-5">₹{room.Price} / Month</p>
            <p className="availability">: {room.FavoriteType === "1" ? "Active" : "Inactive"}</p>
          </div>

          <div className="specifications">
            <ul>
              <li>Wifi: {room.Wifi}</li>
              <li>Kitchen: {room.Kitchen}</li>
              <li>Toilet: {room.Toilet}</li>
              <li>E-Bill: {room.Bill}</li>
            </ul>
          </div>

          <div className="product-variantsaddress">
            <h3>Address</h3>
            <ul>
              <li>{room.Address},</li>
              <li>{room.City},</li>
              <li>{room.State},</li>
              <li>{room.Pincode}</li>
            </ul>
          </div>

          <div className="cta-buttons">
            <OffCanvasExample
              placement="bottom"
              show={show}
              handleClose={handleClose}
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />

            <Link to="/ProductBuy" className="buybutton">
              Delete
            </Link>
            <button onClick={handleShow} className="buybutton">
              Status
            </button>
            <Link to="/ProductEdit" className="buybutton">
              Edit
            </Link>
          </div>
        </div>
      </div>

      <div className="product-info">
        <div className="product-details productpolicy">
          <div className="shipping-info">
            <h3>Information</h3>
            <p>{room.Information}</p>
          </div>

          <div className="return-policy">
            <h3>Refund Policy</h3>
            <p>{room.ReturnPolicy}</p>
          </div>

          <div className="warranty">
            <h3>Product Warranty</h3>
            <p>{room.Warranty}</p>
          </div>

          <div className="payment-options">
            <h3>Payment Options</h3>
            <p>{room.PaymentOptions}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bigproducts;
