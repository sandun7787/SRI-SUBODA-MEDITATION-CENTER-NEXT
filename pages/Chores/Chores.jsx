import Navbar from "@/components/Nav/Navbar";
import React, { useState } from "react";
import Link from "next/link";

// Expanded list of 10 chores with additional details
const choresData = [
  {
    id: 1,
    title: "Sweeping the Yards",
    description:
      "Sweeping the yards is an essential task to maintain cleanliness and a peaceful environment. It involves clearing any debris, leaves, or dirt from the meditation grounds and the surrounding areas. While performing this task, guests are encouraged to practice mindfulness, using the sweeping motion to stay present with each action. The task brings clarity of mind and creates a fresh, welcoming space for meditation.",
    time: "30 minutes",
    image: "/assets/chores/sweeping.jpg",
    audioGuide: "/audio/sweeping-guide.mp3", // Audio guide for mindful sweeping
  },
  {
    id: 2,
    title: "Cleaning and Dusting",
    description:
      "Cleaning and dusting the rooms, common areas, and meditation halls is a practice of attention and respect for the space that supports your meditation. By ensuring the place remains tidy, you foster an environment conducive to stillness and reflection. This task teaches the importance of balance – maintaining the exterior and the interior of the space simultaneously.",
    time: "20 minutes",
    image: "/assets/chores/cleaning.jpg",
    audioGuide: "/audio/cleaning-guide.mp3", // Audio guide for mindful cleaning
  },
  {
    id: 3,
    title: "Mindful Dishwashing",
    description:
      "Dishwashing is a simple but profound way to practice mindfulness in everyday life. Every action, from scrubbing plates to rinsing them, can be a moment of reflection and gratitude, appreciating the food and the process that sustains us. Dishwashing is a reminder that every task, no matter how small, can become a sacred practice.",
    time: "15 minutes",
    image: "/assets/chores/dishwashing.jpg",
    audioGuide: "/audio/dishwashing-guide.mp3", // Audio guide for mindful dishwashing
  },
  {
    id: 4,
    title: "Watering the Plants",
    description:
      "Watering the plants is a calming and nurturing task. By taking care of the garden and plants, we learn the value of patience and responsibility. Each act of watering serves as a reminder that nurturing life, both within and around us, is a spiritual practice.",
    time: "15 minutes",
    image: "/assets/chores/watering.jpg",
    audioGuide: "/audio/watering-guide.mp3", // Audio guide for mindful watering
  },
  {
    id: 5,
    title: "Arranging the Meditation Halls",
    description:
      "Each morning, the meditation halls are arranged and prepared for the day’s practice. This includes arranging cushions, mats, and ensuring that everything is in place for a serene environment. This task allows you to set the intention for the day, offering respect to the space where you’ll meditate, while aligning your actions with your spiritual practice.",
    time: "10 minutes",
    image: "/assets/chores/meditation-hall.jpg",
    audioGuide: "/audio/meditation-hall-guide.mp3", // Audio guide for mindful arrangement
  },
  {
    id: 6,
    title: "Washing the Floors",
    description:
      "Washing the floors helps maintain the cleanliness and purity of the meditation space. This is not only a task of physical cleaning but a mindful practice of purifying the space for meditation. Each scrub and wipe serves to cleanse the environment and your mind.",
    time: "25 minutes",
    image: "/assets/chores/washing-floors.jpg",
    audioGuide: "/audio/washing-floors-guide.mp3", // Audio guide for mindful floor washing
  },
  {
    id: 7,
    title: "Organizing the Library",
    description:
      "Organizing the library or meditation room involves arranging the books, materials, and texts used for study and practice. This task helps in cultivating orderliness and respect for the teachings, fostering an environment where learning and reflection can flourish.",
    time: "20 minutes",
    image: "/assets/chores/library.jpg",
    audioGuide: "/audio/organizing-library-guide.mp3", // Audio guide for mindful organizing
  },
  {
    id: 8,
    title: "Preparing the Offerings",
    description:
      "Preparing offerings for the altar or meditation space is a way of expressing gratitude and devotion. It could involve preparing flowers, incense, or other symbolic items to create a sacred and serene space for practice.",
    time: "15 minutes",
    image: "/assets/chores/offerings.jpg",
    audioGuide: "/audio/preparing-offerings-guide.mp3", // Audio guide for mindful preparation
  },
  {
    id: 9,
    title: "Cleaning the Kitchen",
    description:
      "Cleaning the kitchen is an act of care and mindfulness. It involves washing dishes, wiping counters, and organizing the space where nourishment is prepared. This task teaches us to be grateful for the food and to create a clean, peaceful environment in which to prepare meals.",
    time: "20 minutes",
    image: "/assets/chores/kitchen.jpg",
    audioGuide: "/audio/cleaning-kitchen-guide.mp3", // Audio guide for mindful kitchen cleaning
  },
  {
    id: 10,
    title: "Closing the Meditation Space",
    description:
      "At the end of the day, the meditation space needs to be cleaned and closed with intention. This includes wiping down surfaces, organizing cushions, and ensuring everything is in its rightful place, as a final act of respect for the space where the practice occurred.",
    time: "10 minutes",
    image: "/assets/chores/closing-space.jpg",
    audioGuide: "/audio/closing-space-guide.mp3", // Audio guide for closing the meditation space
  },
];

