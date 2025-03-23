import React from "react";
import Carousel from "react-bootstrap/Carousel";
import '../Slider/Slide.css';// Import the CSS file

const ImageSlider = () => {
  return (
    <Carousel className="slider-container">
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="https://static.vecteezy.com/system/resources/thumbnails/057/202/359/small/delicious-raspberry-cream-cake-garnished-with-fresh-berries-and-delicate-decorations-on-a-soft-pink-background-photo.jpeg"
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
          src="https://img.freepik.com/premium-psd/delicious-cake-social-media-promotion-instagram-banner-template_545154-98.jpg?semt=ais_hybrid"
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
          src= "https://www.shutterstock.com/image-photo/birthday-cake-candlescover-banner-conceptdifferent-600nw-2212456441.jpg"
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