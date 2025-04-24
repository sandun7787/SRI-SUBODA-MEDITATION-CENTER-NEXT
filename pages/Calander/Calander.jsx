// pages/Calander/Calander.jsx
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa"; // For search icon
import Calendar from "react-calendar"; // React Calendar
import "react-calendar/dist/Calendar.css"; // Calendar styles
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Nav/Navbar"; // Ensure Navbar component is present
import Footer from "@/components/Footer/Footer"; // Ensure Footer component is present
import bg_3 from "/public/assets/contact/c1.jpg"; // Background image for the hero section

const Calander = () => {
  const [date, setDate] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  // Handle date selection from the calendar
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (sending email via SMTP)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
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
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bg_3.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container relative z-10 text-center text-white" data-aos="fade-up">
          <h1 className="text-4xl font-bold mb-3">Our Calendar</h1>
          <p className="text-lg">View upcoming events and book a session</p>
        </div>
      </section>

      {/* Calendar and Search Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Calendar Section */}
            <div className="bg-white p-6 rounded-lg shadow-md order-1 md:order-1" data-aos="fade-right">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Calendar</h2>
              <Calendar
                onChange={handleDateChange}
                value={date}
                className="shadow-lg rounded-lg"
              />
            </div>

            {/* Search Bar Section */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md order-2 md:order-2" data-aos="fade-left">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Search Events</h2>
              <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
                <FaSearch className="text-gray-500 mr-2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search events"
                  className="w-full p-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Inquiry Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto">
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
      </section>

      <Footer />
    </>
  );
};

export default Calander;
