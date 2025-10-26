// src/context/CartContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 🛒 cartItems is an array of objects: {id, title, price, image, quantity}
  const [cartItems, setCartItems] = useState([]);

  // 🧠 Add to Cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // ➕ Increase Quantity
  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 💰 Get total price
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // 🧾 Get total item count
  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  // 🧹 Clear cart after checkout
  const clearCart = () => setCartItems([]);

  // 💾 Persist cart to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log(cartItems);
    
  }, [cartItems]);

  // ♻️ Load saved cart on refresh
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cartItems"));
    if (saved) setCartItems(saved);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        getTotalPrice,
        getCartCount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
