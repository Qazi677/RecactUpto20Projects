import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1 */}
        <div className="footer-column">
          <h3>Autono</h3>
          <p>
            The future of mobility is here. Discover the safest 
            self-driving experience with us.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#vision">Vision</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Autono. All rights reserved.
      </div>
    </footer>
  );
}
