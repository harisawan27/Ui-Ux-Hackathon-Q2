import React from "react";
import Image from "next/image";

const BestsellerProducts = () => {
  const products = [
    {
      id: 1,
      image: "/images/product-1.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 2,
      image: "/images/product-2.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 3,
      image: "/images/product-3.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 4,
      image: "/images/product-4.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 5,
      image: "/images/product-5.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 6,
      image: "/images/product-6.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 7,
      image: "/images/product-7.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
    {
      id: 8,
      image: "/images/product-8.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
    },
  ];

  return (
    <section className="py-10 px-4 md:px-4 lg:px-16">
      <div className="text-center mb-8">
        <p className="text-2xl text-[#737373]">Featured Products</p>
        <h2 className="text-2xl font-bold text-[#252B42]">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-[#737373] text-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="lg:px-40 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <div className="relative mb-4">
              <Image
                src={product.image}
                alt={product.name}
                layout="responsive"
                width={239}
                height={427}
              />
            </div>
            <h3 className="text-base font-bold text-gray-900">
              {product.name}
            </h3>
            <p className="text-sm text-gray-500">{product.department}</p>
            <div className="flex justify-center items-center space-x-2 mt-2">
              <p className="text-[#BDBDBD] font-bold">
                {product.originalPrice}
              </p>
              <p className="text-[#23856D] font-bold">
                {product.discountedPrice}
              </p>
            </div>
            <div className="flex justify-center items-center mt-2 space-x-2">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full cursor-pointer"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestsellerProducts;
