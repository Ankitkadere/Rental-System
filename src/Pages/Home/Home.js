import React from "react";
import "../Home/Home.css";
import UncontrolledExample from "../../Component/Slider/Slide";
import Smallbanner from "../../Component/Smallanner/Sbanner";
import Categories from "../../Component/Categery/Categery";
import Roomlist from "../Productlist/Roomlist";
import RoomSearch from "../../Component/Search Page/Main Room Find/Roomfind";

const Home = () => {
  return (
    <>
      {/*Slider */}
      <UncontrolledExample />
       {/*Room Search */}
      
      {/*Productlist*/}
      <Roomlist />
      {/*Smal  Banner*/}
      <Smallbanner />
      {/*Productlist*/}
      <Roomlist />
      {/*Categery*/}
      <Categories />
      {/*Productlist*/}
      <Roomlist />
    </>
  );
};

export default Home;
