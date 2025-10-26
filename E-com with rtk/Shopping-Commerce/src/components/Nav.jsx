import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white relative">
      {/* Logo section */}
      <div>
        <img src={assets.logo} alt="logo" className="w-28 sm:w-36" />
      </div>

      {/* Hamburger menu icon (visible on small screens) */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <img
            src={menuOpen ? assets.close_icon : assets.menu_icon}
            alt="menu"
            className="w-6 cursor-pointer"
          />
        </button>
      </div>

      {/* Main pages nav section */}
      <div>
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) => "flex flex-col items-center"}
          >
            {({ isActive }) => (
              <>
                <span>Home</span>
                {isActive && (
                  <div className="w-8 h-0.5 bg-black mt-1 rounded-full"></div>
                )}
              </>
            )}
          </NavLink>

          <NavLink to="/collection" className="hover:text-blue-500">
            <span> Collection</span>
          </NavLink>
          <NavLink to="/about" className="hover:text-blue-500">
            About
          </NavLink>
          <NavLink to="/contact" className="hover:text-blue-500">
            Contact
          </NavLink>
        </ul>
      </div>

      {/* Icons section */}
      <div>
        <ul className="flex items-center gap-4">
          <Link>
            <img
              src={assets.search_icon}
              alt="search"
              className="w-5 sm:w-6 cursor-pointer"
            />
          </Link>
          <Link>
            <img
              src={assets.profile_icon}
              alt="profile"
              className="w-5 sm:w-6 cursor-pointer"
            />
          </Link>
          <Link>
            <img
              src={assets.cart_icon}
              alt="cart"
              className="w-5 sm:w-6 cursor-pointer"
            />
          </Link>
        </ul>
      </div>

      {/* Mobile Menu (for small screens) */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden z-50">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `py-2 ${isActive ? "text-blue-600 font-semibold" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/collection"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `py-2 ${isActive ? "text-blue-600 font-semibold" : ""}`
            }
          >
            Collection
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `py-2 ${isActive ? "text-blue-600 font-semibold" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `py-2 ${isActive ? "text-blue-600 font-semibold" : ""}`
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}
