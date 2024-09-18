import React from "react";
import outimg from "../../assets/out.jpg";
import palash from "../../assets/palash.webp";
import recep from "../../assets/recep.jpg";
import ayodhya from "../../assets/ayodhya.webp";
import large from "../../assets/large.jpg";
import small from "../../assets/small.jpg";
import baranti from "../../assets/baranti.webp";
import flower from "../../assets/flower.jpg";
import room from "../../assets/room1.jpg";
import mithonDam from "../../assets/mithonDam.webp";

const Gallery = () => {
  return (
    <>
      <div className="mt-24">
        <div className="flex items-center justify-center space-x-4">
          <h2 className="text-md lg:text-lg font-bold text-gray-700 uppercase tracking-widest">
            Gallery
          </h2>
          <hr className="w-20 border-t-2 border-[#e82574]" />
        </div>

        <div className="mt-8">
          {/* First Row */}
          <div className="flex flex-wrap">
            {/* Left Image (Takes full width on small screens and 1/4th on medium screens and above) */}
            <div className="w-full md:w-1/4">
              <img
                src={outimg}
                className="w-full h-96 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                alt="Outdoor"
              />
            </div>

            {/* Middle Section (Will take full width on small screens and adjust to 3/4 on larger screens) */}
            <div className="w-full md:w-3/4 flex flex-col">
              <div className="flex flex-wrap">
                {/* First row of three images */}
                <div className="w-full sm:w-1/2 lg:w-2/4">
                  <img
                    src={ayodhya}
                    className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                    alt="Ayodhya"
                  />
                </div>
                <div className="w-full sm:w-1/4 lg:w-1/4">
                  <img
                    src={large}
                    className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                    alt="Large Room"
                  />
                </div>
                <div className="w-full sm:w-1/4 lg:w-1/4">
                  <img
                    src={palash}
                    className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                    alt="Palash"
                  />
                </div>
              </div>

              <div className="flex flex-wrap">
                {/* Second row of three images */}
                <div className="w-full sm:w-1/2 lg:w-1/4">
                  <img
                    src={small}
                    className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                    alt="Small Room"
                  />
                </div>
                <div className="w-full sm:w-1/4 lg:w-2/4">
                  <img
                    src={baranti}
                    className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                    alt="Baranti"
                  />
                </div>
                <div className="w-full sm:w-1/4 lg:w-1/4">
                  <img
                    src={recep}
                    className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                    alt="Reception"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/4">
              <img
                src={flower}
                className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                alt="Flower"
              />
            </div>
            <div className="w-full md:w-2/4">
              <img
                src={room}
                className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                alt="Room"
              />
            </div>
            <div className="w-full md:w-1/4">
              <img
                src={mithonDam}
                className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                alt="Mithon Dam"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
