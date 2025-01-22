import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Phone, MapPin, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="w-full">
      <Navbar />
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="absolute pl-6 w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
              Get in touch today!
            </h1>
            <p className="text-gray-600 mb-6">
              We know how large objects will act, but things on a small scale
            </p>
            <div className="mb-6">
              <p className="font-medium mb-2">Phone: +92 123456789</p>
              <p className="font-medium">Fax: +451 215 215</p>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link
                href="https://x.com/harisawan27"
                aria-label="Twitter"
                className="text-gray-600 hover:text-blue-500"
              >
                <FaTwitter size={24} />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61558545486623"
                aria-label="Facebook"
                className="text-gray-600 hover:text-blue-500"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/mharisawan27"
                aria-label="Instagram"
                className="text-gray-600 hover:text-blue-500"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/m-haris-awan/"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-blue-500"
              >
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative right-0 top-0 m-0 p-0">
            <Image
              src="/images/contact.png"
              alt="Family Shopping"
              width={1400}
              height={882}
            />
          </div>
        </div>
      </div>

      {/* Visit Office Section */}
      <div className="my-12 bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              We help small businesses with big ideas
            </h2>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Card */}
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Phone className="w-8 h-8 text-blue-500" />
              </div>
              <p className="text-sm text-gray-600 mb-2">
                contact.libasg@gmail.com
              </p>
              <p className="text-sm text-gray-600 mb-4">+92 123456789</p>
              <div className="mt-4">
                <button className="text-blue-500 border border-blue-500 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors">
                  Get Support
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-blue-900 p-6 rounded-lg text-center text-white">
              <div className="flex justify-center mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <p className="text-sm mb-2">libasg.com</p>
              <p className="text-sm mb-4">Karachi, Pakistan</p>
              <div className="mt-4">
                <button className="text-white border border-white px-6 py-2 rounded-full hover:bg-white hover:text-navy-900 transition-colors">
                  Get Support
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Mail className="w-8 h-8 text-blue-500" />
              </div>
              <p className="text-sm text-gray-600 mb-2">
                support.libasg@gmail.com
              </p>
              <p className="text-sm text-gray-600 mb-2">
                support.libasg@gmail.com
              </p>
              <div className="mt-4">
                <button className="text-blue-500 border border-blue-500 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors">
                  Get Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Let's Talk Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Let&apos;s Talk</h2>
        <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors">
          Try it free now
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
