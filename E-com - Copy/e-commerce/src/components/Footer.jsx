import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-700 border-t border-gray-200">
      {/* Main Footer Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section - Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-wide">
            FOREVER<span className="text-pink-400">.</span>
          </h2>
          <p className="text-gray-500 leading-relaxed text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Middle Section - Company Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">COMPANY</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-gray-900 cursor-pointer">Home</li>
            <li className="hover:text-gray-900 cursor-pointer">About us</li>
            <li className="hover:text-gray-900 cursor-pointer">Delivery</li>
            <li className="hover:text-gray-900 cursor-pointer">
              Privacy policy
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            GET IN TOUCH
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>+1-000-000-0000</li>
            <li>greatstackdev@gmail.com</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        Copyright © 2024 @ greatstack.dev – All Right Reserved.
      </div>
    </footer>
  );
}
