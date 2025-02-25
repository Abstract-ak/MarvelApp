import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Left Side: Logo */}
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Center: Navigation Bar */}
      <nav className="flex space-x-6">
        <a href="#about" className="text-gray-700 hover:text-blue-600">
          About
        </a>
        <a href="#product-range" className="text-gray-700 hover:text-blue-600">
          Product Range
        </a>
        <a href="#brands" className="text-gray-700 hover:text-blue-600">
          Brands
        </a>
        <a href="#contact" className="text-gray-700 hover:text-blue-600">
          Contact
        </a>
      </nav>

      {/* Right Side: Search Button Logo */}
      <div className="flex items-center">
        <button className="p-2 text-gray-700 hover:text-blue-600">
          <img
            src="/path/to/search-icon.png"
            alt="Search"
            className="h-6 w-auto"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
