import Navbar from "../../components/Nav/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx"; // Correct import
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

// Importing images
import heroImage from "/public/assets/image/f2.jpg";
import objectiveImg from "/public/assets/image/B2.jpg";
import centerImg from "/public/assets/image/B3.jpg";
import historyImg from "/public/assets/image/m22.jpg";
import coach3 from "/public/assets/image/g3.jpg";
import coach4 from "/public/assets/image/h2.jpg";
import bg3 from "/public/assets/image/in1.jpg";
import bg1 from "/public/assets/image/f.jpg";
import bg8 from "/public/assets/image/f3.jpg";
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
        className="hero-wrap h-[70vh] sm:h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="text-center text-white" data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Sri Subodha Meditation Center</h1>
            <p className="text-base sm:text-lg">
              <Link href="/" className="text-blue-300 hover:underline mr-2">
                Home
              </Link>
              <span> / About</span>
            </p>
          </div>
        </div>
      </section>

     {/* Our Objective Section */}
<section className="bg-gray-50 py-10 sm:py-16">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="p-4 sm:p-6" data-aos="fade-right">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Our Objective</h2>
      <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
        At Sri Subodha Meditation Center, we are endeavoring to create a conducive atmosphere that provides the right set of circumstances for individuals who are into meditation practice and mindfulness and the core of Buddhism through residential retreats. While you are learning a bit about Buddhism, irrespective of the ideology and beliefs you hold onto, participants are taught the techniques to train your attention to achieve the state of calm, strengthening your ability to focus and manage your thoughts so that it can transform the way you navigate your lives.
      </p>
    </div>
    <div className="overflow-hidden rounded-lg shadow-lg">
      <Image
        src={objectiveImg}
        alt="Our Objective"
        className="w-full h-48 sm:h-72 md:h-96 object-cover"
        data-aos="fade-left"
      />
    </div>
  </div>
</section>

{/* About the Center Section */}
<section className="bg-white py-10 sm:py-16">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="overflow-hidden rounded-lg shadow-lg">
      <Image
        src={centerImg}
        alt="About the Center"
        className="w-full h-48 sm:h-72 md:h-96 object-cover"
        data-aos="fade-right"
      />
    </div>
    <div className="p-4 sm:p-6" data-aos="fade-left">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">About the Center</h2>
      <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
        Ambuluwawa Sri Subhodha Meditation Center, an affiliate of the Sri Subodharamaya International Buddhist Center, Peradeniya, is located in a beautiful, peaceful, and quiet environment. It is fully equipped with all facilities and is designed for solitary meditation spiritual development. The present extent of the land belonging to the Centre is about six and a half acres, and some striking characteristics of the land are the loftiness of the dominant trees, rocky outcrops, and small streams. This unspoiled environment, created by the blessings of nature is an ideal place for practicing meditation. Currently, meditation retreats take place every month, and those who attend are mostly foreigners who seek solitude and real happiness through meditation. The center has been fully developed, well-furnished, and is able to accommodate about 30 people at one time.
      </p>
    </div>
  </div>
</section>

{/* Our History Section */}
<section className="bg-gray-50 py-10 sm:py-16">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="p-4 sm:p-6" data-aos="fade-right">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Our History</h2>
      <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
        The Sri Subodha Retreat Centre was established as the main retreat center of Sri Subodharama International Buddhist Centre, Peradeniya, Sri Lanka. The construction of the buildings in the center began in 2007, with the building of a Dhamma hall and two kutis. The development of the center has been made possible by the commitment and support provided by the Most Venerable Wattegama Dhammawasa Nayaka Maha Thero and by many devotees. Venerable Dhammawasa Nayaka Maha Thero, who is the Chief Incumbent and the President of the Centre, is also the Chief Incumbent of the Sri Subodharama International Buddhist Centre, Peradeniya, the Chief Sanganayaka for Sri Lanka, and the Sanganayaka for Australia, Providing guidance and meditation instructions to all who sought it, it was he who pioneered the meditation center. The Chief Nun, Ven. Nadimale Sudhamma, played a major role in building this center. For many years, she conducted retreats and openly provided spiritual support and meditation guidance. Her tireless work and her effort in many ways to keep the center running smoothly, will be remembered forever.
      </p>
    </div>
    <div className="overflow-hidden rounded-lg shadow-lg">
      <Image
        src={historyImg}
        alt="Our History"
        className="w-full h-48 sm:h-72 md:h-96 object-cover"
        data-aos="fade-left"
      />
    </div>
  </div>
</section>
{/* The Teachers in the Past Section */}
<section className="bg-white py-10 sm:py-16">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="p-4 sm:p-6" data-aos="fade-right">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">The Teachers in the Past</h2>
      <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
        When the center was established, the Most Venerable Udaeeriyagama Dhammajiva Maha Thero, the Abbot and the Senior Meditation Teacher of the Nissarana Forest Monastery, Meethirigala, was the Chief Mentor. Most Ven. Ellawala Vijitha Nanda Maha Thero, a renowned teacher, conducted a 3-day retreat monthly at the Centre. Venerable Gampaha Gnaweera Thero, another well-known Vipassana Meditation Instructor, as well as the Abbot of Nihada Arana Monastery, often conducted retreats at this center. The resident nun, Venerable Waliweriye Gothami, also provided support and guidance to those who had special needs.
      </p>
    </div>
    <div className="overflow-hidden rounded-lg shadow-lg">
      <Image
        src={bg1}
        alt="The Teachers in the Past"
        className="w-full h-48 sm:h-72 md:h-96 object-cover"
        data-aos="fade-left"
      />
    </div>
  </div>
