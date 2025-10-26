import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-logo">AUTONO</div>
      <div className="navigation">
        <ul>
          <li>Technology</li>
          <li>About</li>
          <li>Career</li>
          <li>
            <button className="subscribe-btn">Subscribe</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
