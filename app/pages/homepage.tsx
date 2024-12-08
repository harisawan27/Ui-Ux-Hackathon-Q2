import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EditorsPick from "../components/EditorsPick";
import BestsellerProducts from "../components/BestProducts";
import Carousel from "../components/Carousel";
import FeaturedPosts from "../components/FeaturedPosts";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <EditorsPick />
      <BestsellerProducts />
      <Carousel />
      <FeaturedPosts />
      <Footer />
    </div>
  );
}
