import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import bg_3 from "/public/assets/contact/c1.jpg";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Nav/Navbar";  // Correct import for Navbar
import Footer from "@/components/Footer/Footer";  // Correct import for Footer

const ContactUs = () => {
  const locationRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message.");
    }
  };

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
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-left">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
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
              {status && <p className="mt-4 text-center text-green-500">{status}</p>}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
