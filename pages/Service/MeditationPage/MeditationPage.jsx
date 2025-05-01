import Navbar from "@/components/Nav/Navbar";
import React, { useState } from "react";
import Link from "next/link";

// Expanded list of meditation programs
const meditationData = [
  {
    id: 1,
    title: "Morning Mindfulness Session",
    description: "Start your day with a calm and focused mind through guided mindfulness meditation, setting the tone for a peaceful and productive day.",
    duration: "45 minutes",
    time: "6:30 AM - 7:15 AM",
    image: "/assets/meditation/morning-meditation.jpg",
  },
  {
    id: 2,
    title: "Deep Relaxation Yoga",
    description: "A combination of light yoga stretches and deep meditation to release stress and tension, perfect for rejuvenating both body and mind.",
    duration: "1 hour",
    time: "10:00 AM - 11:00 AM",
    image: "/assets/meditation/deep-relaxation.jpg",
  },
  {
    id: 3,
    title: "Evening Guided Meditation",
    description: "Wind down your day with this guided meditation to help you relax and prepare for a peaceful night's sleep.",
    duration: "30 minutes",
    time: "8:00 PM - 8:30 PM",
    image: "/assets/meditation/evening-meditation.jpg",
  },
  {
    id: 4,
    title: "Breath Awareness Practice",
    description: "Focus on your breathing and cultivate awareness, promoting mental clarity, relaxation, and mindfulness.",
    duration: "40 minutes",
    time: "5:00 PM - 5:40 PM",
    image: "/assets/meditation/breath-awareness.jpg",
  },
  {
    id: 5,
    title: "Chakra Balancing Meditation",
    description: "A deep meditation practice that focuses on balancing the seven energy centers (chakras) of the body for improved physical and mental well-being.",
    duration: "1 hour",
    time: "7:30 AM - 8:30 AM",
    image: "/assets/meditation/chakra-balancing.jpg",
  },
  {
    id: 6,
    title: "Guided Visualization for Relaxation",
    description: "A calming session that uses guided imagery to help reduce stress, anxiety, and increase relaxation.",
    duration: "50 minutes",
    time: "2:00 PM - 2:50 PM",
    image: "/assets/meditation/guided-visualization.jpg",
  },
  {
    id: 7,
    title: "Loving Kindness Meditation",
    description: "Cultivate compassion and empathy through a meditation focused on sending love and kindness to yourself and others.",
    duration: "40 minutes",
    time: "12:00 PM - 12:40 PM",
    image: "/assets/meditation/loving-kindness.jpg",
  },
  {
    id: 8,
    title: "Mindful Walking Meditation",
    description: "A unique meditation that involves walking slowly and mindfully, paying attention to each step and breath as you connect with nature.",
    duration: "1 hour",
    time: "4:00 PM - 5:00 PM",
    image: "/assets/meditation/mindful-walking.jpg",
  },
  {
    id: 9,
    title: "Sound Bath Meditation",
    description: "Experience deep relaxation and healing through sound frequencies, using instruments like singing bowls and gongs to calm the mind and body.",
    duration: "1 hour",
    time: "9:00 AM - 10:00 AM",
    image: "/assets/meditation/sound-bath.jpg",
  },
  {
    id: 10,
    title: "Zen Meditation (Zazen)",
    description: "A traditional seated meditation practice focusing on breath awareness, posture, and presence in the moment.",
    duration: "45 minutes",
    time: "6:00 AM - 6:45 AM",
    image: "/assets/meditation/zen-meditation.jpg",
  },
  {
    id: 11,
    title: "Yoga Nidra (Yoga Sleep)",
    description: "A deep relaxation technique that brings you to a state of conscious sleep, providing the body with rest and rejuvenation.",
    duration: "1 hour",
    time: "7:00 PM - 8:00 PM",
    image: "/assets/meditation/yoga-nidra.jpg",
  },
  {
    id: 12,
    title: "Transcendental Meditation",
    description: "A simple mantra-based meditation that helps you transcend ordinary thought and experience deep inner peace.",
    duration: "20 minutes",
    time: "9:00 AM - 9:20 AM",
    image: "/assets/meditation/transcendental-meditation.jpg",
  },
  {
    id: 13,
    title: "Guided Body Scan Meditation",
    description: "A mindful body scan to bring awareness to each part of your body, helping to release tension and increase mindfulness.",
    duration: "30 minutes",
    time: "3:00 PM - 3:30 PM",
    image: "/assets/meditation/body-scan.jpg",
  },
  {
    id: 14,
    title: "Breathwork for Stress Relief",
    description: "A practice focused on controlled breathing techniques to reduce stress and promote relaxation.",
    duration: "30 minutes",
    time: "5:30 PM - 6:00 PM",
    image: "/assets/meditation/breathwork.jpg",
  },
];

const MeditationPage = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Track search input

  // Filter programs based on the search term
  const filteredPrograms = meditationData.filter((program) => {
    return program.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url('/assets/images/f2.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container relative z-10 text-center text-white" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-3">Sri Suboda Meditation Center</h1>
          <p className="text-lg mb-6">A peaceful sanctuary for meditation, mindfulness, and reflection. Join us in reconnecting with nature and inner peace.</p>
          <Link href="/" className="text-blue-300 hover:underline mr-2">Home</Link>
          <span> / Meditation Programs</span>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-white py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Welcome to Sri Suboda Meditation Center</h2>
        <p className="text-lg text-gray-700 mb-6">
          Sri Suboda Meditation Center is a peaceful sanctuary designed for those seeking tranquility, mindfulness, and connection to nature. Whether you're looking for reflection, renewal, or spiritual growth, our center offers a serene environment for personal transformation.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Located in a tranquil setting surrounded by nature, our center provides various meditation programs and retreats designed to help you find peace, balance, and clarity in your life. Join us in creating a harmonious connection between mind, body, and spirit.
        </p>
      </section>

      {/* Search Section */}
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-4xl font-bold text-center mb-6">Search Meditation Programs</h2>
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search for programs..."
            className="py-2 px-4 border border-gray-300 rounded-md w-1/2"
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm when user types
            value={searchTerm}
          />
        </div>
      </div>

      {/* Meditation Programs Section */}
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Meditation Programs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              {/* Image Section */}
              <div className="relative">
                <img src={program.image} alt={program.title} className="w-full h-56 object-cover rounded-t-xl" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-t-xl"></div>
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white z-10">
                  <h2 className="text-3xl font-semibold">{program.title}</h2>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-lg text-gray-700 mb-4">{program.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xl text-blue-600 font-semibold">{program.duration}</p>
                  <p className="text-sm text-gray-500">{program.time}</p>
                </div>

                {/* Button Section */}
                <button className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition ease-in-out duration-300 transform hover:scale-105">
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MeditationPage;
