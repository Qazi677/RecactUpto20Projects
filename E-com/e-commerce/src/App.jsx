import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Order from "./pages/Order";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Tittle from "./components/Tittle";
import Footer from "./components/Footer";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

export default function App() {
  return (
    <>
      <div className="sm:mx-24">
        <BrowserRouter>
          <Navbar />
          <ToastContainer />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/order" element={<Order />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}
