import React, { useContext, useEffect, useState } from "react";
import Tittle from "./Tittle";
import { ShopContext } from "../context/Shopcontext";
import ProductItem from "./ProductItem";

export default function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestproducsts, setLatestproducts] = useState([]);

  useEffect(() => {
    setLatestproducts(products.slice(0, 10));
  }, []);

  return (
    <div>
      {/* Title Section */}
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex justify-center mt-4 mb-2 text-4xl">
          <Tittle tex1="LATEST" text2="COLLECTION" />
        </div>
        <p className="text-gray-500 max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          laborum sequi doloremque aspernatur.
        </p>
      </div>

      {/* Product Grid */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {latestproducsts.map((items, index) => (
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
