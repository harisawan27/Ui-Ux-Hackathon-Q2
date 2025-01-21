"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Next.js navigation hook for app directory
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useCart } from "@/app/context/CartContext" ; 

// Define the Product interface
export interface Product {
  _id: string;
  name: string;
  imageUrl: string | null;
  discountPercent: number;
  isNew: boolean;
  colors: string[];
  price: number;
  sizes: string[];
  category: string;
  description: string;
}

// Initialize the Sanity image URL builder
const builder = imageUrlBuilder(client);

// Helper function to build image URLs
const urlFor = (source: any) => builder.image(source).url();

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const { addToCart } = useCart(); 
  

  useEffect(() => {
    const productId = window.location.pathname.split("/").pop(); // Extract product ID from the URL
    if (productId) {
      const fetchProduct = async () => {
        const query = `*[_type == "product" && _id == $id]{
          _id,
          name,
          imageURL,
          discountPercent,
          isNew,
          colors,
          price,
          sizes,
          category,
          description
        }`;

        try {
          const sanityProduct = await client.fetch(query, { id: productId });

          if (sanityProduct.length > 0) {
            const transformedProduct = {
              ...sanityProduct[0],
              imageUrl: sanityProduct[0].imageURL?.asset
                ? urlFor(sanityProduct[0].imageURL)
                : null,
            };
            setProduct(transformedProduct);
          } else {
            setProduct(null); // Handle no product found
          }
        } catch (error) {
          console.error("Error fetching product:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    } else {
      setLoading(false); // No ID found; stop loading
    }
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <p>Loading...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center py-10">
        <p>Product not found.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Navbar />

      <div className="container mx-auto px-12 py-8">
        {/* Breadcrumb */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center text-gray-500">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>{product.category.toUpperCase()}</span>
            <span className="mx-2">/</span>
            <span>{product.name}</span>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="relative">
            {product.imageUrl ? (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">No Image Available</p>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="text-xl font-semibold mb-4">
              ${(
                product.price * (1 - product.discountPercent / 100)
              ).toFixed(2)}{" "}
              {product.discountPercent > 0 && (
                <span className="line-through text-gray-400 text-base">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
            {product.isNew && (
              <div className="text-lg font-bold text-green-500 mb-4">
                New Arrival!
              </div>
            )}

            <div className="mb-4">
              <p className="font-semibold text-lg">Description</p>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="mb-4">
              <p className="font-semibold text-lg">Colors</p>
              <div className="flex space-x-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="font-semibold text-lg">Sizes</p>
              <div className="flex space-x-2">
                {product.sizes.map((size, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 border border-gray-300 rounded-full cursor-pointer"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            <button
        className="mt-4 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
        onClick={() =>
          addToCart({
            id: product._id,
            name: product.name,
            imageUrl: product.imageUrl,
            price: product.price * (1 - product.discountPercent / 100),
            quantity: 1,
          })
        }
      >
        Add to Cart
      </button>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
