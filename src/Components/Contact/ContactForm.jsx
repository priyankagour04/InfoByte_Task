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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="relative flex flex-col lg:flex-row my-10 items-center me-16 container ">
          {/* Contact Info Section */}
          <div
            className={`absolute sm:relative sm:z-0 sm:left-0 lg:z-10 lg:left-32 bg-primary-500 text-white p-8 md:p-10 lg:p-10 rounded-2xl lg:w-1/4 w-full lg:ml-16 lg:mr-8 mb-10 lg:mb-0 lg:translate-x-0 translate-x-0 shadow-xl ${
              window.innerWidth <= 768 ? "hidden lg:block" : ""
            }`} // Hide contact info on small screens
          >
            <h1 className="text-3xl font-semibold text-white">Contact Info</h1>
            <div>
              <div className="flex mt-6">
                <div className="mt-1 text-4xl">
                  <IoLocationOutline />
                </div>
                <div className="ml-4">
                  Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
                  723156
                </div>
              </div>
              <div className="flex items-center my-6">
                <div className="text-3xl">
                  <MdOutlineEmail />
                </div>
                <div className="ml-4">
                  <a href="mailto:kkghosh0099@gmail.com">
                    kkghosh0099@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center mt-2">
                <div className="text-3xl">
                  <FiPhoneCall />
                </div>
                <div className="ml-4">
                  <a href="tel:+919007062180">+91 9007062180</a>
                </div>
              </div>
              <div className="flex gap-3 text-2xl mt-12 lg:mt-24">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedinIn />
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="relative bg-white p-6 md:p-10 lg:w-4/6 w-full rounded-3xl shadow-2xl lg:mr-16 lg:ml-auto z-0">
            <h2 className="text-2xl font-bold text-pink-500 mb-6 text-center lg:text-left lg:ms-36">
              Send a Message
            </h2>
            <form className="lg:w-3/4 lg:ms-36">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10">
                {/* First Name */}
                <div className="relative">
                  <label
                    className={`absolute top-5 left-0 transform transition-all duration-300 ${
                      focusField === "firstName" || formData.firstName
                        ? "text-pink-500 -translate-y-6 text-sm font-semibold "
                        : "translate-y-0 text-base "
                    }`}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="border-b-2 border-gray-300 focus:outline-none w-full p-2 mt-4"
                    onFocus={() => setFocusField("firstName")}
                    onBlur={() => setFocusField("")}
                  />
                </div>

                {/* Last Name */}
                <div className="relative">
                  <label
                    className={`absolute top-5 left-0 transform transition-all duration-300 ${
                      focusField === "lastName" || formData.lastName
                        ? "text-pink-500 -translate-y-6 text-sm font-semibold"
                        : "translate-y-0 text-base"
                    }`}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="border-b-2 border-gray-300 focus:outline-none w-full p-2 mt-4"
                    onFocus={() => setFocusField("lastName")}
                    onBlur={() => setFocusField("")}
                  />
                </div>

                {/* Email Address */}
                <div className="relative">
                  <label
                    className={`absolute top-5 left-0 transform transition-all duration-300 ${
                      focusField === "email" || formData.email
                        ? "text-pink-500 -translate-y-6 text-sm font-semibold"
                        : "translate-y-0 text-base"
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-b-2 border-gray-300 focus:outline-none w-full p-2 mt-4"
                    onFocus={() => setFocusField("email")}
                    onBlur={() => setFocusField("")}
                  />
                </div>

                {/* Mobile Number */}
                <div className="relative">
                  <label
                    className={`absolute top-5 left-0 transform transition-all duration-300 ${
                      focusField === "mobile" || formData.mobile
                        ? "text-pink-500 -translate-y-6 text-sm font-semibold"
                        : "translate-y-0 text-base"
                    }`}
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="border-b-2 border-gray-300 focus:outline-none w-full p-2 mt-4"
                    onFocus={() => setFocusField("mobile")}
                    onBlur={() => setFocusField("")}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="relative mt-8">
                <label
                  className={`absolute top-12 left-0 transform transition-all duration-300 ${
                    focusField === "message" || formData.message
                      ? "text-pink-500 -translate-y-12 text-sm font-semibold"
                      : "translate-y-0 text-base"
                  }`}
                >
                  Write your message here...
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="border-b-2 border-gray-300 focus:outline-none w-full p-2 mt-4"
                  rows="4"
                  onFocus={() => setFocusField("message")}
                  onBlur={() => setFocusField("")}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex justify-center bg-primary-500 text-white py-3 px-12 rounded-2xl mt-8 text-xl"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
