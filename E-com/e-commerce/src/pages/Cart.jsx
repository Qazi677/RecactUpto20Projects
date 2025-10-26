import React, { useContext } from "react";
import { ShopContext } from "../context/Shopcontext";
import { Trash2 } from "lucide-react";

export default function Cart() {
  const {
    cartItem,
    products,
    currency,
    delivery_charges,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(ShopContext);

  // Get all cart items
  const cartProducts = Object.keys(cartItem).flatMap((itemId) =>
    Object.keys(cartItem[itemId]).map((size) => {
      const product = products.find((p) => p._id === itemId);
      return { ...product, size, quantity: cartItem[itemId][size] };
    })
  );

  // Calculate totals
  const subtotal = cartProducts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal + delivery_charges;

  return (
    <div className="sm:mx-24 mx-4 my-10">
      <h2 className="text-2xl font-semibold border-b pb-3 mb-6">
        YOUR <span className="text-gray-500">CART</span>
      </h2>

      <div className="flex flex-col sm:flex-row gap-8">
        {/* ---------- Left: Cart Items ---------- */}
        <div className="flex-1">
          {cartProducts.length === 0 ? (
            <p className="text-gray-500 text-lg">Your cart is empty.</p>
          ) : (
            cartProducts.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b py-4"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4 w-1/2">
                  <img
                    src={item.image[0]}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-gray-600">{currency + item.price}</p>
                    <span className="border px-2 py-1 text-sm text-gray-700">
                      {item.size}
                    </span>
                  </div>
                </div>

                {/* Quantity controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item._id, item.size)}
                    className="border px-2 py-1"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    readOnly
                    className="border w-10 text-center"
                  />
                  <button
                    onClick={() => increaseQuantity(item._id, item.size)}
                    className="border px-2 py-1"
                  >
                    +
                  </button>
                </div>

                {/* Delete */}
                <Trash2
                  className="text-gray-500 cursor-pointer hover:text-black"
                  onClick={() => removeFromCart(item._id, item.size)}
                />
              </div>
            ))
          )}
        </div>

        {/* ---------- Right: Cart Totals ---------- */}
        <div className="sm:w-1/3 border p-6 rounded-md h-fit">
          <h3 className="text-lg font-semibold border-b pb-2 mb-4">
            CART <span className="text-gray-600">TOTALS</span>
          </h3>
          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>{currency + subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping Fee</p>
              <p>{currency + delivery_charges.toFixed(2)}</p>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2 mt-2">
              <p>Total</p>
              <p>{currency + total.toFixed(2)}</p>
            </div>
          </div>

          <button className="w-full mt-6 bg-black text-white py-3 hover:bg-gray-900 transition-all">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
