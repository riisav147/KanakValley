import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-[#0d0f14] shadow-md fixed top-0 left-0 z-50 px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-serif tracking-wide">
          <img
            src="/logo1.png" // <-- Replace with actual image
            alt="Luxury Room"
            className="h-15 w-auto object-contain"
          />
        </div>

        {/* Center Navigation (Desktop) */}
        <nav className="hidden md:flex space-x-10">
          <a
            href="#homepage"
            className="text-white hover:text-blue-600 font-medium transition duration-300 hover:scale-105"
          >
            Home
          </a>
          <a
            href="#rooms"
            className="text-white hover:text-blue-600 font-medium transition duration-300 hover:scale-105"
          >
            Rooms
          </a>
          {/* <a
            href="#experience"
            className="text-white hover:text-blue-600 font-medium transition duration-300 hover:scale-105"
          >
            Experience
          </a> */}
          <a
            href="#gallery"
            className="text-white hover:text-blue-600 font-medium transition duration-300 hover:scale-105"
          >
            Gallery
          </a>
          <a
            href="#contacts"
            className="text-white hover:text-blue-600 font-medium transition duration-300 hover:scale-105"
          >
            Contact
          </a>
        </nav>

        {/* Book Now Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#book"
            className="inline-block bg-[#b9a23c] text-white px-6 py-2 rounded-full shadow transform transition-transform duration-300 hover:scale-110"
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          >
            Book Now
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
