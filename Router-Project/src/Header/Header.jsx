import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        Qa <span>zi</span>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>User</li>
      </ul>
    </div>
  );
}