</section>
{/* Our Staff Section */}
<section className="bg-white py-10 sm:py-16">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="p-4 sm:p-6" data-aos="fade-right">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Our Staff</h2>
      <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
        Meet the dedicated staff members of the Sri Subodha Meditation Center, each contributing their unique expertise to ensure a supportive and enriching experience for all visitors.
      </p>
    </div>
    <div className="overflow-hidden rounded-lg shadow-lg">
      <Image
       
        alt="Our Staff Overview"
        className="w-full h-48 sm:h-72 md:h-96 object-cover"
        data-aos="fade-left"
      />
    </div>
  </div>

  {/* President */}
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10">
    <div className="overflow-hidden rounded-lg shadow-lg">
      <Image
         src={historyImg}
        alt="Most Venerable Wattegama Dhammawasa Thero"
        className="w-full h-48 sm:h-72 md:h-96 object-cover"
      />
    </div>
    <div className="p-4 sm:p-6" data-aos="fade-right">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">President – Most Venerable Wattegama Dhammawasa Thero</h3>
      <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
        The Most Venerable Wattegama Dhammawasa Thero is the chief incumbent of Sri Subodha Meditation Center as well as the abbot of Sri Subodarama International Buddhist Center, Peradeniya, and many other monasteries and Buddhist centers island wide. Holding dual citizenship in both Sri Lanka and Australia, he is also the chief monk at Lankaramaya Temple and Sati Grove Meditation Center in Brisbane...
      </p>
    </div>
  </div>

  {/* Resident Instructor */}
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10">
    <div className="overflow-hidden rounded-lg shadow-lg">
      <Image
     
        alt="Venerable Gurudeniye Mettajeewa Thero"
        className="w-full h-48 sm:h-72 md:h-96 object-cover"
      />
    </div>
    <div className="p-4 sm:p-6" data-aos="fade-right">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Resident Instructor - Venerable Gurudeniye Mettajeewa Thero</h3>
      <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
        Venerable Gurudeniye Mettajeewa Thero, a disciple of the Most Venerable Dhammawasa Thero, has served as the meditation instructor at the Sri Subodha Meditation Center for more than four years. During that time, he has guided many yogis, both local and foreign, in the practice of meditation and mindfulness...
      </p>
    </div>
  </div>

  {/* Managing Director */}
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10">
    <div className="overflow-hidden rounded-lg shadow-lg">
      <Image
        src={bg8}
        alt="Anura Gunaratne"
        className="w-full h-48 sm:h-72 md:h-96 object-cover"
      />
    </div>
    <div className="p-4 sm:p-6" data-aos="fade-right">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Managing Director – Anura Gunaratne</h3>
      <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
        Anura Gunaratne, the managing director of the center, gained his master’s degree in economics from the University of Peradeniya. During his ten years as the director of several tour agencies, he often directed tourists interested in Buddhism and meditation practice toward spiritual programs conducted by both local and foreign teachers...
      </p>
    </div>
  </div>

  {/* Coordinate Manager */}
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10">
    <div className="overflow-hidden rounded-lg shadow-lg">
      <Image
       
        alt="Wasala Abeyratne"
        className="w-full h-48 sm:h-72 md:h-96 object-cover"
      />
    </div>
    <div className="p-4 sm:p-6" data-aos="fade-right">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Coordinate Manager – Wasala Abeyratne</h3>
      <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
        Wasala Abeyratne acts as the Coordinate Manager of the meditation center. It was he, who, having seen the location and the natural setting and experienced the serenity and the wonderful ambience, first suggested conducting retreats for tourists who are interested in Buddhism and spiritual development...
      </p>
    </div>
  </div>

  {/* Supervisor */}
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10">
    <div className="overflow-hidden rounded-lg shadow-lg">
      <Image
     
        alt="M K G Dayananda"
        className="w-full h-48 sm:h-72 md:h-96 object-cover"
      />
    </div>
    <div className="p-4 sm:p-6" data-aos="fade-right">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Supervisor – M K G Dayananda</h3>
      <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
        Since its inception in 2007, M. K. G. Dayananda, the younger brother of Venerable Dhammawasa, has been the supervisor of the meditation center, responsible for all activities. He has skillfully overseen the growth of the center from only two cottages (kutis) to the present thirteen and the addition of the dining hall, the shrine, and the library...
      </p>
    </div>
  </div>
</section>


      {/* Meet Our Coaches Section */}
      <section className="bg-white py-10 sm:py-16">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
            <h3 className="text-pink-500 uppercase text-sm sm:text-lg tracking-wide">Coaches</h3>
            <h2 className="text-2xl sm:text-3xl font-bold">Meet Our Yoga Coaches</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{ name: "Mark Brook", img: coach3 }, { name: "Sarah Henderson", img: coach3 }, { name: "George Hump", img: coach3 }, { name: "Victor Hump", img: coach4 }].map(
              (coach, index) => (
                <div key={index} className="text-center" data-aos="fade-up">
                  <div className="w-40 sm:w-60 h-40 sm:h-60 mx-auto overflow-hidden rounded-lg shadow-lg">
                    <Image src={coach.img} alt={coach.name} width={240} height={240} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mt-2 sm:mt-4">{coach.name}</h3>
                  <p className="text-pink-500 text-sm sm:text-base">Owner / Head Coach</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section
        className="relative bg-cover bg-center py-10 sm:py-16 text-white"
        style={{ backgroundImage: `url(${bg3.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto relative z-10 text-center grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          {[{ label: "Happy Customers", value: "5000" }, { label: "Yoga Workshops", value: "4560" }, { label: "Years of Experience", value: "570" }, { label: "Lessons Conducted", value: "900" }].map(
            (counter, index) => (
              <div key={index} className="text-center" data-aos="fade-up">
                <h3 className="text-3xl sm:text-5xl font-bold">{counter.value}</h3>
                <p className="text-sm sm:text-lg">{counter.label}</p>
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
