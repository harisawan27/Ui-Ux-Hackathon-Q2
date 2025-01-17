"use client";
import React from "react";
import Image from "next/image";
import {
  Grid,
  List,
} from "lucide-react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Shop() {
  return (
    <div>
      <Header />
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-12 py-8">
        {/* Shop Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Shop</h1>
          <div className="flex items-center">
            <span className="text-gray-500">Home</span>
            <span className="mx-2">/</span>
            <span>Shop</span>
          </div>
        </div>

        {/* Category Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {/* Category 1 */}
          <div className="relative">
            <img
              src="/images/card-cover-5.jpg"
              alt="Category 1"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
              <h3 className="text-xl font-bold">CLOTHS</h3>
              <p>5 Items</p>
            </div>
          </div>

          {/* Category 2 */}
          <div className="relative">
            <img
              src="/images/card-cover-6.jpg"
              alt="Category 2"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
              <h3 className="text-xl font-bold">CLOTHS</h3>
              <p>5 Items</p>
            </div>
          </div>

          {/* Category 3 */}
          <div className="relative">
            <img
              src="/images/card-cover-7.jpg"
              alt="Category 3"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
              <h3 className="text-xl font-bold">CLOTHS</h3>
              <p>5 Items</p>
            </div>
          </div>

          {/* Category 4 */}
          <div className="relative">
            <img
              src="/images/card-cover-8.jpg"
              alt="Category 4"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
              <h3 className="text-xl font-bold">CLOTHS</h3>
              <p>5 Items</p>
            </div>
          </div>

          {/* Category 5 */}
          <div className="relative">
            <img
              src="/images/card-cover-9.jpg"
              alt="Category 5"
              className="w-full h-[300px] object-cover "
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
              <h3 className="text-xl font-bold">CLOTHS</h3>
              <p>5 Items</p>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap justify-between items-center mb-8">
          <span>Showing all 12 results</span>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span>Views:</span>
              <Grid size={20} />
              <List size={20} />
            </div>
            <select className="border p-2 rounded">
              <option>Popularity</option>
              <option>Latest</option>
              <option>Price Low-High</option>
              <option>Price High-Low</option>
            </select>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Filter
            </button>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="flex justify-between items-center px-4 my-16">
          <img src="/images/hooli.png" alt="Hooli" className="h-20" />
          <img src="/images/lyft.png" alt="Lyft" className="h-20" />
          <img src="/images/pied-piper.png" alt="Pied Piper" className="h-20" />
          <img src="/images/stripe.png" alt="Stripe" className="h-20" />
          <img src="/images/aws.png" alt="AWS" className="h-24" />
          <img src="/images/reddit.png" alt="Reddit" className="h-24" />
        </div>

        <Footer />

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <Image
                src="/images/shop-product-1.png"
                alt="Product 1"
                width={240}
                height={300}
              />
              <button className="absolute w-[239px] inset-0 bg-black bg-opacity-40 text-white opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                Add to Cart
              </button>
            </div>
            <h3 className="font-bold">Graphic Design</h3>
            <p className="text-gray-500">English Department</p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 line-through">$16.48</span>
              <span className="text-blue-500">$6.48</span>
            </div>
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <div className="w-4 h-4 rounded-full bg-black"></div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <Image
                src="/images/shop-product-2.png"
                alt="Product 2"
                width={239}
                height={300}
              />
              <button className="absolute w-[239px] inset-0 bg-black bg-opacity-40 text-white opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                Add to Cart
              </button>
            </div>
            <h3 className="font-bold">Graphic Design</h3>
            <p className="text-gray-500">English Department</p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 line-through">$16.48</span>
              <span className="text-blue-500">$6.48</span>
            </div>
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <div className="w-4 h-4 rounded-full bg-black"></div>
            </div>
          </div>
          {/* Product 3 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <Image
                src="/images/shop-product-3.png"
                alt="Product 2"
                width={239}
                height={300}
              />
              <button className="absolute w-[239px] inset-0 bg-black bg-opacity-40 text-white opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                Add to Cart
              </button>
            </div>
            <h3 className="font-bold">Graphic Design</h3>
            <p className="text-gray-500">English Department</p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 line-through">$16.48</span>
              <span className="text-blue-500">$6.48</span>
            </div>
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <div className="w-4 h-4 rounded-full bg-black"></div>
            </div>
          </div>
          {/* Product 4 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <Image
                src="/images/shop-product-4.png"
                alt="Product 2"
                width={239}
                height={300}
              />
              <button className="absolute w-[239px] inset-0 bg-black bg-opacity-40 text-white opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                Add to Cart
              </button>
            </div>
            <h3 className="font-bold">Graphic Design</h3>
            <p className="text-gray-500">English Department</p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 line-through">$16.48</span>
              <span className="text-blue-500">$6.48</span>
            </div>
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <div className="w-4 h-4 rounded-full bg-black"></div>
            </div>
          </div>
          {/* Product 5 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <Image
                src="/images/shop-product-5.png"
                alt="Product 2"
                width={239}
                height={300}
              />
              <button className="absolute w-[239px] inset-0 bg-black bg-opacity-40 text-white opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                Add to Cart
              </button>
            </div>
            <h3 className="font-bold">Graphic Design</h3>
            <p className="text-gray-500">English Department</p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 line-through">$16.48</span>
              <span className="text-blue-500">$6.48</span>
            </div>
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <div className="w-4 h-4 rounded-full bg-black"></div>
            </div>
          </div>
          {/* Product 6 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <Image
                src="/images/shop-product-6.png"
                alt="Product 2"
                width={239}
                height={300}
              />
              <button className="absolute w-[239px] inset-0 bg-black bg-opacity-40 text-white opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                Add to Cart
              </button>
            </div>
            <h3 className="font-bold">Graphic Design</h3>
            <p className="text-gray-500">English Department</p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 line-through">$16.48</span>
              <span className="text-blue-500">$6.48</span>
            </div>
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <div className="w-4 h-4 rounded-full bg-black"></div>
            </div>
          </div>
          {/* Product 7 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <Image
                src="/images/shop-product-7.png"
                alt="Product 2"
                width={239}
                height={300}
              />
              <button className="absolute w-[239px] inset-0 bg-black bg-opacity-40 text-white opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                Add to Cart
              </button>
            </div>
            <h3 className="font-bold">Graphic Design</h3>
            <p className="text-gray-500">English Department</p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 line-through">$16.48</span>
              <span className="text-blue-500">$6.48</span>
            </div>
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <div className="w-4 h-4 rounded-full bg-black"></div>
            </div>
          </div>
          {/* Product 8 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <Image
                src="/images/shop-product-8.png"
                alt="Product 2"
                width={239}
                height={300}
              />
              <button className="absolute w-[239px] inset-0 bg-black bg-opacity-40 text-white opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                Add to Cart
              </button>
            </div>
            <h3 className="font-bold">Graphic Design</h3>
            <p className="text-gray-500">English Department</p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 line-through">$16.48</span>
              <span className="text-blue-500">$6.48</span>
            </div>
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <div className="w-4 h-4 rounded-full bg-black"></div>
            </div>
          </div>
          {/* Product 9 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <Image
                src="/images/shop-product-9.png"
                alt="Product 2"
                width={239}
                height={300}
              />
              <button className="absolute w-[239px] inset-0 bg-black bg-opacity-40 text-white opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                Add to Cart
              </button>
            </div>
            <h3 className="font-bold">Graphic Design</h3>
            <p className="text-gray-500">English Department</p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 line-through">$16.48</span>
              <span className="text-blue-500">$6.48</span>
            </div>
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <div className="w-4 h-4 rounded-full bg-black"></div>
            </div>
          </div>
          {/* Product 10 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <Image
                src="/images/shop-product-10.png"
                alt="Product 2"
                width={239}
                height={300}
              />
              <button className="absolute w-[239px] inset-0 bg-black bg-opacity-40 text-white opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                Add to Cart
              </button>
            </div>
            <h3 className="font-bold">Graphic Design</h3>
            <p className="text-gray-500">English Department</p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 line-through">$16.48</span>
              <span className="text-blue-500">$6.48</span>
            </div>
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <div className="w-4 h-4 rounded-full bg-black"></div>
            </div>
          </div>
          {/* Product 11 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <Image
                src="/images/shop-product-11.png"
                alt="Product 2"
                width={239}
                height={300}
              />
              <button className="absolute w-[239px] inset-0 bg-black bg-opacity-40 text-white opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                Add to Cart
              </button>
            </div>
            <h3 className="font-bold">Graphic Design</h3>
            <p className="text-gray-500">English Department</p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 line-through">$16.48</span>
              <span className="text-blue-500">$6.48</span>
            </div>
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <div className="w-4 h-4 rounded-full bg-black"></div>
            </div>
          </div>
          {/* Product 12 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <Image
                src="/images/shop-product-12.png"
                alt="Product 2"
                width={239}
                height={300}
              />
              <button className="absolute w-[239px] inset-0 bg-black bg-opacity-40 text-white opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                Add to Cart
              </button>
            </div>
            <h3 className="font-bold">Graphic Design</h3>
            <p className="text-gray-500">English Department</p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 line-through">$16.48</span>
              <span className="text-blue-500">$6.48</span>
            </div>
            <div className="flex space-x-2 mt-2">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <div className="w-4 h-4 rounded-full bg-black"></div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center my-12 space-x-2">
          <button className="px-4 py-2 border rounded">First</button>
          <button className="px-4 py-2 border rounded bg-blue-500 text-white">
            1
          </button>
          <button className="px-4 py-2 border rounded">2</button>
          <button className="px-4 py-2 border rounded">3</button>
          <button className="px-4 py-2 border rounded">Next</button>
        </div>
      </div>
    </div>
  );
}
