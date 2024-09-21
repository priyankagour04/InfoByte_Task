import React from "react";
import RoomCards from "../Cards/RoomCards";

const Room = () => {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-16">
        <div className="my-8 lg:my-16  lg:text-left">
          <div className="flex items-center space-x-4 mb-1">
            <h2 className="text-md lg:text-lg font-semibold uppercase tracking-widest">
              OUR LIVING ROOM
            </h2>
            <hr className="w-20 border-t-2 border-[#e82574]" />
          </div>
          <h1 className="text-2xl lg:text-4xl font-bold">
            The Most Memorable Rest
          </h1>
          <h1 className="text-2xl lg:text-4xl font-bold">Time Starts Here.</h1>
        </div>
        <div className="">
          <RoomCards />
        </div>
      </div>
    </>
  );
};

export default Room;
