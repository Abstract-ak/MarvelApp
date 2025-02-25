const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 relative">
      {/* SVG Background Image */}
      <img
        src="/public/logos/logo--footer-bkd.svg"
        alt="logo-footer SVG"
        className="absolute right-14 h-96 pointer-events-none"
      />

      {/* Main Footer Content */}
      <div className="container relative py-18">
        <img
          src="/public/logos/logo-footer.svg"
          alt="logo-footer SVG"
          className="h-16 my-14"
        />

        <div className="relative z-10">
          <div className="flex justify-between">
            {/* Address Section */}
            <div>
              <h3 className="text-green-500 mb-2">Address:</h3>
              <p className="text-gray-300">
                2 The Granary, 39 Charlemont Street,
                <br />
                Moy, Dungannon, BT71 7SL
              </p>
            </div>

            {/* Phone Section */}
            <div>
              <h3 className="text-green-500 mb-2">Phone:</h3>
              <p className="text-gray-300">(028) 9099 2999</p>
            </div>

            {/* Email Section */}
            <div>
              <h3 className="text-green-500 mb-2">Email:</h3>
              <p className="text-gray-300">info@websiteni.com</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex mt-6 space-x-4">
              <a
                href="#"
                className="bg-green-600 p-2 rounded-md hover:bg-green-700 transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="bg-green-600 p-2 rounded-md hover:bg-green-700 transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="bg-green-600 p-2 rounded-md hover:bg-green-700 transition-colors"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
