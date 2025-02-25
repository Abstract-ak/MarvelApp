const CompanyOverview = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto py-16 relative">
        {/* Image Section */}
        <div className="w-full md:w-3/5 relative z-20">
          <div className="absolute -top-4 -left-4 w-0 h-0 
            border-l-[80px] border-l-green-600
            border-t-[80px] border-t-green-600
            border-r-[80px] border-r-transparent
            border-b-[80px] border-b-transparent
            "
          ></div>
          <img 
            src="/company-overview.jpg" 
            alt="Baby chicks drinking water" 
            className="w-full h-[500px] object-cover relative"
          />
        </div>

        {/* Content Section */}
        <div className="absolute top-[35%] md:top-[30%] left-[15%] bg-green-600 p-8 md:p-12 text-white z-10 w-full">
          <div className="container mx-auto flex justify-end">
            <div className="w-full md:w-1/2 pr-0 md:pr-16"> 
              <h3 className="text-2xl font-semibold mb-6">
                Company Overview
              </h3>
              <p className="text-lg mb-6 leading-relaxed">
                With more than 30 years of experience, we can provide a wide variety of products 
                including: Steel Water Tanks, Aquatabs Inline, Feeders, Drinkers, Incubators, 
                Brooders, Nests, Transportation Crates and many more.
              </p>
              <p className="text-base mb-8">
                We have mainly exported to our key customers in East Africa (Kenya, Tanzania & Zambia) 
                but have the capacity and logistics expertise to send orders globally.
              </p>
              <button className="bg-white text-green-600 px-8 py-3 rounded hover:bg-gray-100 transition-colors">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyOverview 