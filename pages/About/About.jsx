import Navbar from "../../components/Nav/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx"; // Correct import
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

// Importing images
import heroImage from "/public/assets/image/B1.jpg";
import objectiveImg from "/public/assets/image/B2.jpg";
import centerImg from "/public/assets/image/B3.jpg";
import historyImg from "/public/assets/image/g1.jpg";
import coach3 from "/public/assets/image/g3.jpg";
import coach4 from "/public/assets/image/h2.jpg";
import bg3 from "/public/assets/image/in1.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero-wrap h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="text-center text-white" data-aos="fade-up">
            <h1 className="text-5xl font-bold mb-4">About Sri Subodha Meditation Center</h1>
            <p className="text-lg">
              <Link href="/" className="text-blue-300 hover:underline mr-2">
                Home
              </Link>
              <span> / About</span>
            </p>
          </div>
        </div>
      </section>

      {/* Our Objective Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="p-6" data-aos="fade-right">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Objective</h2>
            <p className="text-gray-700 leading-relaxed">
              At Sri Subodha Meditation Center, we are endeavoring to create a conducive atmosphere
              that provides the right set of circumstances for individuals who are into meditation
              practice and mindfulness and the core of Buddhism through residential retreats...
            </p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src={objectiveImg}
              alt="Our Objective"
              className="w-full h-72 md:h-96 object-cover"
              data-aos="fade-left"
            />
          </div>
        </div>
      </section>

      {/* About the Center Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src={centerImg}
              alt="About the Center"
              className="w-full h-72 md:h-96 object-cover"
              data-aos="fade-right"
            />
          </div>
          <div className="p-6" data-aos="fade-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">About the Center</h2>
            <p className="text-gray-700 leading-relaxed">
              Ambuluwawa Sri Subodha Meditation Center, an affiliate of the Sri Subodharamaya
              International Buddhist Center, Peradeniya, is located in a beautiful, peaceful...
            </p>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="p-6" data-aos="fade-right">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our History</h2>
            <p className="text-gray-700 leading-relaxed">
              The Sri Subodha Retreat Centre was established as the main retreat center of Sri
              Subodharama International Buddhist Centre, Peradeniya, Sri Lanka...
            </p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src={historyImg}
              alt="Our History"
              className="w-full h-72 md:h-96 object-cover"
              data-aos="fade-left"
            />
          </div>
        </div>
      </section>

      {/* Meet Our Coaches Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h3 className="text-pink-500 uppercase text-lg tracking-wide">Coaches</h3>
            <h2 className="text-3xl font-bold">Meet Our Yoga Coaches</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{ name: "Mark Brook", img: coach3 }, { name: "Sarah Henderson", img: coach3 }, { name: "George Hump", img: coach3 }, { name: "Victor Hump", img: coach4 }].map(
              (coach, index) => (
                <div key={index} className="text-center" data-aos="fade-up">
                  <div className="w-60 h-60 mx-auto overflow-hidden rounded-lg shadow-lg">
                    <Image src={coach.img} alt={coach.name} width={240} height={240} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mt-4">{coach.name}</h3>
                  <p className="text-pink-500">Owner / Head Coach</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section
        className="relative bg-cover bg-center py-16 text-white"
        style={{ backgroundImage: `url(${bg3.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto relative z-10 text-center grid grid-cols-1 md:grid-cols-4 gap-8">
          {[{ label: "Happy Customers", value: "5000" }, { label: "Yoga Workshops", value: "4560" }, { label: "Years of Experience", value: "570" }, { label: "Lessons Conducted", value: "900" }].map(
            (counter, index) => (
              <div key={index} className="text-center" data-aos="fade-up">
                <h3 className="text-5xl font-bold">{counter.value}</h3>
                <p className="text-lg">{counter.label}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
