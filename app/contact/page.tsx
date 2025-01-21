import React from 'react';
import Image from 'next/image';
import { 
  Phone, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  MapPin,
  Mail
} from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
              Get in touch today!
            </h1>
            <p className="text-gray-600 mb-6">
              We know how large objects will act, but things on a small scale
            </p>
            <div className="mb-6">
              <p className="font-medium mb-2">Phone: +451 215 215</p>
              <p className="font-medium">Fax: +451 215 215</p>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/api/placeholder/600/400"
              alt="Shopping Family"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Visit Office Section */}
      <div className="bg-gray-50 py-16">
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
              <p className="text-sm text-gray-600 mb-2">georgia.young@example.com</p>
              <p className="text-sm text-gray-600 mb-4">georgia.young@ple.com</p>
              <div className="mt-4">
                <button className="text-blue-500 border border-blue-500 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors">
                  Get Support
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-navy-900 p-6 rounded-lg text-center text-white">
              <div className="flex justify-center mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <p className="text-sm mb-2">georgia.young@example.com</p>
              <p className="text-sm mb-4">georgia.young@ple.com</p>
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
              <p className="text-sm text-gray-600 mb-2">georgia.young@example.com</p>
              <p className="text-sm text-gray-600 mb-4">georgia.young@ple.com</p>
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
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Let's Talk</h2>
        <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors">
          Try it free now
        </button>
      </div>
    </div>
  );
};

export default ContactPage;