import React from "react";
import "./Technology.css";

export default function Technology() {
  return (
    <div className="technology-page">
      {/* Hero Section */}
      <section className="tech-hero">
        <h1>Our Cutting-Edge Technology</h1>
        <p>
          Discover how AUTONO is revolutionizing the future of self-driving cars
          with AI, sensors, and sustainable innovation.
        </p>
      </section>

      {/* Features Section */}
      <section className="tech-features">
        <div className="feature-card">
          <h3>🚗 Autonomous Driving</h3>
          <p>
            Powered by advanced AI algorithms, our system ensures safe and
            reliable autonomous navigation in all conditions.
          </p>
        </div>
        <div className="feature-card">
          <h3>🔋 Sustainable Energy</h3>
          <p>
            Our vehicles run on clean, renewable energy sources for a greener
            and smarter future.
          </p>
        </div>
        <div className="feature-card">
          <h3>📡 Smart Sensors</h3>
          <p>
            Equipped with LiDAR, radar, and HD cameras to perceive the world
            with unmatched precision.
          </p>
        </div>
        <div className="feature-card">
          <h3>🌐 Connected Network</h3>
          <p>
            Our cars communicate with each other and the infrastructure to
            create a safer and more efficient transport system.
          </p>
        </div>
      </section>
    </div>
  );
}
