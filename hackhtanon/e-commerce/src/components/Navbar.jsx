import React, { useContext, useState } from "react";
import { X, User, ShoppingBag } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { useLocation } from "react-router";

export default function Navbar({ onSearch }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(""); // Search input state
  const { getCartCount } = useContext(CartContext);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query); // Call parent function to handle search
    }
    setQuery(""); // Clear search box
  };

  return (
    <nav className="sticky bg-white mb-4 top-0 z-50 border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="text-2xl font-bold tracking-wide">
        <button onClick={() => (window.location.href = "/")}>
          <span className="text-gray-800">FOREVER</span>
          <span className="text-pink-600">.</span>
        </button>
      </div>

      {/* Center: Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
        {["/", "/collection", "/about", "/contact"].map((path, i) => {
          const names = ["HOME", "COLLECTION", "ABOUT", "CONTACT"];
          return (
            <li key={path}>
              <button
                onClick={() => (window.location.href = path)}
                className={`relative pb-1 ${
                  isActive(path) ? "text-black" : ""
                }`}
              >
                {names[i]}
                {isActive(path) && (
                  <span className="absolute bottom-0 left-0 w-6 h-0.5 bg-black"></span>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Right: Desktop Icons + Search Box */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Search Box */}
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
        </form>

        <User
          onClick={() => (window.location.href = "/login")}
          className="w-5 h-5 cursor-pointer text-gray-700"
        />
        <div className="relative">
          <button onClick={() => (window.location.href = "/cart")}>
            <ShoppingBag className="w-5 h-5 cursor-pointer text-gray-700" />
          </button>
          {getCartCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full px-1.5">
              {getCartCount()}
            </span>
          )}
        </div>
      </div>

      {/* Mobile Icons */}
      <div className="flex items-center gap-4 md:hidden">
        <User
          onClick={() => (window.location.href = "/login")}
          className="w-5 h-5 cursor-pointer text-gray-700"
        />
        <div className="relative">
          <button onClick={() => (window.location.href = "/cart")}>
            <ShoppingBag className="w-5 h-5 cursor-pointer text-gray-700" />
          </button>
          {getCartCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full px-1.5">
              {getCartCount()}
            </span>
          )}
        </div>
        <button onClick={() => setOpen(true)}>
          <X className="w-6 h-6 cursor-pointer" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg border-r border-gray-200 transform transition-transform duration-300 ease-in-out z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Menu</h2>
          <X onClick={() => setOpen(false)} className="w-6 h-6 cursor-pointer" />
        </div>
        <ul className="flex flex-col mt-4 space-y-2 font-medium text-gray-700">
          {["/", "/collection", "/about", "/contact"].map((path, i) => {
            const names = ["HOME", "COLLECTION", "ABOUT", "CONTACT"];
            return (
              <li key={path}>
                <button
                  onClick={() => {
                    window.location.href = path;
                    setOpen(false);
                  }}
                  className={`block px-6 py-2 ${
                    isActive(path) ? "bg-black text-white" : "hover:bg-gray-100"
                  }`}
                >
                  {names[i]}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 md:hidden z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </nav>
  );
}
