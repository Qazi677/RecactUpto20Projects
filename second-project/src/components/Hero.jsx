import React from "react";
import "./Hero.css";

import heroImage from "../assets/second-content.avif";
import thirdImage from "../assets/third.avif";
export default function Hero() {
  return (
    <div className="hero-section">
      <div className="first-content">
        <h1>
          THE FUTURE OF <br />
          MOBILITY IS HERE
        </h1>
        <p>Discover the safest self-driving experience with Autono.</p>
      </div>
      <div className="second-content">
        <div className="left">
          <p>VISION</p>
          <h3>We’re Changing the Way the World Thinks About Cars</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <div className="right">
          <img src={heroImage} alt="car vission" />
        </div>
      </div>
      <div className="second-content third">
        <div className="left">
          <p>SERVICES</p>
          <h3>We Deliver Exceptional Products and Services Around the World</h3>
        </div>
      </div>
      <div className="autonomous">
        <div className="left-text">
          <h3>AUTONOMOUS DRIVING</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <button>Read More</button>
        </div>
        <div className="right-image">
          <img src={thirdImage} alt="" />
        </div>
      </div>
    </div>
  );
}
