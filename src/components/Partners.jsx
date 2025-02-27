import React from "react";

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "Evenproducts",
      logo: "/partner-logo/Evenproducts Logo.png",
    },
    {
      id: 2,
      name: "Kersia",
      logo: "/partner-logo/Kersia Logo.png",
    },
    {
      id: 3,
      name: "Kilco",
      logo: "/partner-logo/Kilco Logo.png",
    },
    {
      id: 4,
      name: "LodiUK",
      logo: "/partner-logo/Lodi UK.png",
    },
    {
      id: 5,
      name: "Aquatabs InLine",
      logo: "/partner-logo/0007046_aquatabs-inline-system.png",
    },
    {
      id: 6,
      name: "BEC",
      logo: "/partner-logo/bec-logo.png",
    },
  ];

  return (
    <div className="w-full bg-white p-12">
      <div className="mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="w-[150px] md:w-[180px] h-[60px] flex items-center justify-center"
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
