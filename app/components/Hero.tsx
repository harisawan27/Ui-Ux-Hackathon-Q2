import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      <div
        className="relative h-[calc(100vh-64px)] md:h-[700px] mx-auto"
        style={{
          maxWidth: "1440px",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/shop-hero.svg"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          className="object-cover"
          sizes="(max-width: 1440px) 100vw, 1440px"
        />
      </div>

      <div className="absolute top-1/4 left-6 md:top-1/3 md:left-10 lg:top-1/3 xl:top-1/4 xl:pl-32 space-y-4">
        <p className="text-sm font-medium text-white uppercase">Summer 2025</p>
        <h1 className="text-4xl font-bold text-white leading-tight lg:text-5xl xl:text-6xl">
          New Collection
        </h1>
        <p className="text-lg font-normal text-white max-w-xs">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-green-600 transition">
          <Link href="/shop">Shop Now</Link>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
