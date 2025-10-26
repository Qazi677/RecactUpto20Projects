import React from "react";
import { Phone, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4">FOREVER.</h2>
            <p className="text-gray-600 leading-relaxed max-w-lg">
              Lorem ipsum is simply dummy text of the printing and processing
              industry. Lorem ipsum has been the industry's standard dummy text
              ever since the 1500s, where an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* COMPANY Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-black transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-black transition duration-300"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/delivery"
                  className="text-gray-600 hover:text-black transition duration-300"
                >
                  Delivery
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-600 hover:text-black transition duration-300"
                >
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div>
            <h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-600" />
                <span className="text-gray-600">1-0000-000-0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-600" />
                <span className="text-gray-600">qazizaid@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-4 h-4 text-gray-600" />
                <span className="text-gray-600">Instagram</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            Copyright 2004a greenfood.dor - All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
