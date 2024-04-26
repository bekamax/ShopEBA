import React from "react";
import Home from "../pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import ProductList from "../pages/ProductList/ProductList";

const MainRoats = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/producs" element={<ProductList />} />
    </Routes>
  );
};

export default MainRoats;
