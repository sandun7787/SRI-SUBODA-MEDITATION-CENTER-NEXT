import Navbar from "@/components/Nav/Navbar";
import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
// Expanded list of charitable work
const projects = [
  {
    id: 1,
    title: "A Charitable Action Honoring the Departure of Bhante Sujatha’s Father",
    description: "These projects are charitable works funded through donations and resources allocated from Sri Subodha Meditation Center. If you would like to offer your support, please contact us.",
    image: "/assets/projects/charitable-action.jpg",
    link: "/projects/charitable-action",
    category: "Memorial"
  },
  {
    id: 2,
    title: "Water Filter Donation",
    description: "Sanatha Suwaya completed its Water Filter Project in Sri Lanka, where we dedicated water filters to schools in rural areas.",
    image: "/assets/projects/water-filter-donation.jpg",
    link: "/projects/water-filter-donation",
    category: "Health"
  },
  {
    id: 3,
    title: "Elderly Home – Monthly Donation Program – December",
    description: "Initiated the essential food supply program to ease the burden on low-income families and individuals during the pandemic crisis.",
    image: "/assets/projects/elderly-home-donation.jpg",
    link: "/projects/elderly-home-donation",
    category: "Elderly"
  },
  {
    id: 4,
    title: "Monthly Donation Program – November",
    description: "Food parcels were given to five low-income families directly affected by the economic impacts of the coronavirus.",
    image: "/assets/projects/monthly-donation-november.jpg",
    link: "/projects/monthly-donation-november",
    category: "General"
  },
  {
    id: 5,
    title: "Bhante Sujatha | 2020 House Offering Project 02",
    description: "A charitable initiative for providing housing support to families in need. This project is funded through donations.",
    image: "/assets/projects/bhante-sujatha-house-offering.jpg",
    link: "/projects/bhante-sujatha-house-offering",
    category: "Housing"
  },
  {
    id: 6,
    title: "Our Children Are Our Future",
    description: "A beautiful donation made to a needy family in Sri Lanka to support the next generation.",
    image: "/assets/projects/our-children-are-our-future.jpg",
    link: "/projects/our-children-are-our-future",
    category: "Children"
  },
  {
    id: 7,
    title: "Dambulla House Building Project",
    description: "This project helped build houses for those in need in Dambulla. The project brings positive change to the community.",
    image: "/assets/projects/dambulla-house-building.jpg",
    link: "/projects/dambulla-house-building",
    category: "Housing"
  },
  {
    id: 8,
    title: "Charity Project",
    description: "A donation program hosted at Sri Subodha Meditation Center, where large parcels of essentials were donated to families in need.",
    image: "/assets/projects/charity-project.jpg",
    link: "/projects/charity-project",
    category: "General"
  },
  {
    id: 9,
    title: "School Supplies for Rural Areas",
    description: "Providing necessary school supplies to children in rural areas to help them continue their education.",
    image: "/assets/projects/school-supplies.jpg",
    link: "/projects/school-supplies",
    category: "Education"
  },
  {
    id: 10,
    title: "Food Relief for Refugees",
    description: "Providing essential food items and basic necessities to refugees in areas affected by conflict.",
    image: "/assets/projects/food-relief.jpg",
    link: "/projects/food-relief",
    category: "Relief"
  },
];

const CharitableWorkPage = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Track search input
  const [categoryFilter, setCategoryFilter] = useState("All");

  // Filter projects based on search term and category
  const filteredProjects = projects.filter((project) => {
    return (
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categoryFilter === "All" || project.category === categoryFilter)
    );
  });

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url('/assets/images/f2.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container relative z-10 text-center text-white" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-3">Sri Subodha Meditation Center Charitable Work</h1>
          <p className="text-lg mb-6">We are dedicated to delivering impactful services and engaging in charitable endeavors that benefit the local community and the world at large.</p>
          <Link href="/" className="text-blue-300 hover:underline mr-2">Home</Link>
          <span> / Charitable Work</span>
        </div>
      </section>

      {/* Introduction to Charitable Work */}
      <section className="bg-white py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Sri Subodha Meditation Center - Charitable Work</h2>
        <p className="text-lg text-gray-700 mb-6">
          Sri Subodha Meditation Center is dedicated to delivering impactful services and engaging in charitable endeavors that benefit the local community. Through collaboration with like-minded organizations, motivated professionals, and educators, we aim to channel resources to those who need it the most. Our charitable efforts are conducted through the creation of the non-profit group, the “Sri Subodha Meditation Center Foundation.”
        </p>
        <p className="text-lg text-gray-700 mb-6">
          The foundation focuses on supporting individuals with lower income, the sick, and the differently-abled. We aim to uplift the community and provide relief through our charitable work.
        </p>
      </section>

      {/* Charity Category Filter */}
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-4xl font-bold text-center mb-6">Filter Charitable Work</h2>
        <div className="mb-6 flex justify-center space-x-4">
          <button
            className={`py-2 px-4 border border-gray-300 rounded-md ${categoryFilter === "All" ? "bg-blue-600 text-white" : "bg-white text-gray-800"}`}
            onClick={() => setCategoryFilter("All")}
          >
            All
          </button>
          <button
            className={`py-2 px-4 border border-gray-300 rounded-md ${categoryFilter === "Health" ? "bg-blue-600 text-white" : "bg-white text-gray-800"}`}
            onClick={() => setCategoryFilter("Health")}
          >
            Health
          </button>
          <button
            className={`py-2 px-4 border border-gray-300 rounded-md ${categoryFilter === "Housing" ? "bg-blue-600 text-white" : "bg-white text-gray-800"}`}
            onClick={() => setCategoryFilter("Housing")}
          >
            Housing
          </button>
          <button
            className={`py-2 px-4 border border-gray-300 rounded-md ${categoryFilter === "Education" ? "bg-blue-600 text-white" : "bg-white text-gray-800"}`}
            onClick={() => setCategoryFilter("Education")}
          >
            Education
          </button>
          <button
            className={`py-2 px-4 border border-gray-300 rounded-md ${categoryFilter === "Relief" ? "bg-blue-600 text-white" : "bg-white text-gray-800"}`}
            onClick={() => setCategoryFilter("Relief")}
          >
            Relief
          </button>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-4xl font-bold text-center mb-6">Search Charitable Work</h2>
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search for projects..."
            className="py-2 px-4 border border-gray-300 rounded-md w-1/2"
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm when user types
            value={searchTerm}
          />
        </div>
      </div>

      {/* Charitable Projects Section */}
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Ongoing & Past Charitable Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              {/* Image Section */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-t-xl"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-t-xl"></div>
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white z-10">
                  <h2 className="text-3xl font-semibold">{project.title}</h2>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-lg text-gray-700 mb-4">{project.description}</p>

                {/* Button Section */}
                <Link href={project.link} className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition ease-in-out duration-300 transform hover:scale-105 block text-center">
                  Read More
                </Link>
              </div>
            </div>
          ))}
          
        </div>
      </div>
      <Footer />
    </>
    
  );
};

export default CharitableWorkPage;
