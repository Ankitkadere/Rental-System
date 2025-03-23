import React from "react";
import "../Home/Home.css";
import UncontrolledExample from "../../Component/Slider/Slide";
import PopularProducts from "../Productlist/productlist";
import Smallbanner from "../../Component/Smallanner/Sbanner";
import Categories from "../../Component/Categery/Categery";

const Home = () => {
  return (
    <>
      {/*Slider */}
      <UncontrolledExample />
      {/*Productlist*/}
      <PopularProducts />
      {/*Smal  Banner*/}
      <Smallbanner />
      {/*Productlist*/}
      <PopularProducts />
      {/*Categery*/}
      <Categories/>
        {/*Productlist*/}
        <PopularProducts />
    </>
  );
};

export default Home;
