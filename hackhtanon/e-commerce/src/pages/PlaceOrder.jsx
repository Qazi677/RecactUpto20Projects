import React, { useState, useContext } from "react";
import {
  CreditCard,
  Truck,
  Shield,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function PlaceOrder() {
  const { cartItems, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  const subtotal = getTotalPrice();
  const shipping = 5.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg p-6 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 mb-4 text-sm">
            Thank you for your purchase. Your order has been confirmed and will
            be shipped soon.
          </p>
          <div className="space-y-2">
            <Link
              to="/"
              className="w-full bg-pink-600 text-white py-2 rounded-lg font-medium hover:bg-pink-700 transition text-sm block"
            >
              Continue Shopping
            </Link>
            <Link
              to="/order"
              className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition text-sm block"
            >
              View Order Details
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 text-sm sm:text-base">
          <Link
            to="/cart"
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Cart
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Checkout
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Left Column - Form */}
          <div className="space-y-4">
            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                Contact Info
              </h2>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                required
              />
            </div>

            {/* Shipping Address */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3">
                <Truck className="w-4 h-4 text-pink-600" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Shipping Address
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="sm:col-span-2 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                  required
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                  required
                />
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal code"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                  required
                />
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3">
                <CreditCard className="w-4 h-4 text-pink-600" />
                <h2 className="text-lg font-semibold text-gray-900">Payment</h2>
              </div>
              <div className="space-y-2">
                <input
                  type="text"
                  name="nameOnCard"
                  placeholder="Name on card"
                  value={formData.nameOnCard}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                  required
                />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                  required
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                    required
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="space-y-3">
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5 sticky top-4 flex flex-col gap-3">
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                Order Summary
              </h2>

              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center p-1">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 line-clamp-2">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-600">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}

              <div className="border-t border-gray-200 pt-2 space-y-1 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-gray-900 text-base border-t border-gray-200 pt-1">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Secure checkout</span>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-black text-white py-2 rounded-lg font-medium text-sm hover:bg-white hover:text-black transition mt-2"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
