import React, { useContext, useEffect, useState } from "react";
import Tittle from "../components/Tittle";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ShopContext } from "../context/Shopcontext";
import ProductItem from "../components/ProductItem";

export default function Collection() {
  const [showFilters, setShowFilters] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const { products } = useContext(ShopContext);

  const [category, setCategory] = useState([]);
  const [subcat, setSubCat] = useState([]);
  const [sortOption, setSortOption] = useState("A");

  // ✅ Toggle Category Checkbox
  const toggleCategory = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };

  // ✅ Toggle Subcategory Checkbox
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    if (subcat.includes(value)) {
      setSubCat((prev) => prev.filter((item) => item !== value));
    } else {
      setSubCat((prev) => [...prev, value]);
    }
  };

  // ✅ Apply filters
  const applyFilter = () => {
    let productCopy = products.slice();

    // Filter by Category
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    // Filter by Subcategory
    if (subcat.length > 0) {
      productCopy = productCopy.filter((item) =>
        subcat.includes(item.subCategory)
      );
    }

    // Sort products
    if (sortOption === "B") {
      productCopy.sort((a, b) => a.price - b.price); // Low to High
    } else if (sortOption === "C") {
      productCopy.sort((a, b) => b.price - a.price); // High to Low
    }

    setAllProducts(productCopy);
  };

  // ✅ Reapply filter whenever filters/sort change
  useEffect(() => {
    applyFilter();
  }, [category, subcat, sortOption, products]);

  // ✅ Initial load
  useEffect(() => {
    setAllProducts(products);
  }, [products]);

  return (
    <div className="flex flex-col sm:flex-row gap-10 mt-10 mb-10 mx-3">
      {/* LEFT FILTER SECTION */}
      <div className="sm:w-60">
        {/* Filter Header (mobile only) */}
        <div
          className="flex justify-between items-center sm:hidden border-b border-gray-400 pb-2 mb-2 cursor-pointer"
          onClick={() => setShowFilters(!showFilters)}
        >
          <h1 className="text-2xl font-semibold">FILTER</h1>
          {showFilters ? <ChevronUp /> : <ChevronDown />}
        </div>

        {/* Filters: Hidden on mobile unless expanded */}
        <div
          className={`flex flex-col gap-5 transition-all duration-300 ${
            showFilters ? "block" : "hidden sm:flex"
          }`}
        >
          {/* CATEGORY */}
          <div className="border border-gray-300 px-3 py-2">
            <h1 className="font-semibold mb-2">CATEGORY</h1>
            <ul className="space-y-1.5">
              <li className="flex gap-2 items-center">
                <input type="checkbox" onChange={toggleCategory} value="Men" />
                <span>Men</span>
              </li>
              <li className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  onChange={toggleCategory}
                  value="Women"
                />
                <span>Women</span>
              </li>
              <li className="flex gap-2 items-center">
                <input type="checkbox" onChange={toggleCategory} value="Kids" />
                <span>Kids</span>
              </li>
            </ul>
          </div>

          {/* TYPES */}
          <div className="border border-gray-300 px-3 py-2">
            <h1 className="font-semibold mb-2">TYPES</h1>
            <ul className="space-y-1.5">
              <li className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  onChange={toggleSubCategory}
                  value="Topwear"
                />
                <span>Topwear</span>
              </li>
              <li className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  onChange={toggleSubCategory}
                  value="Bottomwear"
                />
                <span>Bottomwear</span>
              </li>
              <li className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  onChange={toggleSubCategory}
                  value="Winterwear"
                />
                <span>Winterwear</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* RIGHT COLLECTION SECTION */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <Tittle tex1="ALL" text2="COLLECTIONS" />
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-700 px-3 py-2 rounded-md appearance-none outline-none focus:border-amber-950 focus:ring-2 bg-white text-gray-800"
          >
            <option value="A">Sort by: Relevant</option>
            <option value="B">Sort by: Low to High</option>
            <option value="C">Sort by: High to Low</option>
          </select>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {allProducts.length > 0 ? (
            allProducts.map((items, index) => (
              <ProductItem
                key={index}
                id={items._id}
                name={items.name}
                price={items.price}
                image={items.image}
              />
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-full">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
