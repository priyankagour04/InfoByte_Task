import React from "react";

const CountCard = () => {
  return (
    <>
      <div className="mx-10 md:mx-16 lg:mx-20 relative top-10">
        <div className="shadow-lg w-full rounded-lg bg-white p-8 text-center flex flex-col md:flex-row justify-around">
          {/* First count section */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl font-bold">100+</h1>
            <h1 className="text-text-text-light font-medium mt-2">Bookings Completed</h1>
          </div>
          
          {/* Second count section */}
          <div>
            <h1 className="text-4xl font-bold">150+</h1>
            <h1 className="text-text-text-light font-medium mt-2">Happy Customers</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountCard;
