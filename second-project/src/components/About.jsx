import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About AUTONO</h1>
        <p>
          We are redefining the future of mobility with self-driving technology,
          clean energy, and innovation that puts people first.
        </p>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            AUTONO was founded with a mission to create safer, smarter, and more
            sustainable transportation. Our team of engineers, designers, and
            innovators work together to make autonomous driving a reality for
            everyone.
          </p>

          <h2>Our Mission</h2>
          <p>
            To build technology that saves lives, reduces traffic, and makes the
            world cleaner for the generations to come.
          </p>

          <h2>Our Values</h2>
          <ul>
            <li>🌍 Sustainability</li>
            <li>🚗 Innovation</li>
            <li>🤝 Safety & Trust</li>
            <li>💡 Simplicity</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
