import Navbar from "@/components/Nav/Navbar";
import React from "react";

const meditationData = [
  {
    id: 1,
    title: "Morning Mindfulness Session",
    description: "Start your day with a calm and focused mind through guided mindfulness meditation.",
    duration: "45 minutes",
    time: "6:30 AM - 7:15 AM",
    image: "/assets/meditation/morning-meditation.jpg",
  },
  {
    id: 2,
    title: "Deep Relaxation Yoga",
    description: "A combination of light yoga stretches and meditation to release stress and tension.",
    duration: "1 hour",
    time: "10:00 AM - 11:00 AM",
    image: "/assets/meditation/deep-relaxation.jpg",
  },
  {
    id: 3,
    title: "Evening Guided Meditation",
    description: "Wind down your day with this guided meditation to help you relax and sleep peacefully.",
    duration: "30 minutes",
    time: "8:00 PM - 8:30 PM",
    image: "/assets/meditation/evening-meditation.jpg",
  },
  {
    id: 4,
    title: "Breath Awareness Practice",
    description: "Focus on your breathing and cultivate awareness to achieve mental clarity.",
    duration: "40 minutes",
    time: "5:00 PM - 5:40 PM",
    image: "/assets/meditation/breath-awareness.jpg",
  },
];

const MeditationPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Meditation Programs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meditationData.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{program.title}</h2>
                <p className="text-gray-600 mb-2">{program.description}</p>
                <p className="text-gray-500 mb-2">
                  <strong>Duration:</strong> {program.duration}
                </p>
                <p className="text-gray-500 mb-4">
                  <strong>Time:</strong> {program.time}
                </p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
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
