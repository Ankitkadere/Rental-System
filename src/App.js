import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Component/Header/Header";
import Navtop from "./Component/Navbar/Navbar";
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Component/Footer/Footer";
import ProductDetailsPage from "../src/Pages/Fullproductdetails/Productfullpage";
import ProductBuy from "./Pages/Buy/Buyproduct";
import Admin from "./Admin";
import Login from "./Login/Login.js";
import NotFound from "./Component/Pagenotfound/Notfound.js";
import Search from "./Component/Search Page/Top Search/topsearch.js";
import Single from "./Sections/Single Room/Single.js";
import FilterByPrice from "./Component/Pagenotfound/FilterError.js";
import Bigproducts from "./Admin/Big Product/Bigproduct.js";
import Registration from "./Login/Registration.js";
import Double from "./Sections/Single Room/Double.js";
import Student from "./Sections/Single Room/Student.js";
import Family from "./Sections/Single Room/Family.js";
import Couple from "./Sections/Single Room/Couple.js";
import Hostel from "./Sections/Single Room/Hostel.js";
import ProductEdit from "./Admin/Big Product/EditFull.js";
 

function App() {
  useEffect(() => {
    // Function to detect Developer Tools

    // Disable Right Click
    document.addEventListener("contextmenu", (e) => e.preventDefault());

    // Disable F12, Ctrl+Shift+I, Ctrl+U, etc.
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey &&
          (e.key === "u" ||
            e.key === "U" ||
            e.key === "i" ||
            e.key === "I" ||
            e.key === "j" ||
            e.key === "J"))
      ) {
        e.preventDefault();
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Navtop />
        <Routes>
          <Route exact={true} path="" element={<Home />} />
          <Route exact={true} path="/Home" element={<Home />} />
          <Route exact={true} path="/Search" element={<Search />} />
          <Route
            exact={true}
            path="/ProductDetailsPage"
            element={<ProductDetailsPage />}
          />
          <Route exact={true} path="/Myproduct" element={<Bigproducts />} />
          <Route exact={true} path="/ProductBuy" element={<ProductBuy />} />
          <Route exact={true} path="/ProductEdit" element={<ProductEdit />} />
          <Route exact={true} path="/Admin" element={<Admin />} />
          <Route exact={true} path="/Login" element={<Login />} />
          <Route exact={true} path="/Signup" element={<Registration />} />
          <Route exact={true} path="/Unablepage" element={<NotFound />} />
          <Route
            exact={true}
            path="/FilterByPrice"
            element={<FilterByPrice />}
          />
        </Routes>
        <Routes>
          <Route exact={true} path="/Singleroom" element={<Single />} />
          <Route exact={true} path="/Doubleroom" element={<Double />} />
          <Route exact={true} path="/Studentroom" element={<Student />} />
          <Route exact={true} path="/Familyroom" element={<Family />} />
          <Route exact={true} path="/Coupleroom" element={<Couple />} />
          <Route exact={true} path="/Hostelroom" element={<Hostel />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
