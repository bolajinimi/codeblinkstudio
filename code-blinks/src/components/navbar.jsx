// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// import Blinks from "../assets/blinks.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          {/* <img
            src={Blinks}
            alt="Blinks"
            className="w-30 h-auto mr-2"
          /> */}
          <span className="text-3xl font-bold text-[#8909AF] bg-[#8909AF  rounded-lg ">
            Code
          </span>
          <span className="text-3xl font-bold  bg-[#8909AF rounded-lg ">
            Blinks
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

    
        {/* <div
          className={`lg:flex items-center ${
            isOpen ? "block" : "hidden"
          } w-full lg:w-auto`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        
            <a
               href="/courses"
              className="font-bold px-4 py-2 text-white bg-[#8909AF] rounded-lg shadow hover:bg-[#7909AF]transition"
            >
              Enroll Now
            </a>
          </div>
        </div> */}
      </div>
    </nav>
  );
}
