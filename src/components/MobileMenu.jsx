import React from "react";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-[#1E1E1E] z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full p-6">
        {/* Logo and Close Button */}
        <div className="flex justify-between items-center mb-16">
          <img src="/nav-logo.svg" alt="Logo" className="h-12 w-auto" />
          <button onClick={onClose} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-8">
          <a
            href="/"
            className="text-white text-xl border-b border-gray-800 pb-4"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white text-xl border-b border-gray-800 pb-4"
          >
            About
          </a>
          <div className="border-b border-gray-800 pb-4">
            <div className="flex items-center justify-between text-white text-xl">
              <span>Product Range</span>
              <svg
                className="w-4 h-4 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          <a
            href="/brands"
            className="text-white text-xl border-b border-gray-800 pb-4"
          >
            Brands
          </a>
          <a
            href="/contact"
            className="text-white text-xl border-b border-gray-800 pb-4"
          >
            Contact
          </a>
        </nav>

        {/* Search Bar */}
        <div className="mt-auto mb-8">
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow bg-transparent border border-white text-white px-4 py-3 placeholder-white"
            />
            <button className="flex items-center justify-center">
              {/* <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg> */}
              <img
                src="/logos/search.svg"
                alt="Search"
                className="h-full w-full object-cover m-2 cursor-pointer"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