const ChoresPage = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Track search input
  const [completedTasks, setCompletedTasks] = useState({}); // Track completed tasks

  // Handle task completion
  const handleTaskCompletion = (taskId) => {
    setCompletedTasks((prevState) => ({
      ...prevState,
      [taskId]: !prevState[taskId], // Toggle completion
    }));
  };

  // Filter chores based on search term
  const filteredChores = choresData.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/images/f2.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container relative z-10 text-center text-white" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-3">Chores at Sri Subodha Meditation Center</h1>
          <p className="text-lg mb-6">
            The practice of daily chores is an important part of monastic discipline. These tasks are performed with mindfulness, creating an atmosphere of harmony and peace for all.
          </p>
          <Link href="/" className="text-blue-300 hover:underline mr-2">
            Home
          </Link>
          <span> / Chores</span>
        </div>
      </section>

      {/* Introduction to Chores */}
      <section className="bg-white py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Chores as Part of Monastic Discipline</h2>
        <p className="text-lg text-gray-700 mb-6">
          An important part of monastic discipline is looking after the place in which you live. The guests are instructed to engage in daily household tasks such as sweeping the yards, cleaning, and dusting, performed with mindful intention. These tasks, although simple, are an essential part of cultivating awareness and maintaining a peaceful environment conducive to meditation.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          All chores are to be performed with mindfulness and care, fostering both physical and mental discipline. Each task is an opportunity to practice **mindfulness**, **gratitude**, and **humility** in our daily routine. We dedicate approximately one hour each day to these tasks, allowing the practice to flow naturally into our spiritual practice.
        </p>
      </section>

      {/* Chores List Section */}
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Daily Household Tasks</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredChores.map((task) => (
            <div
              key={task.id}
              className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500"
            >
              {/* Image Section */}
              <div className="relative">
                <img src={task.image} alt={task.title} className="w-full h-56 object-cover rounded-t-xl" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-t-xl"></div>
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white z-10">
                  <h2 className="text-3xl font-semibold">{task.title}</h2>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-lg text-gray-700 mb-4">{task.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xl text-blue-600 font-semibold">{task.time}</p>
                </div>

                {/* Audio Guide */}
                <audio controls className="w-full mb-4">
                  <source src={task.audioGuide} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>

                {/* Task Completion Checkbox */}
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={completedTasks[task.id] || false}
                    onChange={() => handleTaskCompletion(task.id)}
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Mark as Completed</span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChoresPage;
