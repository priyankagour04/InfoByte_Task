import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const ContactForm = () => {
  const [focusField, setFocusField] = useState("");

  return (
    <>
      <div className="relative flex mt-8 items-center">
        {/* Contact Info Section */}
        <div className="absolute bg-primary-500 w-1/4 text-white p-12 rounded-2xl left-56  -translate-x-1/4 z-10 shadow-xl">
          <h1 className="text-3xl font-semibold text-white">
            Contact Info
          </h1>
          <div>
            <div className="flex mt-6">
              <div className="mt-1 text-3xl">
                <IoLocationOutline />
              </div>
              <div className="">
                Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
              </div>
            </div>
            <div className="flex items-center my-6">
              <div className="text-2xl p-1">
                <MdOutlineEmail />
              </div>
              <div>
                <a href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <div className="text-2xl p-1">
                <FiPhoneCall />
              </div>
              <div>
                <a href="tel:+919007062180">+91 9007062180</a>
              </div>
            </div>
            <div className="flex gap-3 text-2xl mt-24">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="relative w-full lg:w-4/6 ml-auto bg-white p-10 rounded-3xl shadow-2xl z-0 me-36">
          <h2 className="text-2xl font-bold text-pink-500 mb-6 ms-44 mt-6">Send a Message</h2>
          <form className="ms-44">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
              {/* First Name */}
              <div className="relative">
                <label
                  className={`absolute top-5 left-0 transform transition-all duration-300 ${
                    focusField === "firstName"
                      ? "text-pink-500 -translate-y-6 text-sm font-semibold" 
                      : "translate-y-0 text-base"
                  }`}
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="border-b-2 border-gray-300 focus:outline-none w-full p-2 mt-4"
                  onFocus={() => setFocusField("firstName")}
                  onBlur={() => setFocusField("")}
                />
              </div>

              {/* Last Name */}
              <div className="relative">
                <label
                  className={`absolute top-5 left-0 transform transition-all duration-300 ${
                    focusField === "lastName"
                      ? "text-pink-500 -translate-y-6 text-sm font-semibold"
                      : " translate-y-0 text-base"
                  }`}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="border-b-2 border-gray-300 focus:outline-none w-full p-2 mt-4"
                  onFocus={() => setFocusField("lastName")}
                  onBlur={() => setFocusField("")}
                />
              </div>

              {/* Email Address */}
              <div className="relative">
                <label
                  className={`absolute top-5 left-0 transform transition-all duration-300 ${
                    focusField === "email"
                      ? "text-pink-500 -translate-y-6 text-sm font-semibold"
                      : " translate-y-0 text-base"
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className="border-b-2 border-gray-300 focus:outline-none w-full p-2 mt-4"
                  onFocus={() => setFocusField("email")}
                  onBlur={() => setFocusField("")}
                />
              </div>

              {/* Mobile Number */}
              <div className="relative">
                <label
                  className={`absolute top-5 left-0 transform transition-all duration-300 ${
                    focusField === "mobile"
                      ? "text-pink-500 -translate-y-6 text-sm font-semibold"
                      : " translate-y-0 text-base"
                  }`}
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="border-b-2 border-gray-300 focus:outline-none w-full p-2 mt-4"
                  onFocus={() => setFocusField("mobile")}
                  onBlur={() => setFocusField("")}
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative ">
              <label
                className={`absolute top-12 left-0 transform transition-all duration-300 ${
                  focusField === "message"
                    ? "text-pink-500 -translate-y-6 text-sm font-semibold"
                    : " translate-y-0 text-base"
                }`}
              >
                Write your message here...
              </label>
              <textarea
                className="border-b-2 border-gray-300 focus:outline-none w-full p-2 mt-4"
                rows="4"
                onFocus={() => setFocusField("message")}
                onBlur={() => setFocusField("")}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex justify-center bg-primary-500 text-white py-3 px-12 rounded-2xl mt-8 text-xl text-center"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
