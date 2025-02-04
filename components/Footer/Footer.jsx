import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-widest uppercase hover:text-gray-300 transition-all duration-500 transform hover:scale-105">
              SRI SUBODA MEDITATION CENTER
            </h1>
            <p className="text-gray-400 text-sm mt-4">
              Spreading peace and mindfulness around the world.
            </p>
          </div>

          {/* Center Section */}
          <div className="text-center">
            <p className="text-gray-400 text-base">
              203 Fake St. Mountain View, San Francisco, California, USA
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Email:{" "}
              <a
                href="mailto:info@subodaasapuwa.com"
                className="hover:text-white underline transition-all duration-300"
              >
                info@subodaasapuwa.com
              </a>
            </p>
            <p className="text-gray-400 text-sm">
              Phone:{" "}
              <a
                href="tel:+123456789"
                className="hover:text-white underline transition-all duration-300"
              >
                +1 234 567 89
              </a>
            </p>
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#"
                  className="text-white text-2xl hover:text-blue-400 transition-all duration-500 transform hover:scale-110"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-2xl hover:text-blue-600 transition-all duration-500 transform hover:scale-110"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-2xl hover:text-pink-400 transition-all duration-500 transform hover:scale-110"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-2xl hover:text-blue-700 transition-all duration-500 transform hover:scale-110"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-800 mt-10"></div>

        {/* Bottom Section */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} SUBODA ASAPUWA. All rights reserved. | Crafted with{" "}
            <span className="text-pink-400 animate-pulse">❤️</span> and mindfulness.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;