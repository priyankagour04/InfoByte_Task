import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import BookBtn from "../Button/BookBtn";
import "../../style/Navbar.css"; // Import the CSS file containing the underline styles

const Navbar = ({ links = [], contactText }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50  ${
        isScrolled ? "bg-primary-500" : "bg-transparent"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="ps-16 font-semibold text-lg text-white text-opacity-75">
          <h6>Kingsukh </h6>
          <h6>Guest House</h6>
        </div>
        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-8 font-semibold">
            {links.map((link, index) => (
              <li
                key={index}
                className="text-lg text-white text-opacity-80 nav-item"
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
        <div className="flex items-center">
          <button
            onClick={toggleNav}
            className="block lg:hidden px-3 py-1 border rounded text-white border-none  hover:border-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div className="hidden lg:block">
            <Link
              activeClass="active"
              to={contactText}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <BookBtn />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden transition-all duration-1000 ease-in-out ${
          isNavOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } ${isScrolled ? "bg-primary-500" : "bg-primary-500"} transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-start p-4 space-y-4 transform transition-opacity duration-1000 ease-in-out bg-primary-500">
          {links.map((link, index) => (
            <li
              key={index}
              className="text-lg font-bold text-white text-center border-gray-400 w-full"
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
