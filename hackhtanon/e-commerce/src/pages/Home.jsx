import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";
import Tittle from "../components/Tittle";
import Newsletter from "../components/Newslatter";
import { BarLoader } from "react-spinners";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 3)); // First 3 products for latest collection
        setBestSellers(data.slice(3, 6)); // Next 3 products for best sellers
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  if (loading)
    return (
      <div className="flex items-center h-screen w-full justify-center max-w-full">
        <BarLoader />
      </div>
    );

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Latest Collection Section */}
      <section className="w-full py-12 px-6 md:px-16">
        <div className="flex flex-col items-center space-y-4 mb-8 text-3xl text-center">
          <Tittle tex1={"OUR"} text2={"LATEST COLLECTION"} />
          <p className="text-sm sm:text-base md:text-[16px] text-gray-600 max-w-xl">
            Discover our newest arrivals — handpicked just for you. Trendy,
            comfortable, and made with love.
          </p>
        </div>

        {/* Product Grid (3 items only) */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Best Seller Section */}
      <section className="w-full py-12 px-6 md:px-16 bg-gray-50">
        <div className="flex flex-col items-center space-y-4 mb-8 text-3xl text-center">
          <Tittle tex1={"OUR"} text2={"BEST SELLER"} />
          <p className="text-sm sm:text-base md:text-[16px] text-gray-600 max-w-xl">
            Customer favorites that never go out of style. Quality meets comfort
            in every piece.
          </p>
        </div>

        {/* Best Seller Product Grid (3 items only) */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="py-3.5">
          {" "}
          <Newsletter />
        </div>
      </section>
    </>
  );
}
