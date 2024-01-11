import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Logo</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-white hover:text-amber-200 ">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "" : "hidden"
        }`}>
        <div className="text-2xl lg:flex-grow lg:flex lg:justify-center">
          <a
            href="#home"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-amber-200  mr-4">
            Home
          </a>
          <a
            href="#tokenomics"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-amber-200  mr-4">
            Tokenomics
          </a>
          <a
            href="#roadmap"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-amber-200  mr-4">
            Roadmap
          </a>
          <a
            href="#whiteboard"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-amber-200  mr-4">
            Whiteboard
          </a>
          <a
            href="#how-to-buy"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-amber-200 ">
            How to Buy
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
