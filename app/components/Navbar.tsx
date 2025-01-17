"use client"
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div>
    {/* Navigation Bar */}
    <nav className="border-b">
    <div className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Bandage</Link>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/shop" className="hover:text-blue-500">Shop</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/" className="hover:text-blue-500">Blog</Link>
          <Link href="/" className="hover:text-blue-500">Contact</Link>
          <Link href="/" className="hover:text-blue-500">Pages</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4 text-blue-500">
          <span>Login / Register</span>
          <Search size={20} />
          <div className="flex items-center">
            <ShoppingCart size={20} />
            <span className="ml-1">1</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 font-semibold text-xl">
          <Link href="/" className="block py-2">Home</Link>
          <Link href="/shop" className="block py-2">Shop</Link> 
          <Link href="/about" className="block py-2">About</Link>
          <Link href="/" className="block py-2">Blog</Link>
          <Link href="/" className="block py-2">Contact</Link>
          <Link href="/" className="block py-2">Pages</Link>
          <Link href="/" className='block py-2 text-blue-500'>Login / Register</Link>
          <Search size={20} className='text-blue-500 my-2'/>
          <ShoppingCart size={20} className='text-blue-500 my-2'/>
        </div>
      )}
    </div>
  </nav>
  </div>
  );
};

export default Navbar;
