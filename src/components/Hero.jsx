import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[700px] md:h-[800px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/banner-image.jpg"
          alt="Poultry Farmer"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-6 md:container md:mx-auto md:px-4">
        <div className="max-w-xl md:max-w-3xl">
          <p className="text-white text-lg md:text-xl mb-6 font-medium">
            Global Poultry Equipment Suppliers
          </p>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-8 md:mb-12">
            WebsiteNI is a proud supplier and exporter of Poultry Farming
            Equipment to Africa.
          </h1>
        </div>

        {/* Navigation Arrows & button */}
        <div className="relative w-full flex justify-between items-center">
          <div className="flex">
            <button className="w-full md:w-auto bg-green-600 text-white text-lg font-medium px-6 py-4 ">
              View our Product Range
            </button>
          </div>

          {/* Navigation button */}
          <div className="hidden md:flex absolute bottom-8 right-8 gap-6">
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
