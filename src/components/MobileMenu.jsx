import React from "react";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-[#0d0f14] text-white transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-500 ease-in-out z-50 shadow-lg`}
    >
      <button
        className="absolute top-5 right-5 text-white text-2xl focus:outline-none"
        onClick={onClose}
      >
        ✕
      </button>

      <div className="flex flex-col items-center mt-20 space-y-8 text-lg uppercase tracking-widest">
        <a href="#rooms" onClick={onClose}>
          Rooms
        </a>
        <a href="#experience" onClick={onClose}>
          Experience
        </a>
        <a href="#gallery" onClick={onClose}>
          Gallery
        </a>
        <a href="#contact" onClick={onClose}>
          Contact
        </a>
        <a
          href="#book"
          onClick={onClose}
          className="bg-[#b9a23c] px-4 py-2 rounded-full shadow mt-10"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
