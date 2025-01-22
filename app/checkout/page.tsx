"use client";

import React, { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

interface FormData {
  name: string;
  contact: string;
  email: string;
  address: string;
  city: string;
  zip: string;
}

interface Errors {
  [key: string]: string;
}

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contact: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.contact) newErrors.contact = "Contact is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.zip) newErrors.zip = "ZIP code is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fill in all the fields.");
      return;
    }

    setIsOrderPlaced(true);
    clearCart();
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-12 py-8">
        {!isOrderPlaced ? (
          <>
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
              <form className="space-y-4" onSubmit={handleCheckout}>

                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-gray-600 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full border p-2 rounded ${errors.name ? "border-red-500" : ""}`}
                      placeholder="Haris Awan"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-600 font-medium mb-2">Contact</label>
                    <input
                      type="tel"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      className={`w-full border p-2 rounded ${errors.contact ? "border-red-500" : ""}`}
                      placeholder="+92 123456789"
                    />
                    {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-gray-600 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full border p-2 rounded ${errors.email ? "border-red-500" : ""}`}
                      placeholder="abc@gmail.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-600 font-medium mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full border p-2 rounded ${errors.address ? "border-red-500" : ""}`}
                      placeholder="Plot #123 B-3 Baldia Town"
                    />
                    {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-gray-600 font-medium mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className={`w-full border p-2 rounded ${errors.city ? "border-red-500" : ""}`}
                      placeholder="Karachi"
                    />
                    {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-600 font-medium mb-2">ZIP</label>
                    <input
                      type="number"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className={`w-full border p-2 rounded ${errors.zip ? "border-red-500" : ""}`}
                      placeholder="75760"
                    />
                    {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
                >
                  Place Order
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
            <p className="text-lg mb-8">Your order has been placed successfully.</p>
            <p className="text-gray-500">Your cart is now empty. Browse our shop for more amazing products!</p>
            <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
              <Link href="/shop">Continue Shopping</Link>
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;