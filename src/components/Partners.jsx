import React from "react";

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "Evenproducts",
      logo: "/partner-logo/png2jpg/Evenproducts Logo.jpg",
    },
    {
      id: 2,
      name: "Kersia",
      logo: "/partner-logo/png2jpg/Kersia Logo.jpg",
    },
    {
      id: 3,
      name: "Kilco",
      logo: "/partner-logo/png2jpg/Kilco Logo.jpg",
    },
    {
      id: 4,
      name: "LodiUK",
      logo: "/partner-logo/png2jpg/Lodi UK.jpg",
    },
    {
      id: 5,
      name: "Aquatabs InLine",
      logo: "/partner-logo/png2jpg/0007046_aquatabs-inline-system.jpg",
    },
    {
      id: 6,
      name: "BEC",
      logo: "/partner-logo/png2jpg/bec-logo.jpg",
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
