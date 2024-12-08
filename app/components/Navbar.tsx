"use client"
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="py-5 px-9">
      <div className="flex justify-between items-center">
       
        <div className="text-[#252B42] font-bold text-2xl">Bandage</div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex text-[#737373] space-x-6 text-sm font-bold">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Pages</li>
        </ul>

        <div className="flex items-center gap-7">
          <img src="/images/search.png" alt="Search" className="h-4" />
          <div className="flex items-center">
            <img src="/images/cart.png" alt="Cart" className="h-4" />
            <p className="text-[#23A6F0] text-xs">1</p>
          </div>
          <div className="hidden lg:flex items-center">
            <img src="/images/love.png" alt="Favorites" className="h-4" />
            <p className="text-[#23A6F0] text-xs">1</p>
          </div>

          {/* Mobile Menu */}
          <button
            className="lg:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            <img src="/images/menu-icon.png" className="h-4" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden mt-5 flex flex-col items-center space-y-4 text-[#737373] text-lg bg-white py-4">
          <ul className="space-y-3">
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
