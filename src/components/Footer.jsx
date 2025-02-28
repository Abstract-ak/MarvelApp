import React from "react";
// import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white p-8">
      {/* <div className="container mx-auto "> */}
      {/* SVG Background Image */}
      <img
        src="/logos/logo--footer-bkd.svg"
        alt="logo-footer SVG"
        className="absolute right-16 h-96 pointer-events-none object-contain"
      />

      <div className="mx-auto md:px-24">
        <img
          src="/logos/logo-footer.svg"
          alt="logo-footer SVG"
          className="h-16 my-14"
        />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center md:mb-10 md:py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
            {/* Address */}
            <div className="md:col-span-2">
              <p className="text-green-500 font-medium mb-2">Address:</p>
              <p className="text-gray-300">
                2 The Granary, 39 Charlemont Street, Moy, Dungannon, BT71 7SL
              </p>
            </div>

            {/* Phone */}
            <div>
              <p className="text-green-500 font-medium mb-2">Phone:</p>
              <p className="text-gray-300">(028) 9099 2999</p>
            </div>

            {/* Email */}
            <div>
              <p className="text-green-500 font-medium mb-2">Email:</p>
              <p className="text-gray-300">info@websiteni.com</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-6 md:mt-0">
            <img
              src="/media-logo/facebook.svg"
              alt="logo-footer SVG"
              className="h-10"
            />
            <img
              src="/media-logo/instagram.svg"
              alt="logo-footer SVG"
              className="h-10"
            />
            <img
              src="/media-logo/youtube.svg"
              alt="logo-footer SVG"
              className="h-10"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-6 mt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:px-24">
          <div className="flex gap-6 text-gray-400 md:text-sm text-xs">
            <p className="text-gray-400">© 2024 WebsiteNI</p>
            <span className="text-green-500">•</span>
            <p className="text-gray-400">Privacy Policy</p>
            <span className="text-green-500">•</span>
            <p className="text-gray-400">Terms & Conditions</p>
            {/* <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a> */}
            {/* <a href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </a> */}
          </div>

          <div className="md:text-sm text-xs">
            Created by{" "}
            <a href="#" className="text-green-300">
              WebsiteNI
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
