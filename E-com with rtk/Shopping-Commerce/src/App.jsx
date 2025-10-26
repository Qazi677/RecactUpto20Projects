import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
