import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Order from "./pages/Order";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col md:px-7 ">
          <Navbar />
          <main className="flex-1 px-9">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/order" element={<Order />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/checkout" element={<PlaceOrder />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
