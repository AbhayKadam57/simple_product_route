import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
