import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";
import { ShopContext } from "../context/Shopcontext";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getCartCount } = useContext(ShopContext);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "COLLECTION", path: "/collection" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1 text-2xl font-bold tracking-wide">
          <Link to={"/ "}>
            <span onClick={() => navigate("/")}>FOREVER</span>
          </Link>

          <span className="text-pink-400">.</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-black relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-gray-700 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}

          <button className="ml-4 border px-4 py-1 rounded-full hover:bg-gray-100">
            Admin Panel
          </button>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 cursor-pointer" />
          <User className="w-5 h-5 cursor-pointer" />
          <div className="relative">
            <Link to={"/cart"}>
              <ShoppingBag className="w-5 h-5 cursor-pointer" />
            </Link>
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {getCartCount()}
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-black"
              >
                {link.name}
              </Link>
            ))}
            <button className="border px-4 py-1 rounded-full hover:bg-gray-100">
              Admin Panel
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
