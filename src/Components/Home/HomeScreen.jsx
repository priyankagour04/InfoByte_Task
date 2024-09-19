import React, { useEffect, useState, useRef } from "react";
import BookBtnCard from "../Cards/BookBtnCard.JSX";
import "../../style/HomeScreen.css"; // Assuming this is where your CSS file is located

const HomeScreen = () => {
  const [animate, setAnimate] = useState(false);
  const homeScreenRef = useRef(null); // Reference to the section for observing

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setAnimate(true); // Trigger animation
          observer.disconnect(); // Stop observing after animation starts
        }
      },
      { threshold: 0.3 } // 30% of the section must be visible to trigger
    );

    if (homeScreenRef.current) {
      observer.observe(homeScreenRef.current);
    }

    return () => {
      if (homeScreenRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
      <div
        ref={homeScreenRef} // Attach ref for IntersectionObserver
        className="relative bg-cover bg-center bg-Home-bg h-screen flex items-center justify-center px-4 sm:px-8"
      >
        <div className="text-center text-white space-y-4 sm:space-y-6">
        {/* Animated Text */}
        <div className="text-center text-white space-y-4 sm:space-y-6 text-opacity-60">
          {" "}
          <p
            className={`text-sm sm:text-lg md:text-2xl ${
              animate ? "animate-slide-in-bottom" : ""
            }`}
          >
            Simple - Unique - Friendly
          </p>
        </div>

        <div className="text-center text-white space-y-4 sm:space-y-6">
          <h1
            className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
              animate ? "animate-slide-in-bottom-delay-1" : ""
            }`}
          >
            Make Yourself At Home{" "}
            <span
              className={`block ${
                animate ? "animate-slide-in-bottom-delay-2" : ""
              }`}
            >
              In Our <span className="text-primary-500">Guest House</span>.
            </span>
          </h1>
        </div>
        </div>

        {/* Overlapping Card */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center -mb-16 ">
          <BookBtnCard />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
