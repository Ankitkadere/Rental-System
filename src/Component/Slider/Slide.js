import React from "react";
import Carousel from "react-bootstrap/Carousel";
import '../Slider/Slide.css';// Import the CSS file

const ImageSlider = () => {
  return (
    <Carousel className="slider-container">
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="https://media.istockphoto.com/id/828457564/photo/blue-living-room.jpg?s=612x612&w=0&k=20&c=6l3QAEYyjPBPUpqrK5dFV3M94V7lJyM40DHpeWGA_eM="
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Beautiful cakes for every occasion.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwkGkQK3CD0bCgL9EZkvoQrl9YwUTiOhhuA&s"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Freshly baked with love and care.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src= "https://png.pngtree.com/background/20250104/original/pngtree-blue-interior-living-room-with-luxury-furniture-picture-image_15440746.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>Order your dream cake today.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;