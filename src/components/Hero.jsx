import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[600px] md:h-[800px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/public/banner-image.jpg"
          alt="Poultry Farmer"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 flex flex-col justify-end items-start h-full py-20 md:py-32">
        <div className="max-w-3xl">
          <p className="text-white text-lg md:text-xl mb-6 font-medium">
            Global Poultry Equipment Suppliers
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-12">
            WebsiteNI is a proud supplier and exporter of Poultry Farming
            Equipment to Africa.
          </h1>
        </div>

        {/* Navigation Arrows & button */}
        <div className="relative w-full flex justify-between items-center">
          <div className="flex">
            <button className="bg-green-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-green-700 transition-colors duration-300">
              View our Product Range
            </button>
          </div>

          {/* Navigation button */}
          <div className="flex gap-6">
            <button
              aria-label="Previous slide"
              className="w-12 h-12 border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              aria-label="Next slide"
              className="w-12 h-12 border border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
