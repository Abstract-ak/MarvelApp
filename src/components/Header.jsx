import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isMobileProductDropdownOpen, setIsMobileProductDropdownOpen] =
    useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/nav-logo.svg"
              alt="Marvel"
              className="h-16 cursor-pointer"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <div className="relative">
              <button
                className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
                onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
              >
                Product Range
                <svg
                  className={`ml-1 h-4 w-4 transform transition-transform ${
                    isProductDropdownOpen ? "rotate-180" : ""
                  }`}
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
              </button>
              {isProductDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Test Option
                  </a>
                  {/* Add more dropdown items here */}
                </div>
              )}
            </div>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Brands
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors border-r-2 border-gray-300 pr-4"
            >
              Contact
            </a>
            <img
              src="/search-icon.svg"
              alt="Search"
              className="h-6 w-6 cursor-pointer"
            />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className={`w-6 h-6 ${
                isMenuOpen ? "stroke-white" : "stroke-current"
              }`}
              fill="none"
              viewBox="0 0 24 24"
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
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black z-40">
            <div className="flex flex-col h-full">
              {/* Menu Items */}
              <div className="flex-grow px-6 pt-32 pb-6 space-y-8">
                <a
                  href="#"
                  className="block px-3 py-4 text-white text-xl hover:text-gray-300 border-b border-gray-800"
                >
                  About
                </a>
                <div>
                  <button
                    className="flex items-center justify-between w-full px-3 py-4 text-white text-xl hover:text-gray-300 border-b border-gray-800"
                    onClick={() =>
                      setIsMobileProductDropdownOpen(
                        !isMobileProductDropdownOpen
                      )
                    }
                  >
                    Product Range
                    <svg
                      className={`ml-2 h-5 w-5 transform transition-transform ${
                        isMobileProductDropdownOpen ? "rotate-180" : ""
                      }`}
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
                  </button>
                  {isMobileProductDropdownOpen && (
                    <div className="mt-2 ml-6 space-y-2">
                      <a
                        href="#"
                        className="block px-3 py-2 text-gray-300 text-lg hover:text-white"
                      >
                        Test Option
                      </a>
                      {/* Add more mobile dropdown items here */}
                    </div>
                  )}
                </div>
                <a
                  href="#"
                  className="block px-3 py-4 text-white text-xl hover:text-gray-300 border-b border-gray-800"
                >
                  Brands
                </a>
                <a
                  href="#"
                  className="block px-3 py-4 text-white text-xl hover:text-gray-300 border-b border-gray-800"
                >
                  Contact
                </a>
              </div>

              {/* Search Bar */}
              <div className="px-6 py-8 border-t border-gray-700">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-6 pr-12 py-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 text-white placeholder-gray-400 text-lg"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <img
                      src="/search-icon.svg"
                      alt="Search"
                      className="h-6 w-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
