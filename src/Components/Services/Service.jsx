import React, { useEffect, useState, useRef } from "react";
import {
  RiShieldStarLine,
  Ri24HoursLine,
  RiRestaurant2Fill,
} from "react-icons/ri";
import { MdOutlineMap } from "react-icons/md";
import "../../style/ServiceCard.css";

const Service = () => {
  const [animate, setAnimate] = useState(false);
  const serviceRef = useRef(null); // Create a reference for the service section

  useEffect(() => {
    // Function to handle intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // Stop observing after animation starts
        }
      },
      { threshold: 0.3 } // Adjust the threshold value as per your requirement
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
    <>
     <div className="">
     <div className="mt-6 relative " ref={serviceRef}>
        {/* Background Image for large screens */}
        <div className="absolute w-full bg-Service-bg bg-cover bg-center  md:h-[calc(50vh-80px)] lg:h-[calc(119vh-150px)] px-4 sm:px-8 sm:block hidden"></div>

        {/* Card Section */}
        <div className="relative shadow-2xl bg-white w-full sm:w-4/5 md:w-4/6 lg:w-2/5 px-6 sm:px-16 py-10  sm:float-right sm:me-0 lg:me-20 z-10">
          <h2 className="text-md lg:text-lg font-bold text-gray-700 mb-2 uppercase tracking-widest">
            SERVICES
          </h2>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Strive Only For The Best.
          </h1>

          {/* Services List */}
          <div className="text-lg sm:text-xl font-semibold">
            {/* High Class Security */}
            <div
              className={`flex my-10 gap-5 staggered-item ${
                animate ? "animate-slide-in-right staggered-item-1" : ""
              }`}
            >
              <div className="bg-[#dbeafe] rounded-full p-2 flex justify-center items-center">
                <RiShieldStarLine className="h-7 w-7" color="#60a5fa" />
              </div>
              <div>
                <h1>High Class Security</h1>
              </div>
            </div>

            {/* 24 Hours Room Service */}
            <div
              className={`flex my-10 gap-5 staggered-item ${
                animate ? "animate-slide-in-right staggered-item-2" : ""
              }`}
            >
              <div className="bg-[#fce7f3] rounded-full p-2 flex justify-center items-center">
                <Ri24HoursLine className="h-7 w-7" color="#f472b6" />
              </div>
              <div>
                <h1>24 Hours Room Service</h1>
              </div>
            </div>

            {/* Restaurant */}
            <div
              className={`flex my-10 gap-5 staggered-item ${
                animate ? "animate-slide-in-right staggered-item-3" : ""
              }`}
            >
              <div className="bg-[#f3e8ff] rounded-full p-2 flex justify-center items-center">
                <RiRestaurant2Fill className="h-7 w-7" color="#c084fc" />
              </div>
              <div>
                <h1>Restaurant</h1>
              </div>
            </div>

            {/* Tourist Guide Support */}
            <div
              className={`flex my-10 gap-5 staggered-item ${
                animate ? "animate-slide-in-right staggered-item-4" : ""
              }`}
            >
              <div className="bg-[#ffe4e6] rounded-full p-2 flex justify-center items-center">
                <MdOutlineMap className="h-7 w-7" color="#fb7185" />
              </div>
              <div>
                <h1>Tourist Guide Support</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default Service;
