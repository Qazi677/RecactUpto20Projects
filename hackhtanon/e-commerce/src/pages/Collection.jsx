import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { BarLoader } from "react-spinners";
import Navbar from "../components/Navbar"; // Make sure Navbar path is correct

export default function Collection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products"); // example API
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center h-screen w-full justify-center max-w-full">
        <BarLoader />
      </div>
    );
  }

  return (
    <>
      {/* Navbar with search */}

      {/* Products Grid */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </>
  );
}
