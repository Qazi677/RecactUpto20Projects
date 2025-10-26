import React, { useContext } from "react";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Tittle from "../components/Tittle";

export default function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getTotalPrice,
    clearCart,
  } = useContext(CartContext);

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="bg-pink-50 p-6 rounded-2xl max-w-sm">
          <ShoppingBag className="w-20 h-20 text-gray-700  mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Your Cart Feels Light
          </h2>
          <p className="text-gray-600 mb-6 text-base">
            Discover amazing products and fill your cart with style
          </p>
          <Link
            to="/collection"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition font-medium text-base shadow"
          >
            Start Shopping
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-3xl font-bold text-gray-900 mb-2">
            <Tittle tex1={"SHOPPING"} text2={"CART"} />
          </div>
          <p className="text-gray-600 text-base">
            {cartItems.reduce((acc, item) => acc + item.quantity, 0)} items in
            your cart
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-1 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-4 flex items-center gap-4"
              >
                {/* Product Image */}
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center p-2 shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-pink-600 font-medium mt-1 text-sm">
                    ${item.price.toFixed(2)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-white 200 transition"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-2 text-sm font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-white transition"
                    >
                      <Plus className="w-3 h-3" />
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-2 text-red-500 hover:text-red-700 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Item Total */}
                <div className="text-right text-sm font-semibold text-gray-900 min-w-[50px]">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:w-80">
            <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-3 sticky top-6">
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                Order Summary
              </h2>

              <div className="flex justify-between text-gray-600 text-sm">
                <span>Subtotal</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm">
                <span>Items</span>
                <span>
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </div>

              <div className="border-t border-gray-200 pt-2 flex justify-between text-gray-900 font-bold text-base">
                <span>Total</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>

              <Link
                to="/checkout"
                className="w-full bg-black text-white py-2 rounded-lg font-medium text-sm hover:bg-white hover:text-black transition flex items-center justify-center gap-1"
              >
                Checkout
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={clearCart}
                className="w-full border border-gray-300 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition text-sm"
              >
                Clear Cart
              </button>

              <Link
                to="/collection"
                className="w-full text-center text-black py-2 font-medium text-sm hover:text-gray-700 transition"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
