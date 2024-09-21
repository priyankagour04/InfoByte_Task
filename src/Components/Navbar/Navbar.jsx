import React, { useState } from "react";
import { Link } from "react-scroll";
import BookBtn from "../Button/BookBtn";
import "../../style/Navbar.css"; // Import the CSS file for styles

const Navbar = ({ links = [], contactText }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle navigation
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Function to close nav after clicking a link on mobile
  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out`}>
      <div className="lg:container lg:mx-auto px-4 py-5 flex justify-between items-center lg:bg-transparent bg-primary-500">
        {/* Logo Section */}
        <div className="ps-16 font-semibold text-lg text-white text-opacity-75">
          <h6>Kingsukh</h6>
          <h6>Guest House</h6>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-8 font-semibold ">
            {links.map((link, index) => (
              <li key={index} className="text-lg text-white text-opacity-80 nav-item hover:cursor-pointer">
                <Link
                  activeClass="active"
                  to={link.name}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center">
          <button
            onClick={toggleNav}
            className="block lg:hidden px-3 py-1 border rounded text-white border-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {/* Booking Button (Desktop) */}
          <div className="hidden lg:block">
            <Link to={contactText} spy={true} smooth={true} offset={-70} duration={500}>
              <BookBtn />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-1000 ease-in-out ${
          isNavOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-start p-4 space-y-4 bg-primary-500">
          {links.map((link, index) => (
            <li
              key={index}
              className="text-lg font-bold text-white text-center border-gray-400 w-full"
              onClick={closeNav} // Close nav after clicking a link
            >
              <Link
                activeClass="active"
                to={link.name}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
