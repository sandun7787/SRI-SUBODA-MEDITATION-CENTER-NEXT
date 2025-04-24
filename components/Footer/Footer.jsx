// components/Footer.js
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Contact Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-orange-500 text-xl font-semibold mb-3">CONTACT US TODAY</h3>
            <p className="text-base">Sanatha Suwaya</p>
            <p className="text-base">112/1 Araliya Mawatha Kandy, 20400</p>
            <p className="text-base">Sri Lanka</p>
            <p className="mt-2 text-base">+94 71 920 39 17 / +94 71 852 68 34</p>
            <a href="mailto:retreat@sanathasuwaya.org" className="text-orange-400 hover:text-white mt-1 text-base">
              retreat@sanathasuwaya.org
            </a>
            <p className="mt-2 text-base">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-base">Saturday - Sunday: 9:00 AM - 12:00 PM</p>

            {/* Social Icons */}
            <div className="mt-5 flex justify-center md:justify-start space-x-5 text-xl">
              <a href="https://www.facebook.com/SanathaSuwaya" target="_blank" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/SanathaSuwaya" target="_blank" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/c/SanathaSuwaya" target="_blank" className="text-gray-400 hover:text-white">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.linkedin.com/company/sanathasuwaya" target="_blank" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Google Map Section */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-orange-500 text-xl font-semibold mb-3">FIND US</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.013640194279!2d80.64564381468256!3d7.290054220221146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25916c83726b3%3A0xd40849759d442b47!2sSanatha%20Suwaya%20Meditation%20%26%20Retreat!5e0!3m2!1sen!2slk!4v1629233506781!5m2!1sen!2slk"
              width="320"
              height="220"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Facebook Page View */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-orange-500 text-xl font-semibold mb-3">Find us on Facebook</h3>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSanathaSuwaya&tabs=timeline&width=320&height=220&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="320"
              height="220"
              style={{ border: "0" }}
              scrolling="no"
              frameBorder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-400 text-base">
          <p>&copy; 2025 Sanatha Suwaya. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
