import React from "react";

const CallToAction = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#71B742] via-[#37A849] via-[#3EA544] to-[#1C9B47] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white max-w-2xl text-center">
            <h2 className="text-xl md:text-3xl font-semibold leading-tight">
              Feel free to reach out to us with any enquiries and to receive an
              obligation-free quotation.
            </h2>
          </div>
          <div className="flex-shrink-0">
            <button className="bg-white text-green-600 w-full text-center px-8 py-3 font-medium">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
