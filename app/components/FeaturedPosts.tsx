import Image from "next/image";

const FeaturedPosts = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-10 lg:px-20">
      <div className="text-center mb-10 mt-10">
        <h5 className="text-sm font-bold text-[#23A6F0] uppercase mb-2">
          Practice Advice
        </h5>
        <h2 className="text-2xl font-bold text-[#252B42] mb-4 md:text-3xl lg:text-4xl">
          Featured Posts
        </h2>
        <p className="text-[#737373] text-sm">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:px-20">
        <div className="bg-white border border-[#E5E5E5] overflow-hidden shadow-sm">
          <div className="relative">
            <Image
              src="/images/post-1.png"
              alt="Post 1"
              layout="responsive"
              width={400}
              height={250}
              className="object-cover"
            />
            <span className="absolute top-3 left-3 bg-[#E74040] text-white text-sm font-bold px-3 py-1 rounded">
              NEW
            </span>
          </div>
          <div className="p-6">
            <div className="flex items-center text-xs text-[#737373] space-x-2 mb-3">
              <span className="text-[#8EC2F2]">Google</span>
              <span>Trending</span>
              <span>New</span>
            </div>
            <h3 className="text-xl font-bold text-[#252B42] mb-2">
              Loudest à la Madison #1 (L&apos;Integrál)
            </h3>
            <p className="text-sm text-[#737373] mb-4">
              We focus on ergonomics and meeting you where you work. It&apos;s
              only a keystroke away.
            </p>
            <div className="flex items-center justify-between text-xs text-[#737373]">
              <div className="flex items-center space-x-2">
                <img src="/images/calendar.png" className="h-4" />
                <span>22 April 2021</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/images/comment.png" className="h-4" />
                <span>10 comments</span>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="/"
                className="text-[#4C9EEF] text-sm font-bold hover:underline flex items-center"
              >
                <p>Learn More</p>
                <img src="/images/next.png" className="ml-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#E5E5E5] overflow-hidden shadow-sm">
          <div className="relative">
            <Image
              src="/images/post-2.png"
              alt="Post 1"
              layout="responsive"
              width={400}
              height={250}
              className="object-cover"
            />
            <span className="absolute top-3 left-3 bg-[#E74040] text-white text-sm font-bold px-3 py-1 rounded">
              NEW
            </span>
          </div>
          <div className="p-6">
            <div className="flex items-center text-xs text-[#737373] space-x-2 mb-3">
              <span className="text-[#8EC2F2]">Google</span>
              <span>Trending</span>
              <span>New</span>
            </div>
            <h3 className="text-xl font-bold text-[#252B42] mb-2">
              Loudest à la Madison #1 (L&apos;Integrál)
            </h3>
            <p className="text-sm text-[#737373] mb-4">
              We focus on ergonomics and meeting you where you work. It&apos;s
              only a keystroke away.
            </p>
            <div className="flex items-center justify-between text-xs text-[#737373]">
              <div className="flex items-center space-x-2">
                <img src="/images/calendar.png" className="h-4" />
                <span>22 April 2021</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/images/comment.png" className="h-4" />
                <span>10 comments</span>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="/"
                className="text-[#4C9EEF] text-sm font-bold hover:underline flex items-center"
              >
                <p>Learn More</p>
                <img src="/images/next.png" className="ml-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#E5E5E5] overflow-hidden shadow-sm">
          <div className="relative">
            <Image
              src="/images/post-3.png"
              alt="Post 1"
              layout="responsive"
              width={400}
              height={250}
              className="object-cover"
            />
            <span className="absolute top-3 left-3 bg-[#E74040] text-white text-sm font-bold px-3 py-1 rounded">
              NEW
            </span>
          </div>
          <div className="p-6">
            <div className="flex items-center text-xs text-[#737373] space-x-2 mb-3">
              <span className="text-[#8EC2F2]">Google</span>
              <span>Trending</span>
              <span>New</span>
            </div>
            <h3 className="text-xl font-bold text-[#252B42] mb-2">
              Loudest à la Madison #1 (L&apos;Integrál)
            </h3>
            <p className="text-sm text-[#737373] mb-4">
              We focus on ergonomics and meeting you where you work. It&apos;s
              only a keystroke away.
            </p>
            <div className="flex items-center justify-between text-xs text-[#737373]">
              <div className="flex items-center space-x-2">
                <img src="/images/calendar.png" className="h-4" />
                <span>22 April 2021</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/images/comment.png" className="h-4" />
                <span>10 comments</span>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="/"
                className="text-[#4C9EEF] text-sm font-bold hover:underline flex items-center"
              >
                <p>Learn More</p>
                <img src="/images/next.png" className="ml-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
