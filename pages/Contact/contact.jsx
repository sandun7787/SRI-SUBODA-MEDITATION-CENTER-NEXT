import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import bg_3 from "/public/assets/contact/c1.jpg";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Nav/Navbar";  
import Footer from "@/components/Footer/Footer";

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

      {/* Hero Section */}
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

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-right">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <p className="text-gray-600">
                  <span className="font-bold text-gray-800">Address:</span> 198 West 21st Street, Suite 721, New York NY 10016
                </p>
                <p className="text-gray-600">
                  <span className="font-bold text-gray-800">Phone:</span> <a href="tel://1234567920" className="text-pink-600 hover:underline">+1235 2355 98</a>
                </p>
                <p className="text-gray-600">
                  <span className="font-bold text-gray-800">Email:</span> <a href="mailto:info@yoursite.com" className="text-pink-600 hover:underline">info@yoursite.com</a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-left">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
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
                      className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
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
                    className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
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
                    className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-pink-500 text-white py-4 px-6 rounded-lg hover:bg-pink-600 transition-all focus:outline-none focus:ring-2 focus:ring-pink-300"
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

      {/* Location Map Section */}
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

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ContactUs;
