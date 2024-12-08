import Image from "next/image";

const EditorsPick = () => {
  return (
    <section className="bg-[#FAFAFA] py-10 px-4 md:px-8 lg:px-16">
      <div className="text-center pt-16">
        <h2 className="text-xl mb-2 font-bold text-[#252B42] md:text-2xl">
          EDITOR'S PICK
        </h2>
        <p className="text-[#737373] text-xs md:text-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="py-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:px-48">
        <div className="relative col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2">
          <Image
            src="/images/men.png"
            alt="Men"
            layout="responsive"
            width={510}
            height={500}
            className="rounded-lg"
          />
          <div className="absolute bottom-6 left-7 bg-white py-3 px-16">
            <p className="font-bold text-[#252B42]">MEN</p>
          </div>
        </div>

        <div className="relative col-span-1 md:col-span-1 lg:row-span-2">
          <Image
            src="/images/women.png"
            alt="Women"
            layout="responsive"
            width={240}
            height={500}
            className="rounded-lg"
          />
          <div className="absolute bottom-6 left-7 bg-white py-3 px-8">
            <p className="font-bold text-[#252B42]">WOMEN</p>
          </div>
        </div>

        <div className="relative col-span-1 lg:row-span-1">
          <Image
            src="/images/accessories.png"
            alt="Accessories"
            layout="responsive"
            width={240}
            height={230}
            className="rounded-lg h-full"
          />
          <div className="absolute bottom-6 left-4 bg-white py-3 px-6">
            <p className="font-bold text-[#252B42]">ACCESSORIES</p>
          </div>
        </div>

        <div className="relative col-span-1 lg:row-span-1">
          <Image
            src="/images/kids.png"
            alt="Kids"
            layout="responsive"
            width={240}
            height={230}
            className="rounded-lg h-full"
          />
          <div className="absolute bottom-6 left-4 bg-white py-3 px-10">
            <p className="font-bold text-[#252B42]">KIDS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;
