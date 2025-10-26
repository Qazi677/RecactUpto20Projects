import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/Shopcontext";
import { toast } from "react-toastify";

export default function Product() {
  const { id } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  // ✅ Fetch product by ID
  const fetchData = () => {
    const foundProduct = products.find((item) => item._id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setImage(foundProduct.image[0]);
    }
  };

  useEffect(() => {
    if (products && products.length > 0) {
      fetchData();
    }
  }, [id, products]);

  // ✅ Handle Add to Cart click
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select the product size before adding to cart");
      return;
    }
    addToCart(product._id, selectedSize);
    toast.success(`${product.name} added to cart!`);
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-gray-600">
        Loading product details...
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-10 sm:mx-24 my-10">
      {/* ---------- Left Side: Product Images ---------- */}
      <div className="flex flex-col sm:w-1/2 items-center">
        <img
          src={image}
          alt={product.name}
          className="w-[400px] h-[400px] object-contain"
        />

        {/* Thumbnail Images */}
        <div className="flex gap-4 mt-4">
          {product.image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="thumbnail"
              onClick={() => setImage(img)}
              className={`w-20 h-20 object-cover border cursor-pointer ${
                image === img ? "border-2 border-amber-700" : "border-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ---------- Right Side: Product Info ---------- */}
      <div className="flex flex-col sm:w-1/2 justify-center">
        <h1 className="text-3xl font-semibold mb-2 text-gray-900">
          {product.name}
        </h1>
        <p className="text-lg text-gray-700 mb-4">{product.description}</p>

        <p className="text-2xl font-bold text-black mb-4">${product.price}</p>

        {/* Sizes */}
        <div className="mb-5">
          <h2 className="text-lg font-medium mb-2">Select Size</h2>
          <div className="flex gap-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded-md ${
                  selectedSize === size
                    ? "bg-black text-white border-amber-800"
                    : "border-gray-400 text-gray-800"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className={`mt-3 px-6 py-3 rounded-md font-semibold transition-all ${
            selectedSize
              ? "bg-black text-white hover:bg-amber-900"
              : "bg-gray-400 text-gray-200 cursor-pointer"
          }`}
        >
          Add to Cart
        </button>

        {/* Category & Extra Info */}
        <div className="mt-8 text-gray-500">
          <p>Category: {product.category}</p>
          <p>Subcategory: {product.subCategory}</p>
          {product.bestseller && (
            <span className="text-sm text-amber-700 font-semibold mt-2 block">
              ★ Bestseller
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
