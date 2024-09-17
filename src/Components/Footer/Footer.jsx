import React from "react";
import BookBtn from "../Button/BookBtn";
import facebook from "../../assets/facebook.png";
import insta from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#0c0a09] text-white pt-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Kingsukh Guest House Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Kingsukh Guest House</h2>
          <p className="mb-6 text-[#78716c]">
            Discover a world of comfort, luxury, and adventure as you explore
            our curated selection of hotels, making every moment of your getaway
            truly extraordinary.
          </p>
          <BookBtn />
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-[#78716c] hover:text-white">
                Browse Destinations
              </a>
            </li>
            <li>
              <a href="#" className="text-[#78716c] hover:text-white">
                Special Offers & Packages
              </a>
            </li>
            <li>
              <a href="#" className="text-[#78716c] hover:text-white">
                Room Types & Amenities
              </a>
            </li>
            <li>
              <a href="#" className="text-[#78716c] hover:text-white">
                Customer Reviews & Ratings
              </a>
            </li>
            <li>
              <a href="#" className="text-[#78716c] hover:text-white">
                Travel Tips & Guides
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-[#78716c] hover:text-white">
                Concierge Assistance
              </a>
            </li>
            <li>
              <a href="#" className="text-[#78716c] hover:text-white">
                Flexible Booking Options
              </a>
            </li>
            <li>
              <a href="#" className="text-[#78716c] hover:text-white">
                Airport Transfers
              </a>
            </li>
            <li>
              <a href="#" className="text-[#78716c] hover:text-white">
                Wellness & Recreation
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-[#78716c] hover:text-white">
            Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
            723156
          </p>
          <p className="mt-2">
            <a
              href="mailto:kkghosh0099@gmail.com"
              className="text-[#78716c] hover:text-white"
            >
              kkghosh0099@gmail.com
            </a>
          </p>
          <p className="mt-2">
            <a
              href="tel:+919007062180"
              className="text-[#78716c] hover:text-white"
            >
              +91 9007062180
            </a>
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <img
              src={facebook}
              className="h-7 w-7 hover:opacity-80"
              alt="Facebook"
            />
            <img
              src={insta}
              className="h-7 w-7 hover:opacity-80"
              alt="Instagram"
            />
            <img
              src={youtube}
              className="h-7 w-7 hover:opacity-80"
              alt="YouTube"
            />
            <img
              src={twitter}
              className="h-7 w-7 hover:opacity-80"
              alt="Twitter"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12 py-4 text-[#78716c] border-t border-[#78716c]">
        Copyright © 2024 Kingsukh Guest House. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
