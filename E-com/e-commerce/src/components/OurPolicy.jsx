import React from "react";
import { assets } from "../assets/assets";

export default function OurPolicy() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 py-10 gap-8 text-center">
      <div className="flex flex-col items-center bg-white p-6 ">
        <img
          src={assets.exchange_icon}
          alt=""
          className="w-10 h-10 object-contain mb-3"
        />
        <p className="text-lg font-semibold text-gray-800">
          Easy Exchange Policy
        </p>
        <p className="text-sm text-gray-500">
          We offer hassle free exchange policy
        </p>
      </div>
      <div className="flex flex-col items-center bg-white">
        <img
          src={assets.quality_icon}
          alt=""
          className="w-10 h-10 object-contain mb-3"
        />
        <p className="text-lg font-semibold text-gray-800">
          7 Days Return Policy
        </p>
        <p className="text-sm text-gray-500">
          We provide 7 days free return policy
        </p>
      </div>
      <div className="flex flex-col items-center bg-white  p-6 ">
        <img
          src={assets.support_img}
          alt=""
          className="w-10 h-10 object-contain mb-3"
        />
        <p className="text-lg font-semibold text-gray-800">
          Best customer support
        </p>
        <p className="text-sm text-gray-500">
          we provide 24/7 customer support
        </p>
      </div>
    </div>
  );
}
