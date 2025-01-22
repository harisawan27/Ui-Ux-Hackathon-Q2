"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { Grid, List } from "lucide-react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "@/app/context/CartContext";

// Define the Product interface
export interface Product {
  _id: string;
  name: string;
  imageUrl: string | null;
  discountPercent: number;
  isNew: boolean;
  colors: string[];
  price: number;
}

// Initialize the Sanity image URL builder
const builder = imageUrlBuilder(client);

// Helper function to build image URLs
const urlFor = (source: any) => builder.image(source).width(300).height(300).url();

const AllProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  const { addToCart } = useCart();

  // Fetch product data from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        _id,
        name,
        imageURL,
        discountPercent,
        isNew,
        colors,
        price
      }`;

      try {
        const sanityProducts = await client.fetch(query);

        // Transform products to build proper image URLs
        const transformedProducts = sanityProducts.map((product: any) => ({
          ...product,
          imageUrl: product.imageURL?.asset ? urlFor(product.imageURL) : null,
        }));

        setProducts(transformedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto px-12 py-8">
        {/* Loader */}
        {loading && (
          <div className="flex justify-center items-center h-96">
            <div className="loaderTwo border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
          </div>
        )}

        {!loading && (
          <>
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
              className="w-{300px} h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
              <h3 className="text-xl font-bold">HOODIES</h3>
              <p>2 Items</p>
            </div>
          </div>

          {/* Category 2 */}
          <div className="relative">
            <img
              src="/images/card-cover-6.jpg"
              alt="Category 2"
              className="w-{300px} h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
              <h3 className="text-xl font-bold">PANTS</h3>
              <p>3 Items</p>
            </div>
          </div>

          {/* Category 3 */}
          <div className="relative">
            <img
              src="/images/card-cover-7.jpg"
              alt="Category 3"
              className="w-{300px} h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
              <h3 className="text-xl font-bold">T-SHIRTS</h3>
              <p>5 Items</p>
            </div>
          </div>

          {/* Category 4 */}
          <div className="relative">
            <img
              src="/images/card-cover-8.jpg"
              alt="Category 4"
              className="w-{300px} h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
              <h3 className="text-xl font-bold">FULL SLEEVES SHIRT</h3>
              <p>3 Items</p>
            </div>
          </div>

          {/* Category 5 */}
          <div className="relative">
            <img
              src="/images/card-cover-9.jpg"
              alt="Category 5"
              className="w-{300px} h-[300px] object-cover "
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
              <h3 className="text-xl font-bold">JEANS</h3>
              <p>2 Items</p>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap justify-between items-center mb-8">
          <span>Showing all available results</span>
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

        {/* Product Grid */}
        <div className="lg:px-40 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.length > 0 ? (
                products.map((product) => (
                  <div key={product._id} className="text-center">
                    <div className="relative mb-4">
                      {product.imageUrl ? (
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          layout="responsive"
                          width={239}
                          height={296}
                          className="rounded-lg"
                        />
                      ) : (
                        <div className="w-full h-[296px] bg-gray-200 rounded-lg flex items-center justify-center">
                          <p className="text-gray-500">No Image Available</p>
                        </div>
                      )}

                      {/* New Tag */}
                      {product.isNew && (
                        <span className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
                          New
                        </span>
                      )}

                      {/* Discount Tag */}
                      {product.discountPercent > 0 && (
                        <span className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
                          {product.discountPercent}% Off
                        </span>
                      )}

                      <button
                        className="absolute w-full inset-0 bg-black rounded-lg bg-opacity-40 text-white font-semibold text-lg opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"
                        onClick={() =>
                          addToCart({
                            id: product._id,
                            name: product.name,
                            imageUrl: product.imageUrl,
                            price:
                              product.price *
                              (1 - product.discountPercent / 100),
                            quantity: 1,
                          })
                        }
                      >
                        Add to Cart
                      </button>
                    </div>
                    <h3 className="text-base font-bold text-gray-900">
                      {product.name}
                    </h3>
                    <div className="flex justify-center items-center space-x-2 mt-2">
                      <p className="text-[#BDBDBD] font-bold line-through">
                        {product.discountPercent > 0
                          ? product.price.toFixed(2)
                          : null}
                      </p>
                      <p className="text-[#23856D] font-bold">
                        $
                        {(
                          product.price *
                          (1 - product.discountPercent / 100)
                        ).toFixed(2)}
                      </p>
                    </div>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                      <Link href={`/shop/${product._id}`}>View Detail</Link>
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">
                  No products available
                </p>
              )}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;