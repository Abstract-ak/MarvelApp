import React from "react";

const Partners = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const partners = [
    {
      id: 1,
      name: "Evenproducts",
      logo: `${baseUrl}partner-logo/Evenproducts%20Logo.png`,
      hidden: false,
    },
    {
      id: 2,
      name: "Kersia",
      logo: `${baseUrl}partner-logo/Kersia%20Logo.png`,
      hidden: false,
    },
    {
      id: 3,
      name: "Kilco",
      logo: `${baseUrl}partner-logo/Kilco%20Logo.png`,
      hidden: true,
    },
    {
      id: 4,
      name: "LodiUK",
      logo: `${baseUrl}partner-logo/Lodi%20UK.png`,
      hidden: true,
    },
    {
      id: 5,
      name: "Aquatabs InLine",
      logo: `${baseUrl}partner-logo/0007046_aquatabs-inline-system.png`,
      hidden: true,
    },
    {
      id: 6,
      name: "BEC",
      logo: `${baseUrl}partner-logo/bec-logo.png`,
      hidden: true,
    },
  ];

  return (
    <div className="w-full bg-white p-12">
      <div className="mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className={`w-[150px] md:w-[180px] h-[60px] flex items-center justify-center ${
                partner.hidden ? "hidden md:flex" : ""
              }`}
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-w-full max-h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
