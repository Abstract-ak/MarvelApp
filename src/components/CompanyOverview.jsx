const CompanyOverview = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto py-12 md:my-16 relative">
        <div className="w-full md:w-3/5 relative z-20">
          {/* Green Triangle */}
          <div
            className="absolute -top-4 -left-4 w-0 h-0 
            border-l-[80px] border-l-green-600
            border-t-[80px] border-t-green-600
            border-r-[80px] border-r-transparent
            border-b-[80px] border-b-transparent
            "
          ></div>
          {/* Image Section */}
          <img
            src="/company-overview.jpg"
            alt="Baby chicks drinking water"
            className="w-full object-cover relative"
          />
        </div>

        {/* Content Section */}
        <div className="md:absolute top-[35%] md:top-[25%] left-[20%] bg-green-600 p-8 md:p-16 md:my-16 text-white z-10 w-full">
          <div className="container mx-auto flex justify-end md:py-8">
            <div className="w-full md:w-1/2 pr-0 md:pr-16">
              <h3 className="md:text-base text-sm font-semibold mb-6">
                Company Overview
              </h3>
              <p className="md:text-xl text-sm mb-6 leading-tight">
                With more than 30 years of experience, we can provide a wide
                variety of products including: Steel Water Tanks, Aquatabs
                Inline, Feeders, Drinkers, Incubators, Brooders, Nests,
                Transportation Crates and many more.
              </p>
              <p className="md:text-lg text-xs mb-8">
                We have mainly exported to our key customers in East Africa
                (Kenya, Tanzania & Zambia) but have the capacity and logistics
                expertise to send orders globally.
              </p>
              <button className="flex items-center justify-center text-sm bg-white text-green-600 px-8 py-3">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
