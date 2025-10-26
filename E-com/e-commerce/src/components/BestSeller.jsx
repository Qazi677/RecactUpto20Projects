import React from "react";
import Tittle from "./Tittle";
import { useContext } from "react";
import { ShopContext } from "../context/Shopcontext";
import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

export default function BestSeller() {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const bestProducts = products.filter((items) => items.bestseller);
    setBestSeller(bestProducts.slice(0, 5));
  }, []);
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex justify-center mt-4 mb-2 text-4xl">
          <Tittle tex1="BEST" text2="SELLER" />
        </div>
        <p className="text-gray-500 max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {bestSeller.map((items, index) => (
          <ProductItem
            key={index}
            id={items._id}
            name={items.name}
            price={items.price}
            image={items.image}
          />
        ))}
      </div>
    </div>
  );
}
