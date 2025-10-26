import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="group flex flex-col justify-between items-center text-center bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 p-4 h-[380px]">
      {/* Product Image */}
      <div className="w-full flex justify-center bg-gray-50 rounded-2xl overflow-hidden h-44 md:h-52">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="w-full flex flex-col justify-between grow mt-3 px-2">
        <div className="space-y-1">
          <h3 className="font-normal text-gray-800 text-sm md:text-base line-clamp-2">
            {product.title}
          </h3>
          <p className="text-sm font-semibold text-gray-800 text-left">
            ${product.price}
          </p>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="w-full mt-4 text-black py-2 border border-black rounded-lg text-sm md:text-base font-medium hover:bg-black hover:text-white transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
