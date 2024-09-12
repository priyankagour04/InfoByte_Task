import React from "react";
import BookBtnCard from '../Cards/BookBtnCard.JSX'

const HomeScreen = () => {
  return (
    <>
      <div className="relative bg-cover bg-center bg-Home-bg h-screen flex items-center justify-center px-4 sm:px-8">
        <div className="text-center text-white space-y-4 sm:space-y-6">
          <p className="text-sm sm:text-lg md:text-2xl">Simple - Unique - Friendly</p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Make Yourself At Home {" "}
            <h1>
              In Our <span className="text-primary-500">Guest House</span>.
            </h1>
          </h1>
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
