import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Component/Header/Header";
import Navtop from "./Component/Navbar/Navbar";
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Component/Footer/Footer";
import ProductDetailsPage from '../src/Pages/Fullproductdetails/Productfullpage';
import ProductBuy from "./Pages/Buy/Buyproduct";
import Admin from "./Admin";
import Login from "./Login/Login.js";
import NotFound from "./Component/Pagenotfound/Notfound.js";
import RoomManagementPanel from "./Admin";
import Search from "./Component/Search Page/Top Search/topsearch.js";
import Single from "./Sections/Single Room/Single.js";
import FilterByPrice from "./Component/Pagenotfound/FilterError.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navtop />
        <Routes>
          <Route exact={true} path="" element={<Home />} />
          <Route exact={true} path="/Home" element={<Home />} />
          <Route exact={true} path="/Search" element={<Search />} />
          <Route exact={true} path="/ProductDetailsPage" element={<ProductDetailsPage />} />
          <Route exact={true} path="/ProductBuy" element={<ProductBuy/>} />
          <Route exact={true} path="/Admin" element={<Admin/>} />
          <Route exact={true} path="/Login" element={<Login/>} />
          <Route exact={true} path="/Unablepage" element={<NotFound/>} />
          <Route exact={true} path="/FilterByPrice" element={<FilterByPrice/>} />
        </Routes>
        <Routes>
          <Route exact={true} path="/Singleroom" element={<Single/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
