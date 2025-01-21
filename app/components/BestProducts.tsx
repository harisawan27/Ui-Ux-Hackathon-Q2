"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { stringToPath } from "sanity";
import urlBuilder from "@sanity/image-url";

// Define the Product interface
export interface Product {
  _id: string;
  name: string;
  imageUrl: string;
  category: string;
  discountPercent: number;
  isNew: boolean;
  colors: string[];
  description: string;
  price: number;
  sizes: string[];
}

const BestsellerProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch product data from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        _id,
        name,
        "imageUrl": image.asset->url,
        category,
        discountPercent,
        isNew,
        colors,
        description,
        price,
        sizes
      }`;

      const sanityProducts = await client.fetch<Product[]>(query);

      console.log("Fetched Products:", sanityProducts); // Debug fetched data

      const transformedProducts = sanityProducts.map((product) => ({
        ...product
      }));

      setProducts(transformedProducts);
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
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="text-center">
              <div className="relative mb-4">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  layout="responsive"
                  width={239}
                  height={296}
                  className="rounded-lg"
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
                    New
                  </span>
                )}
              </div>
              <h3 className="text-base font-bold text-gray-900">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <div className="flex justify-center items-center space-x-2 mt-2">
                <p className="text-[#BDBDBD] font-bold line-through">
                 {product.price.toFixed(2)}
                </p>
                <p className="text-[#23856D] font-bold">
                  {(product.price * (1 - product.discountPercent / 100)).toFixed(2)}
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
              <p className="text-sm text-gray-500 mt-4">
                {product.description}
              </p>
              <div className="flex justify-center items-center space-x-2 mt-2">
                <span className="text-xs text-gray-500">Available Sizes:</span>
                {product.sizes.map((size, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 border border-gray-300 text-xs rounded"
                  >
                    {size}
                  </span>
                ))}
              </div>
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
