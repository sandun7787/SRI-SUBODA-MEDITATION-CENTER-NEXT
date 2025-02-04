import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import bg_3 from "/public/assets/contact/c1.jpg";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Nav/Navbar";  // Corrected import for Navbar
import Footer from "@/components/Footer/Footer";  // Corrected import for Footer

const ContactUs = () => {
  const locationRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScrollAnimation = () => {
      const element = locationRef.current;
      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight * 0.75) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScrollAnimation);
    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />
      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bg_3.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container relative z-10 text-center text-white" data-aos="fade-up">
          <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
          <Link href="/" className="text-blue-300 hover:underline mr-2">
            Home
          </Link>
          <span> / Contact Us</span>
        </div>
        <div className="absolute bottom-10 w-full flex justify-center">
          <div className="mouse-icon w-8 h-12 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information Section */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-right">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
              <div className="space-y-4 text-sm">
                <p className="text-gray-600">
                  <span className="block font-bold text-gray-800">Address:</span>
                  198 West 21th Street, Suite 721, New York NY 10016
                </p>
                <p className="text-gray-600">
                  <span className="block font-bold text-gray-800">Phone:</span>
                  <a href="tel://1234567920" className="text-pink-600 hover:underline">
                    + 1235 2355 98
                  </a>
                </p>
                <p className="text-gray-600">
                  <span className="block font-bold text-gray-800">Email:</span>
                  <a href="mailto:info@yoursite.com" className="text-pink-600 hover:underline">
                    info@yoursite.com
                  </a>
                </p>
                <p className="text-gray-600">
                  <span className="block font-bold text-gray-800">Website:</span>
                  <a href="#" className="text-pink-600 hover:underline">
                    yoursite.com
                  </a>
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-left">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <textarea
                    rows="5"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring focus:ring-pink-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`py-16 bg-gray-50 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        ref={locationRef}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center" data-aos="fade-up">
            Our Location
          </h2>
          <div className="w-full h-[600px] overflow-hidden rounded-lg shadow-lg relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63314.917320091944!2d80.610853511719!3d7.290572734962937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366fc5a59f291%3A0xa77df7b1c2a3e72b!2sKandy!5e0!3m2!1sen!2slk!4v1675200513942!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Kandy Map"
            ></iframe>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .mouse-icon {
          display: none;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ContactUs;

