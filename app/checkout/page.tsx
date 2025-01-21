"use client";

import React from "react";
import { useCart } from "@/app/context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Checkout = () => {
  const { cart, clearCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent form submission
    alert("Order placed successfully!");
    clearCart();
  };

  return (
    <div>
        <Navbar />
    <div className="container mx-auto px-12 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {/* Order Summary */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="border p-4 rounded">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div className="border-t pt-4 flex justify-between items-center">
              <span className="text-lg font-bold">Total:</span>
              <span className="text-lg font-bold">${calculateTotal().toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Delivery Details */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Delivery Details</h2>
        <form className="space-y-4">
            <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-600 font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              placeholder="Haris Awan"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-600 font-medium mb-2">
              Contact
            </label>
            <input
              type="tel"
              className="w-full border p-2 rounded"
              placeholder="+92 123456789"
              required
            />
          </div>
          </div>
          <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-600 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full border p-2 rounded"
              placeholder="abc@gmail.com" required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-600 font-medium mb-2">
              Address
            </label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              placeholder="Plot #123 B-3 Baldia Town"
              required
            />
          </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-600 font-medium mb-2">City</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                placeholder="Karachi"
                required 
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-600 font-medium mb-2">ZIP</label>
              <input
                type="number"
                className="w-full border p-2 rounded"
                placeholder="75760"
                required
              />
            </div>
          </div>
        </form>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
        type="submit"
      >
        Place Order
      </button>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
