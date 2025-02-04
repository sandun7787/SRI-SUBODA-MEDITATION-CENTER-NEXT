import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Nav/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx"; // Correct import
// Import images from the public directory
const bh1 = "/assets/blog/bh1.jpg";
const blogImages = [
  "/assets/blog/image_1.jpg",
  "/assets/blog/image_2.jpg",
  "/assets/blog/image_3.jpg",
  "/assets/blog/image_4.jpg",
  "/assets/blog/image_5.jpg",
  "/assets/blog/image_6.jpg",
  "/assets/blog/image_7.jpg",
  "/assets/blog/image_8.jpg",
  "/assets/blog/image_9.jpg",
  "/assets/blog/image_10.jpg",
];

const blogPosts = [
  { id: 1, title: "Blog Title 1", image: blogImages[0], description: "Explore the wonders of Blog 1 with unique insights." },
  { id: 2, title: "Blog Title 2", image: blogImages[1], description: "Dive into the details of Blog 2 with exclusive content." },
  { id: 3, title: "Blog Title 3", image: blogImages[2], description: "Discover what makes Blog 3 a favorite among readers." },
  { id: 4, title: "Blog Title 4", image: blogImages[3], description: "Learn more about the exciting adventures in Blog 4." },
  { id: 5, title: "Blog Title 5", image: blogImages[4], description: "An in-depth look into the stories covered in Blog 5." },
  { id: 6, title: "Blog Title 6", image: blogImages[5], description: "See how Blog 6 sheds light on interesting topics." },
  { id: 7, title: "Blog Title 7", image: blogImages[6], description: "Unveil the hidden stories and discussions in Blog 7." },
  { id: 8, title: "Blog Title 8", image: blogImages[7], description: "Explore the creativity and uniqueness of Blog 8." },
  { id: 9, title: "Blog Title 9", image: blogImages[8], description: "Dive into fascinating content featured in Blog 9." },
  { id: 10, title: "Blog Title 10", image: blogImages[9], description: "Discover insights that make Blog 10 a must-read." },
];

const Sections = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const currentPosts = blogPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <>
          <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bh1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="text-center text-white" data-aos="fade-up">
            <h1 className="text-5xl font-bold mb-4">Our Section</h1>
            <p className="text-lg">
              <Link href="/" className="text-blue-300 hover:underline mr-2">
                Home
              </Link>
              <span>/ Sections</span>
            </p>
          </div>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
                data-aos="fade-up"
              >
                <div className="relative h-64">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 hover:text-orange-500">
                    {post.title}
                  </h3>
                  <p className="text-gray-600">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <div className="flex justify-center py-8">
        <ul className="flex space-x-2">
          <li>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              className={`px-4 py-2 ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gray-300 hover:bg-gray-400"
              } rounded`}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <li key={page}>
                <button
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded ${
                    page === currentPage
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                >
                  {page}
                </button>
              </li>
            )
          )}
          <li>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              className={`px-4 py-2 ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gray-300 hover:bg-gray-400"
              } rounded`}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </li>
        </ul>
      </div>
        {/* Footer */}
        <Footer />
    </>
  );
};

export default Sections;
