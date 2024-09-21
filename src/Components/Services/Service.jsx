import React, { useEffect, useState, useRef } from "react";
import {
  RiShieldStarLine,
  Ri24HoursLine,
  RiRestaurant2Fill,
} from "react-icons/ri";
import { MdOutlineMap } from "react-icons/md";
import "../../style/ServiceCard.css"; // Ensure this path is correct

const Service = () => {
  const [animate, setAnimate] = useState(false);
  const serviceRef = useRef(null);

  useEffect(() => {
    // Intersection Observer to trigger animation when the section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // Stop observing after animation starts
        }
      },
      { threshold: 0.3 }
    );

    if (serviceRef.current) {
      observer.observe(serviceRef.current);
    }

    return () => {
      if (serviceRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      className="relative flex justify-center items-center min-h-screen overflow-hidden bg-gradient-to-r mt-10"
      ref={serviceRef}
    >
      {/* Background Shapes */}
      <div className={`absolute top-0 left-16 w-60 h-60 bg-pink-300 rounded-full opacity-30 animate-ping     ` }></div>
      <div className="absolute bottom-0 right-20 w-72 h-72  bg-pink-300 rounded-full opacity-20 "></div>

      {/* Card Section */}
      <div className="relative z-10 bg-Service-bg shadow-2xl bg-cover w-full sm:w-4/5 md:w-4/6 px-6 sm:px-16 py-10 rounded-lg">
        <h2 className="text-md lg:text-lg font-bold text-white mb-2 uppercase tracking-widest">
          SERVICES
        </h2>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          Strive Only For The Best.
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* High Class Security */}
          <div
            className={`relative flex flex-col items-center justify-center text-center p-6 shadow-lg rounded-lg bg-white staggered-item ${
              animate ? "animate-slide-in-left staggered-item-1" : ""
            }`}
          >
            {/* Left Side Primary Color Border */}
            <div className="absolute top-0 left-0 h-full w-1 bg-primary-500 rounded-l-lg"></div>

            {/* Card Content */}
            <div className="bg-[#dbeafe]  rounded-full p-4 flex justify-center items-center mb-4">
              <RiShieldStarLine className="h-8 w-8" color="#2986f9" />
            </div>
            <h1 className="text-lg font-semibold">High Class Security</h1>
          </div>

          {/* 24 Hours Room Service */}
          <div
            className={`relative flex flex-col items-center justify-center text-center p-6 shadow-lg rounded-lg bg-white staggered-item ${
              animate ? "animate-slide-in-left staggered-item-2" : ""
            }`}
          >
            <div className="absolute top-0 left-0 h-full w-1 bg-primary-500 rounded-l-lg"></div>
            <div className=" bg-[#fce7f3] rounded-full p-4 flex justify-center items-center mb-4">
              <Ri24HoursLine className="h-8 w-8" color="#f472b6" />
            </div>
            <h1 className="text-lg font-semibold">24 Hours Room Service</h1>
          </div>

          {/* Restaurant */}
          <div
            className={`relative flex flex-col items-center justify-center text-center p-6 shadow-lg rounded-lg bg-white staggered-item ${
              animate ? "animate-slide-in-right staggered-item-3" : ""
            }`}
          >
            <div className="absolute top-0 left-0 h-full w-1 bg-primary-500 rounded-l-lg"></div>
            <div className="bg-[#f3e8ff] rounded-full p-4 flex justify-center items-center mb-4">
              <RiRestaurant2Fill className="h-8 w-8" color="#c084fc" />
            </div>
            <h1 className="text-lg font-semibold">Restaurant</h1>
          </div>

          {/* Tourist Guide Support */}
          <div
            className={`relative flex flex-col items-center justify-center text-center p-6 shadow-lg rounded-lg bg-white staggered-item ${
              animate ? "animate-slide-in-right staggered-item-4" : ""
            }`}
          >
            <div className="absolute top-0 left-0 h-full w-1 bg-primary-500 rounded-l-lg"></div>
            <div className=" bg-[#ffe4e6]  rounded-full p-4 flex justify-center items-center mb-4">
              <MdOutlineMap className="h-8 w-8" color="#fb7185" />
            </div>
            <h1 className="text-lg font-semibold">Tourist Guide Support</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
