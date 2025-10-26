import React from "react";
import hero from "../assets/hero_img.png";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row w-full h-auto md:h-[90vh] border border-black bg-white">
      {/* Left Side (Text Section) */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start px-8 md:px-16 space-y-6">
        {/* Top Line */}
        <div className="flex items-center justify-center md:justify-start gap-3">
          <span className="w-10 h-0.5 bg-gray-400"></span>
          <p className="text-sm tracking-widest text-gray-600 font-semibold">
            OUR BEST SELLER
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Latest Arrivals
        </h1>

        {/* Bottom (Shop Now) */}
        <div className="flex items-center justify-center md:justify-start gap-3 cursor-pointer group">
          <p className="text-sm md:text-base font-medium text-gray-600 group-hover:text-pink-600 transition">
            SHOP NOW
          </p>
          <span className="w-10 h-0.5 bg-gray-400 group-hover:bg-pink-600 transition"></span>
        </div>
      </div>

      {/* Right Side (Image Section) */}
      <div className="flex-1 flex justify-center items-center m-0">
        <img src={hero} alt="Hero" className="w-full h-full object-cover" />
      </div>
    </section>
  );
}
