"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

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

const BestsellerProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Fetch product data from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"][0..11]{
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
        setIsLoading(false); // Stop the loader
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-10 px-4 md:px-4 lg:px-16">
      <div className="text-center mb-8">
        <p className="text-2xl text-[#737373]">Featured Products</p>
        <h2 className="text-2xl font-bold text-[#252B42]">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-[#737373] text-sm">
          Browse our selection of top-quality products.
        </p>
      </div>

      <div className="lg:px-40 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {isLoading ? (
          // Loader UI
          <div className="col-span-full flex justify-center items-center">
            <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
          </div>
        ) : products.length > 0 ? (
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

                <button className="absolute w-full inset-0 bg-black rounded-lg bg-opacity-40 text-white font-semibold text-lg opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
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
                  ${(
                    product.price *
                    (1 - product.discountPercent / 100)
                  ).toFixed(2)}
                </p>
              </div>
              <div className="flex justify-center items-center mt-2 space-x-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border border-gray-300 cursor-pointer"
                    style={{ backgroundColor: color.toLowerCase() }}
                  ></div>
                ))}
              </div>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                <Link href={`/shop/${product._id}`}>View Detail</Link>
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products available</p>
        )}
      </div>
    </section>
  );
};

export default BestsellerProducts;
