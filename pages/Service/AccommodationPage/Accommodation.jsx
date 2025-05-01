import Navbar from "@/components/Nav/Navbar";
import React from "react";
import Link from "next/link";
import bg_3 from "/public/assets/image/f2.jpg";

// Sample data for accommodation types with room images for meditation center
const accommodationTypes = [
  {
    title: "Serenity Room",
    description: "A peaceful room designed for tranquility and deep meditation. With natural wood furnishings and soft lighting, this room encourages quiet reflection and inner peace. This is ideal for individuals who seek comfort but wish to remain connected with nature. It also allows for shared experiences, perfect for meditation groups or shared retreats.",
    amenities: [
      "Natural Wood Furniture",
      "Private Meditation Space",
      "Soft Lighting",
      "Ambient Music",
      "Yoga Mat",
      "Nature Views",
      "Shared Room Option",
    ],
    images: [
      "/images/serenity-room1.jpg",
      "/images/serenity-room2.jpg"
    ],
    price: "2000 LKR per night",
  },
  {
    title: "Harmony Room",
    description: "This room is for those looking to balance their mind and body. Featuring simple decor with calming colors, it is perfect for yoga, mindfulness practices, and group meditation sessions. The room offers a moderate level of comfort and can also be used for shared stays, fostering a deeper connection with nature and other guests.",
    amenities: [
      "Yoga Mat",
      "Floor Cushions",
      "Aromatherapy Diffuser",
      "Natural Light",
      "Soothing Music",
      "Meditation Corner",
      "Shared Room Option",
    ],
    images: [
      "/images/harmony-room1.jpg",
      "/images/harmony-room2.jpg"
    ],
    price: "1800 LKR per night",
  },
  {
    title: "Nature Retreat Room",
    description: "Escape into nature in this room designed to bring the outside in. With large windows offering scenic views of the surrounding nature, it’s perfect for those who want to reconnect with the earth. This room also accommodates shared stays, allowing guests to immerse themselves in nature while sharing the experience with like-minded individuals.",
    amenities: [
      "Floor-to-Ceiling Windows",
      "Private Balcony",
      "Nature Soundscapes",
      "Fresh Plants",
      "Eco-friendly Decor",
      "Peaceful Ambience",
      "Shared Room Option",
    ],
    images: [
      "/images/nature-retreat1.jpg",
      "/images/nature-retreat2.jpg"
    ],
    price: "2200 LKR per night",
  }
];

const Accommodation = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bg_3.src})` }} // Replace with your background image path
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container relative z-10 text-center text-white" data-aos="fade-up">
          <h1 className="text-4xl font-bold mb-3">Sri Suboda Meditation Center</h1>
          <Link href="/" className="text-blue-300 hover:underline mr-2">
            Home
          </Link>
          <span> / Accommodation</span>
        </div>
      </section>

      <div className="bg-gray-100 py-10 px-4 pt-24">
        <h1 className="text-4xl font-bold text-center mb-8">Our Rooms</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodationTypes.map((room, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              {/* Room Header Section with Image */}
              <div className="relative">
                <img
                  src={room.images[0]}  // Display the first image for the room as the header
                  alt={room.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-md"></div> {/* Overlay for better contrast */}
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white">
                  <h2 className="text-3xl font-semibold">{room.title}</h2> {/* Room Title Overlay */}
                </div>
              </div>

              <p className="text-gray-600 mb-4">{room.description}</p>
              <div className="text-xl font-semibold text-blue-600 mb-4">{room.price}</div>

              <h3 className="text-xl font-semibold mb-2">Included Amenities:</h3>
              <ul className="list-disc pl-6 mb-4">
                {room.amenities.map((amenity, index) => (
                  <li key={index} className="text-gray-600">{amenity}</li>
                ))}
              </ul>

              {/* Navigation Button */}
              <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                View Room Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accommodation;
