import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem({ id, name, price, image }) {
  return (
    <Link to={`/product/${id}`}>
      <div className="hover:scale-105 transition-all duration-300 cursor-pointer p-3 flex flex-col justify-between">
        <img
          src={image[0]}
          alt={name}
          className="w-full object-contain"
        />
        <div className="text-center">
          <p>{name}</p>
        </div>
        <div>
          <p className="text-gray-700 font-semibold text-lg">$ {price}</p>
        </div>
      </div>
    </Link>
  );
}
