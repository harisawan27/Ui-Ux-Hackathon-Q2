"use client";

import React from "react";
import { useCart } from "@/app/context/CartContext";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCart();

  return (
    <div>
      <Header />
      <Navbar />

      <div className="container mx-auto px-12 py-8">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border rounded-lg flex flex-col items-center"
                >
                  <img
                    src={item.imageUrl || "/placeholder.png"}
                    alt={item.name}
                    className="w-32 h-32 object-cover mb-4"
                  />
                  <h2 className="font-bold text-lg mb-2">{item.name}</h2>
                  <p className="text-gray-500 mb-2">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mb-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded-l"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded-r"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="mt-2 text-red-500"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center border-t pt-4">
              <h2 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
              <div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                  <Link href="/checkout">Checkout</Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
