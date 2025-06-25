import React, { useState } from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import Banner from "../Banner/Banner.jsx";
// import { Outlet } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "../../Pages/Home/Home.jsx";
// import Authentification from "../../Pages/Account/Account.jsx";
import Privacy from "../../Pages/Policies/privacy.jsx";
import { AuthProvider } from "../../Contexts/AuthContext.jsx";
function App() {
  // State

  //Functions

  return (
    <AuthProvider>
      <div className="App">
        <Banner />
        <Navbar />
        {/* <Authentification /> */}
        <Privacy />
        {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<div>Page en construction</div>} />
      </Routes>
      <Outlet />*/}
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
