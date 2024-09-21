import React, { useEffect, useState, useRef } from "react";
import outimg from "../../assets/out.jpg";
import BookBtn from "../Button/BookBtn";
import "../../style/Aboutus.css"; // Add a custom CSS file for animations

const Aboutus = () => {
  const [animate, setAnimate] = useState(false);
  const aboutUsRef = useRef(null); // Create a reference for the section

  // Observer that triggers animation when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // Stop observing after triggering the animation
        }
      },
      { threshold: 0.3 } // Trigger animation when 30% of the section is visible
    );

    if (aboutUsRef.current) {
      observer.observe(aboutUsRef.current);
    }

    return () => {
      if (aboutUsRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={aboutUsRef} // Attach ref to this section
      className="container mx-auto px-4 lg:px-10 py-10 lg:py-16 mt-10  lg:mt-24"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Left Image Section */}
        <div
          className={`w-full md:w-1/2 flex justify-center items-center lg:px-10 ${
            animate ? "animate-slide-in-left" : ""
          }`}
        >
          <img
            src={outimg}
            alt="King Sukh Guest House"
            className="w-full h-auto max-h-[300px] sm:max-h-[400px]  md:max-h-[600px] lg:mt-0 mt-20 md:mt-20 object-cover rounded-lg"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8 md:text-left py-12">
          <div
            className={`flex items-center space-x-4 ${
              animate ? "animate-slide-in-right-delay-1" : ""
            }`}
          >
            <h2 className="text-md lg:text-lg font-bold text-gray-700 uppercase tracking-widest">
              About us
            </h2>
            <hr className="w-20 border-t-2 border-[#e82574]" />
          </div>

          <h1
            className={`text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 ${
              animate ? "animate-slide-in-right-delay-2" : ""
            }`}
          >
            The Best Holidays Start Here!
          </h1>

          <p
            className={`text-sm md:text-base lg:text-lg mb-4 text-text-text-light ${
              animate ? "animate-slide-in-right-delay-3" : ""
            }`}
          >
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped
            by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
            Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
            captivating Panchat Dam. Revel in the embrace of comfort, relish
            delightful meals, and unwind in our verdant garden oasis. Your ideal
            retreat beckons, promising a harmonious blend of nature’s beauty and
            heartfelt hospitality. Explore the hidden gems of Purulia, creating
            memories that linger long after your stay.
          </p>

          <p
            className={`font-bold text-sm md:text-base lg:text-lg mb-4 text-blue-500 ${
              animate ? "animate-slide-in-right-delay-4" : ""
            }`}
          >
            Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
            723156
            <br />
            Contact us: +91 9007062180
          </p>

          <div className={`${animate ? "animate-slide-in-right-delay-5" : ""}`}>
            <BookBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
