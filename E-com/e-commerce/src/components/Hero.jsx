import React from "react";
import { assets } from "../assets/assets";


export default function Hero() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between border border-gray-300 bg-white">
      {/* hero left side */}
      <div className="flex w-full sm:w-1/2 items-center justify-center py-10 px-6 text-center sm:text-left">
        <div className="text-[#414141] space-y-4">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <p className="w-8 h-[2px] bg-[#414141]"></p>
            <p className="font-medium tracking-wide">OUR BESTSELLER</p>
          </div>

          <h1 className="leading-snug text-3xl sm:text-4xl md:text-5xl font-bold">
            Latest Arrivals
          </h1>

          <div className="flex items-center justify-center sm:justify-start gap-2 font-semibold">
            <p className="font-medium cursor-pointer hover:underline">
              SHOP NOW
            </p>
            <p className="w-8 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* right section */}
      <div className="w-full sm:w-1/2 flex justify-center">
        <img
          className="w-full h-auto object-cover"
          src={assets.hero_img}
          alt="Hero"
        />
      </div>
     
    </div>
  );
}
