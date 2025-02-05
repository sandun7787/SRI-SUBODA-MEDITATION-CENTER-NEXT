import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out flex items-center justify-between px-6 py-4 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <img src="/assets/m.png" alt="Logo" className="w-12 h-12 mr-4 rounded-full" />
        <Link href="/" className={`text-2xl font-bold ${isScrolled ? "text-black" : "text-white"}`}>
          SRI SUBODA MEDITATION CENTER
        </Link>
      </div>

      {/* Desktop Menu Items */}
      <ul className="hidden md:flex items-center space-x-8">
        <li>
          <Link href="/" className={`text-lg font-medium ${isScrolled ? "text-black" : "text-white"} hover:text-blue-500 transition-colors duration-300`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/About/About" className={`text-lg font-medium ${isScrolled ? "text-black" : "text-white"} hover:text-blue-500 transition-colors duration-300`}>
            About
          </Link>
        </li>
        <li
          className="relative"
          onMouseEnter={() => setIsBlogDropdownOpen(true)}
          onMouseLeave={() => setIsBlogDropdownOpen(false)}
        >
          <motion.button className={`text-lg font-medium ${isScrolled ? "text-black" : "text-white"} hover:text-blue-500 transition-colors duration-300`}>
            Blog
          </motion.button>
          <AnimatePresence>
            {isBlogDropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-10 bg-white rounded-lg shadow-md py-2 w-40"
              >
                <li>
                  <Link href="/Blog/Articles" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                    Articles
                  </Link>
                </li>
                <li>
                  <Link href="/Blog/Sections" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                    Sections
                  </Link>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
        <li
          className="relative"
          onMouseEnter={() => setIsServiceDropdownOpen(true)}
          onMouseLeave={() => setIsServiceDropdownOpen(false)}
        >
          <motion.button className={`text-lg font-medium ${isScrolled ? "text-black" : "text-white"} hover:text-blue-500 transition-colors duration-300`}>
            Service
          </motion.button>
          <AnimatePresence>
            {isServiceDropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-10 bg-white rounded-lg shadow-md py-2 w-48"
              >
                <li>
                  <Link href="/Service/AccommodationPage/Accommodation" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                    Accommodation
                  </Link>
                </li>
                <li>
                  <Link href="/Service/FoodPage/FoodPage" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                    Foods
                  </Link>
                </li>
                <li>
                  <Link href="/Service/MeditationPage/MeditationPage" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                    Meditation
                  </Link>
                </li>
                <li>
                  <Link href="/Service/MeditationPracticePage/MeditationPracticePage" className="block px-4 py-2 text-gray-800 hover:bg-blue-100">
                    Meditation Practice
                  </Link>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
        <li>
          <Link href="/Contact/contact" className={`text-lg font-medium ${isScrolled ? "text-black" : "text-white"} hover:text-blue-500 transition-colors duration-300`}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden">
        <button
          className={`transition-colors duration-300 ${isScrolled ? "text-black" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-start space-y-4 p-6 md:hidden"
          >
            <li>
              <Link href="/" className="text-lg font-medium text-gray-800 hover:text-blue-500 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-lg font-medium text-gray-800 hover:text-blue-500 transition-colors duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-lg font-medium text-gray-800 hover:text-blue-500 transition-colors duration-300">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/service" className="text-lg font-medium text-gray-800 hover:text-blue-500 transition-colors duration-300">
                Service
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-lg font-medium text-gray-800 hover:text-blue-500 transition-colors duration-300">
                Contact
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;

