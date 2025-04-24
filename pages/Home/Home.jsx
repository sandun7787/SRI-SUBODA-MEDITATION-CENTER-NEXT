import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing icons
import { motion, AnimatePresence, useAnimation } from "framer-motion"; // ✅ Keep only one motion import
import { useInView } from "react-intersection-observer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUtensils, faSpa, faBed } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/router"; 



const heroImages = [
  "/assets/image/m27.jpg",
  "/assets/image/m2.jpg",
  "/assets/image/m3.jpg",
  "/assets/image/h6.png",
];
const images = [
  "/assets/image/g1.jpg",
  "/assets/image/g2.jpg",
  "/assets/image/g3.jpg",
  "/assets/image/g4.jpg",
];

const HomePage = () => {
  const router = useRouter();
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

 
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [introVisible, setIntroVisible] = useState(false);
  const [testimonyVisible, setTestimonyVisible] = useState(true); // Ensure visibility is true for debugging
  const [serviceVisible, setServiceVisible] = useState(false);
  const [blogVisible, setBlogVisible] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);
  

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);



  const introRef = useRef(null);
  const serviceRef = useRef(null);
  const testimonyRef = useRef(null);
  const blogRef = useRef(null);
  const galleryRef = useRef(null);

  const services = [
    {
      title: "Meditation",
      text: "Discover inner peace and clarity.",
      icon: "fa-solid fa-heart",
      route: "/Service/MeditationPage/MeditationPage",
    },
    {
      title: "Food",
      text: "Nourish your body and soul.",
      icon: "fa-solid fa-utensils",
      route: "/Service/FoodPage/FoodPage",
    },
    {
      title: "Meditation Practice",
      text: "Deepen your meditation journey.",
      icon: "fa-solid fa-spa",
      route: "/Service/MeditationPracticePage/MeditationPracticePage",
    },
    {
      title: "Accommodation",
      text: "Find a comfortable retreat.",
      icon: "fa-solid fa-bed",
      route: "/Service/AccommodationPage/Accommodation",
    },
  ];
  

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
  
    return () => {
      clearInterval(imageInterval);
    };
  }, []);
  


  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };


  useEffect(() => {
    // Scroll Animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === introRef.current) {
            setIntroVisible(entry.isIntersecting);
          }
          if (entry.target === serviceRef.current) {
            setServiceVisible(entry.isIntersecting);
          }
      
          if (entry.target === testimonyRef.current) {
            setTestimonyVisible(entry.isIntersecting);
          }
          if (entry.target === blogRef.current) {
            setBlogVisible(entry.isIntersecting);
          }

          if (entry.target === galleryRef.current) {
            setGalleryVisible(entry.isIntersecting);
          }
        
      
        });
      },
      { threshold: 0.3 }
    );

    if (introRef.current) observer.observe(introRef.current);
    if (serviceRef.current) observer.observe(serviceRef.current);
    if (testimonyRef.current) observer.observe(testimonyRef.current);
    if (blogRef.current) observer.observe(blogRef.current);
    if (galleryRef.current) observer.observe(galleryRef.current);
    

    return () => {
      if (introRef.current) observer.unobserve(introRef.current);
      if (serviceRef.current) observer.unobserve(serviceRef.current);
      if (testimonyRef.current) observer.unobserve(testimonyRef.current);
      if (blogRef.current) observer.unobserve(blogRef.current);
      if (galleryRef.current) observer.unobserve(galleryRef.current);

     
    };
    
  }, []);
  const handleNavigation = () => {
    router.push("/About"); // ✅ Navigate to About page
  };
  return (
    <div className="bg-gray-100 text-black">
             <section
        className="relative flex items-center justify-start text-left transition-opacity duration-1000"
        style={{
          marginTop: "100px", // Push section below the fixed navbar
        }}
      >
        {/* Displaying the image directly with <img> tag */}
        <img
          src={heroImages[currentImageIndex]}
          alt="Hero Image"
          className="w-full h-auto"
          style={{
            objectFit: "contain", // Ensures the image is shown at full size
            objectPosition: "center",
          }}
        />

        <div className="container mx-auto px-4 z-10">
          <div className="flex items-center justify-start h-full">
            <div className="w-full md:w-2/3">
              {/* Arrows for Image Navigation */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button onClick={handlePreviousImage} className="text-white text-3xl">
                  <FaChevronLeft />
                </button>
              </div>

              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button onClick={handleNextImage} className="text-white text-3xl">
                  <FaChevronRight />
                </button>
              </div>

              {/* Navigation Circles Below the Image */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full bg-white opacity-50 hover:opacity-100 transition-all ${
                      currentImageIndex === index ? "bg-gray-800 opacity-100" : ""
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



<section
  ref={introRef}
  className={`flex flex-col lg:flex-row min-h-screen bg-gray-50 transition-all duration-1000 ${
    introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
  style={{ paddingTop: "80px" }} // Adjust padding to push intro below the navbar
>
  {/* Image Section */}
  <div
    className={`flex-1 flex justify-center items-center lg:justify-start p-8 transform transition-all duration-1000 ${
      introVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
    }`}
    style={{
      position: "relative", // Ensure it's within the parent
      zIndex: 0, // Image stays behind content
    }}
  >
    <img
      src="/assets/image/in1.jpg"
      alt="Meditation Intro"
      className="w-full h-full object-cover rounded-lg shadow-lg"
    />
  </div>

  {/* Text Content Section */}
  <div className="flex-1 flex flex-col justify-center px-12 space-y-6 z-10">
    <div className="text-left">
      <h2 className="text-5xl font-bold text-gray-900 leading-snug mb-6">
        How to Fulfill It?
      </h2>
      <p className="text-lg leading-relaxed text-gray-500 mb-4">
        Buddhist meditation is a combination of <strong>Samatha</strong> and <strong>Vipassana</strong>. Samatha means calming or stilling the mind, making it peaceful and most importantly clear. Vipassana is a technique for developing mindfulness, or awareness, that has been around for thousands of years. This technique is used by non-religious and religious people alike, including agnostics, atheists, and people of every religion and faith.
      </p>
      <p className="text-lg leading-relaxed text-gray-500 mb-4">
        A huge body of study done in recent years shows the benefits of practicing Vipassana meditation daily. According to studies, doing this meditation daily has huge advantages. It makes us happier, less stressed, more focused and effective, more awake—and it leads to eternal bliss.
      </p>
      <p className="text-lg leading-relaxed text-gray-500">
        We would encourage all the laypeople here who are practicing to develop awareness and wisdom. By consistently practicing guided meditation, listening to Dhamma talks, and following proper conduct, one can develop mindfulness and wisdom.
      </p>
    </div>
  </div>
</section>




       
    <section
  ref={serviceRef}
  className="py-16 bg-white"
>
  <div className="container mx-auto px-6">
    {/* Section Heading */}
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-3">Our Services</h2>
      <p className="text-gray-600 text-lg">
        Discover how we help you grow spiritually and peacefully.
      </p>
    </motion.div>

    {/* Services Icons Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
      {services.map((service, index) => {
        const colors = [
          "bg-gradient-to-br from-red-500 to-pink-500",
          "bg-gradient-to-br from-green-500 to-teal-500",
          "bg-gradient-to-br from-indigo-500 to-purple-500",
          "bg-gradient-to-br from-yellow-500 to-orange-500",
        ];
        const color = colors[index % colors.length];

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <div className="flex flex-col items-center space-y-4">
              {/* Icon with hover crowd effect */}
              <motion.button
                onClick={() => router.push(service.route)}
                whileHover={{
                  scale: 1.25,
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.6 },
                }}
                whileTap={{ scale: 0.9 }}
                className={`text-white text-7xl p-6 rounded-full shadow-xl ${color} transition-all duration-500`}
              >
                <i className={service.icon}></i>
              </motion.button>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>

              {/* Small Text */}
              <p className="text-gray-600 text-sm max-w-xs px-3">
                {service.text}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

 
    <section ref={testimonyRef} className="py-12 bg-gray-100">
    <div className="container mx-auto">
    {/* Heading */}
    <div className="row justify-center mb-8">
      <div className="col-md-7 text-center">
        <h3 className="text-pink-500 text-lg uppercase tracking-wide animate-fade-in">
          Testimony
        </h3>
        <h2 className="text-4xl font-bold mt-2 animate-fade-in-delayed">
          Successful Stories
        </h2>
      </div>
    </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
              image: "/assets/image/person_1.jpg",
              name: "Gabby Smith",
              position: "Customer",
            },
            {
              text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
              image: "/assets/image/person_2.jpg",
              name: "Floyd Weather",
              position: "Customer",
            },
            {
              text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
              image: "/assets/image/person_3.jpg",
              name: "James Dee",
              position: "Customer",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className={`testimony-wrap p-6 bg-white shadow-lg rounded-lg transform transition duration-700 ease-out ${
                testimonyVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.3}s` }}
            >
              <div className="text">
                <div className="relative pl-6 mb-4">
                  <p className="text-gray-600 italic">{testimonial.text}</p>
                  <span className="absolute left-0 top-0 text-pink-500 text-3xl">
                    <i className="fas fa-quote-left"></i>
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full border-2 border-pink-500"
                  />
                  <div className="ml-4">
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <span className="text-sm text-gray-500">{testimonial.position}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section
      id="counter-section"
      ref={ref}
      className="relative bg-cover bg-center bg-no-repeat bg-fixed py-20 flex items-center"
      style={{ backgroundImage: "url('/assets/image/m23.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-12"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        {/* Left Text Content */}
        <div className="text-white w-full md:w-2/3">
          <motion.h1
            className="text-5xl font-bold leading-tight mb-4"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
            }}
          >
            Inviting one and all to <br /> come and see.
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-yellow-400 mb-6"
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 1, scaleX: 1, transition: { duration: 1 } },
            }}
          ></motion.div>
          <motion.p
            className="text-lg text-gray-200 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
            }}
          >
            Please take some time to learn about us, our offerings, and our mission. 
            We look forward to the chance to share our services with you.
          </motion.p>
        </div>

        {/* Right Navigation Button */}
        <motion.div
          className="mt-6 md:mt-0"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
          }}
        >
         <button
        onClick={() => router.push("/About/About")} // ✅ Corrected navigation
        className="bg-green-400 text-gray-900 font-semibold text-lg py-3 px-6 rounded-md shadow-md hover:bg-green-500 transition-all"
      >
        WHO WE ARE
      </button>
        </motion.div>
      </motion.div>
    </section>
    <section
      ref={blogRef}
      className={`bg-gray-100 py-16 transition-all duration-1000 ${
        blogVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3
            className={`text-pink-500 uppercase text-lg tracking-wide transition-all duration-1000 ${
              blogVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Blog
          </h3>
          <h2
            className={`text-4xl font-bold transition-all duration-1000 ${
              blogVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Recent Posts
          </h2>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["/assets/image/B1.jpg", "/assets/image/B2.jpg", "/assets/image/B3.jpg"].map(
            (image, index) => (
              <div
                key={index}
                className={`group bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-1000 ${
                  blogVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                {/* Zoom-in Effect on Hover */}
                <div className="relative overflow-hidden">
                  <div
                    className="block h-64 bg-cover bg-center transition-transform duration-500 transform group-hover:scale-105"
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div>
                      <span className="block text-4xl font-bold text-pink-500">
                        {["31", "27", "25"][index]}
                      </span>
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-gray-500">2018</span>
                      <span className="block text-sm font-semibold text-gray-500">December</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    <a href="#">Young Women Doing Yoga</a>
                  </h3>
                  <p className="text-gray-600">
                    A small river named Duden flows by their place and supplies it with the
                    necessary regelialia.
                  </p>
                </div>
              </div>
            )
          )}
        </div>

        {/* Explore More Button */}
{/* Explore More Button */}
<div className="flex justify-end mt-8">
  <button
    onClick={() => router.push("/Blog/Sections")}
    className="px-4 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-md hover:bg-pink-600 transition-transform duration-300 transform hover:scale-105"
  >
    <FaArrowRight className="text-xl" />
  </button>
</div>

      </div>
    </section>
    <section
      ref={galleryRef}
      className={`py-16 bg-gray-100 text-center transition-all duration-1000 ${
        galleryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto">
        {/* Heading */}
        <div
          className={`flex flex-col items-center mb-12 transition-opacity duration-1000 ${
            galleryVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-pink-500 uppercase text-lg tracking-wide transition-all duration-1000">
  Gallery
</h3>

          <h2 className="text-4xl font-bold text-center">See the latest photos</h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative h-64 rounded-lg overflow-hidden shadow-md transform transition-transform duration-700 ${
                galleryVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />

              {/* Overlay */}
              <a
                href={image}
                className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100"
              >
                <span className="text-white text-3xl">
                  <i className="fab fa-instagram"></i>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default HomePage;

