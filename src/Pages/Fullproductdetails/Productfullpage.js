import React from "react";
import { useLocation, Link } from "react-router-dom"; // Import useLocation
import "../Fullproductdetails/Fullpage.css";

const ProductDetailsPage = () => {
  const location = useLocation(); 
  const product = location.state?.product; // Get product data from navigation

  if (!product) {
    return <h2 className="text-center">No Product Data Available</h2>;
  }

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

          <div className="product-variants">
            <h3>Address</h3>
            <ul>
              {product.variants?.map((variant, index) => (
                <li key={index}>{variant}</li>
              ))}
            </ul>
          </div>

          <div className="cta-buttons">
            <Link to="/ProductBuy" className="buybutton">
              Book Now
            </Link>
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
            <p> {product.paymentOptions}</p>
          </div>
        </div>
        <div className="related-products">
          <h3>Related Products</h3>
          <ul>
            {product.relatedProducts?.map((related, index) => (
              <li key={index}>
                {related.name} - ${related.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
