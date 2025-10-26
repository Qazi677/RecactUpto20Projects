import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const currency = "$";
  const delivery_charges = 10;

  // Fetch products from Fake Store API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Add product to cart
  const addToCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  // Remove product completely
  const removeFromCart = (id) => {
    setCart((prev) => {
      const newCart = { ...prev };
      delete newCart[id];
      return newCart;
    });
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart((prev) => {
      if (prev[id] > 1) {
        return { ...prev, [id]: prev[id] - 1 };
      } else {
        const newCart = { ...prev };
        delete newCart[id];
        return newCart;
      }
    });
  };

  // Calculate total price
  const getTotalPrice = () => {
    let total = 0;
    for (const id in cart) {
      const product = products.find((p) => p.id === Number(id));
      if (product) total += product.price * cart[id];
    }
    return total;
  };

  // Calculate total items
  const getCartCount = () => {
    return Object.values(cart).reduce((a, b) => a + b, 0);
  };

  // Clear entire cart
  const clearCart = () => {
    setCart({});
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        currency,
        delivery_charges,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getTotalPrice,
        getTotalItems,
        clearCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
