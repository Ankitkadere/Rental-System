import React from "react";
import "../Fullproductdetails/Fullpage.css";
import { Link } from "react-router-dom";
const ProductDetailsPage = () => {
  const product = {
    name: "Chocolate | Fresh New Cake",
    images: [
      "https://t4.ftcdn.net/jpg/02/52/80/65/360_F_252806534_HkpmruoDjSPwXx4X9y4Lht8WBmj9GfEN.jpg",
      
    ],
    price: "$99.99",
    description:
      "High-quality wireless Bluetooth headphones with noise-canceling feature, long battery life, and premium sound quality.",
    specifications: {
      size: "Medium",
      weight: "250g",
      color: "Black",
      material: "Plastic, Metal",
    },
    availability: "In Stock",
    customerReviews: [
      {
        name: "John Doe",
        rating: 5,
        review: "Amazing sound quality and comfort!",
      },
      {
        name: "Jane Smith",
        rating: 4,
        review: "Good, but a little expensive.",
      },
    ],
    variants: ["Black", "White", "Blue"],
    shippingInfo:
      "Free shipping on orders over $50. Estimated delivery in 3-5 business days.",
    returnPolicy: "30-day returns, full refund on unopened products.",
    sizeGuide: "One size fits all.",
    relatedProducts: [
      { name: "Bluetooth Speaker", price: "$49.99" },
      { name: "Noise-Canceling Earbuds", price: "$79.99" },
    ],
    warranty: "1-year warranty included.",
    paymentOptions: ["Credit Card", "PayPal", "Apple Pay"],
  };

  return (
    <>
      <div className="product-details">
        <div className="product-images">
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={`Product image ${index + 1}`} />
          ))}
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
       
          <p>{product.description}</p>
          <div className="flex"> 
          <p className="price mr-5">{product.price}</p>
            <p className="availability">Availability: {product.availability}</p>
          </div>
          <div className="specifications">
            <h3>Specifications</h3>
            <ul>
              <li>Size: {product.specifications.size}</li>
              <li>Weight: {product.specifications.weight}</li>
              <li>Color: {product.specifications.color}</li>
              <li>Material: {product.specifications.material}</li>
            </ul>
          </div>

         
          <div className="product-variants">
            <h3>Variants</h3>
            <ul>
              {product.variants.map((variant, index) => (
                <li key={index}>{variant}</li>
              ))}
            </ul>
          </div>

          <div className="cta-buttons">
            <Link to="/ProductBuy" className="buybutton">Add Cart</Link>
            <Link to="/ProductBuy" className="buybutton">Buy Now</Link>
          </div>
        </div>
      </div>
      <div className="product-info">
        <div className="product-details productpolicy">
          <div className="shipping-info">
            <h3>Shipping Information</h3>
            <p>{product.shippingInfo}</p>
          </div>

          <div className="return-policy">
            <h3>Return & Refund Policy</h3>
            <p>{product.returnPolicy}</p>
          </div>

          <div className="warranty">
            <h3>Product Warranty</h3>
            <p>{product.warranty}</p>
          </div>

          <div className="payment-options">
            <h3>Payment Options</h3>
            <p>Accepted: {product.paymentOptions.join(", ")}</p>
          </div>
        </div>
        <div className="product-details d-none
        ">
          <div className="related-products">
            <h3>Related Products</h3>
            <ul>
              {product.relatedProducts.map((related, index) => (
                <li key={index}>
                  <span>
                    {related.name} - {related.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="social-sharing">
            <h3>Share This Product</h3>
            <button>Share on Facebook</button>
            <button>Share on Twitter</button>
            <button>Share on Instagram</button>
          </div>
          <div className="faq">
            <h3>Frequently Asked Questions</h3>
            <ul>
              <li>
                <strong>Q:</strong> How long does the battery last? <br />
                <strong>A:</strong> The battery lasts up to 20 hours on a full
                charge.
              </li>
              <li>
                <strong>Q:</strong> Are these headphones waterproof? <br />
                <strong>A:</strong> No, they are water-resistant but not
                waterproof.
              </li>
            </ul>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
