import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between bg-white p-6 md:mx-24">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="/nav-logo.svg" alt="Marvel" className="h-16 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex text-lg items-center justify-between space-x-16">
          <a href="#">About</a>

          <div className="relative">
            <a
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
              onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
            >
              Product Range
              <svg
                className={`ml-1 h-4 w-4 transform transition-transform ${
                  isProductDropdownOpen ? "rotate-180" : ""
                }`}
                fill="green"
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
            </a>
            {isProductDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Test Option
                </a>
              </div>
            )}
          </div>

          <a href="#">Brands</a>
          <a href="#" className="border-r-2 border-gray-400 pr-12">
            Contact
          </a>

          <div className="flex-shrink-0">
            <img
              src="/logos/search.svg"
              alt="Search"
              className="h-10 w-10 cursor-pointer"
            />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
