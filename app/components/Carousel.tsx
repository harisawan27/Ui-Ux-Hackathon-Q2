import Link from "next/link";

export default function Carousel() {
  return (
    <section>
      <div className="bg-[#23856D] flex flex-col lg:flex-row items-center justify-center pt-10 px-6 lg:px-20">
        <div className="flex flex-col text-center lg:text-left lg:mr-10">
          <p className="text-xl mb-5 text-white uppercase tracking-wide">
            Summer 2025
          </p>
          <h1 className="text-6xl mb-5 font-bold text-white mt-2">
            Vita Classic Product
          </h1>
          <p className="text-sm mb-5 text-white mt-4">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex justify-center md:justify-start flex-row items-center space-x-2">
            <p className="text-2xl font-bold text-white mt-6">$16.48</p>
            <button className="mt-4 px-10 py-4 bg-[#2DC071] text-white font-bold rounded">
              <Link href="/shop">Add to Cart</Link>
            </button>
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <img
            src="/images/carousel.png"
            alt="Vita Classic Product"
            className="w-full max-w-sm lg:max-w-md object-cover"
          />
        </div>
      </div>

      <div className="bg-white flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-20">
        <div className="mt-8 lg:mt-0">
          <img
            src="/images/carousel-2.png"
            alt="Carousel 2"
            className="w-full max-w-sm lg:max-w-md object-cover"
          />
        </div>
        <div className="flex flex-col pt-10 lg:pt-0 text-center lg:text-left lg:ml-10">
          <p className="font-bold mb-5 text-[#BDBDBD] tracking-wide">
            SUMMER 2025
          </p>
          <h1 className="text-6xl mb-5 font-bold text-[#252B42] mt-2">
            Part of the Neural Universe
          </h1>
          <p className="text-sm mb-5 text-[#737373] mt-4">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="flex mb-3 justify-center md:justify-start flex-col lg:flex-row items-center space-x-2">
            <button className="mt-4 px-10 py-4 bg-[#2DC071] text-white font-bold rounded">
              <Link href="/shop">BUY NOW</Link>
            </button>
            <button className="font-bold px-10 py-4 text-[#2DC071] mt-6 border rounded border-[#2DCO71]">
              <Link href="/shop">BUY NOW</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
