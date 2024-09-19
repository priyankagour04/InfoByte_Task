import React, { useState, useEffect, useRef } from "react";
import roomOne from "../../assets/small.jpg";
import roomTwo from "../../assets/large.jpg";
import BookBtn from "../Button/BookBtn";
import "../../style/RoomCard.css";

const RoomCards = () => {
  const [animate, setAnimate] = useState(false);
  const roomCardsRef = useRef(null); // Reference for the card section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // Stop observing after animation starts
        }
      },
      { threshold: 0.3 } // Adjust this value as needed
    );

    if (roomCardsRef.current) {
      observer.observe(roomCardsRef.current);
    }

    return () => {
      if (roomCardsRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      className="flex flex-col lg:flex-row lg:items-start lg:space-x-10 space-y-10 lg:space-y-0"
      ref={roomCardsRef} // Attach ref to the container
    >
      {/* Cozy Haven Room Card */}
      <div
        className={`shadow-2xl rounded-md w-full lg:w-96 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ${
          animate ? "animate-slide-in-left" : ""
        }`}
      >
        <div>
          <img
            src={roomOne}
            className="h-64 w-full lg:h-80 lg:w-96 rounded-tl-lg rounded-tr-lg object-cover"
            alt="Cozy Haven Room"
          />
        </div>
        <div className="p-5 font-semibold">
          <span className="text-lg lg:text-xl">Cozy Haven Room</span>
          <p className="text-text-text-light mt-2 text-sm lg:text-lg">
            Escape to comfort in our Cozy Haven Room, a snug retreat designed
            for intimate relaxation.
          </p>
          <p className="text-text-text-light my-4 text-base lg:text-xl">
            Starting from <span className="text-black">Rs. 1000/night</span>
          </p>
          <BookBtn />
        </div>
      </div>

      {/* Spacious Serenity Suite Card */}
      <div
        className={`shadow-2xl rounded-md w-full lg:w-96 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ${
          animate ? "animate-slide-in-left" : ""
        }`}
      >
        <div>
          <img
            src={roomTwo}
            className="h-64 w-full lg:h-80 lg:w-96 rounded-tl-lg rounded-tr-lg object-cover"
            alt="Spacious Serenity Suite"
          />
        </div>
        <div className="p-5 font-semibold">
          <span className="text-lg lg:text-xl">Spacious Serenity Suite</span>
          <p className="text-text-text-light mt-2 text-sm lg:text-lg">
            Indulge in luxury and ample space in our Spacious Serenity Suite,
            where tranquility meets roomy elegance.
          </p>
          <p className="text-text-text-light my-4 text-base lg:text-xl">
            Starting from <span className="text-black">Rs. 1500/night</span>
          </p>
          <BookBtn />
        </div>
      </div>
    </div>
  );
};

export default RoomCards;
