import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Component/Header/Header";
import Navtop from "./Component/Navbar/Navbar";
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Component/Footer/Footer";
import ProductDetailsPage from '../src/Pages/Fullproductdetails/Productfullpage';
import ProductBuy from "./Pages/Buy/Buyproduct";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navtop />
        <Routes>
          <Route exact={true} path="" element={<Home />} />
          <Route exact={true} path="/Home" element={<Home />} />
          <Route exact={true} path="/ProductDetailsPage" element={<ProductDetailsPage />} />
          <Route exact={true} path="/ProductBuy" element={<ProductBuy/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
