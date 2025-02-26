import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const ProductRange = () => {
  const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json";

  const markers = [
    { name: "East Africa", coordinates: [37.9062, -1.2921] },
    { name: "USA", coordinates: [-100.0, 40.0] },
    { name: "Brazil", coordinates: [-51.9253, -14.235] },
    { name: "Australia", coordinates: [133.7751, -25.2744] },
    { name: "India", coordinates: [78.9629, 20.5937] },
  ];

  const products = [
    {
      id: 1,
      title: "Steel Water Tanks",
      image: "/products/steel-water-tanks.jpg",
    },
    {
      id: 2,
      title: "Aquatabs Inline Water Purification",
      image: "/products/aquatabs-inline.jpg",
    },
    {
      id: 3,
      title: "Incubators & Brooders",
      image: "/products/incubators.jpg",
    },
    {
      id: 4,
      title: "Feeders & Drinkers",
      image: "/products/feeders-drinkers.jpg",
    },
    {
      id: 5,
      title: "Nests & Slats",
      image: "/products/nests-slats.jpg",
    },
    {
      id: 6,
      title: "Measurement",
      image: "/products/measurement.jpg",
    },
    {
      id: 7,
      title: "Hatchery Equipment",
      image: "/products/hatchery-equipment.jpg",
    },
    {
      id: 8,
      title: "General Industrial Equipment",
      image: "/products/general-industrial-equipment.jpg",
    },
    {
      id: 9,
      title: "Accessories",
      image: "/products/accessories.jpg",
    },
  ];

  return (
    <>
      <div className="container mx-auto py-16">
        <div className="mb-8">
          <h6 className="text-green-600 font-medium mb-2">Product Range</h6>
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Explore our selection of products
              </h2>
              <p className="text-gray-600">
                Take a closer look and find the perfect fit for your
                requirements today.
              </p>
            </div>
            <button className="hidden md:block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
              View full range
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative h-[300px] overflow-hidden cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-50">
                <div className="absolute bottom-8 left-8 right-8 text-white flex items-center justify-between">
                  <h3 className="text-xl font-semibold mb-1">
                    {product.title}
                  </h3>
                  <div className="border border-white p-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="md:hidden w-full bg-green-600 text-white px-6 py-2 rounded mt-6 hover:bg-green-700 transition-colors">
          View full range
        </button>
      </div>

      <div className="w-full bg-gradient-to-r from-[#71B742] via-[#37A849] via-[#3EA544] to-[#1C9B47] py-16 -mt-32 pt-36">
        <div className="text-center container text-white">
          <h6 className="text-lg font-medium mb-6">
            Global Export Capabilities
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 max-w-2xl mx-auto">
            Serving our Key Customers in East Africa and Beyond
          </h2>
          {/* <div className="relative max-w-5xl mx-auto">
                        <ComposableMap
                            projection="geoMercator"
                            projectionConfig={{
                                scale: 135,
                            }}
                        >
                            <Geographies geography={geoUrl}>
                                {({ geographies }) =>
                                    geographies.map((geo) => (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            fill="#ffffff"
                                            fillOpacity={0.2}
                                            stroke="#ffffff"
                                            strokeWidth={0.5}
                                            strokeOpacity={0.3}
                                        />
                                    ))
                                }
                            </Geographies>
                            {markers.map(({ coordinates, name }) => (
                                <Marker key={name} coordinates={coordinates}>
                                    <circle r={4} fill="#ffffff" />
                                    <circle r={8} fill="#ffffff" fillOpacity={0.3} />
                                </Marker>
                            ))}
                        </ComposableMap>
                    </div> */}
          <div className="relative w-full mx-auto">
            <img
              src="/global-map.svg"
              alt="Global Map"
              className="w-full h-full object-contain"
            />
            {markers.map((marker, index) => (
              <div
                key={index}
                className="absolute"
                style={{
                  left: `${((marker.coordinates[0] + 180) / 360) * 100}%`,
                  top: `${((90 - marker.coordinates[1]) / 180) * 100}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <div className="w-8 h-8 bg-white rounded-full opacity-30 absolute -top-2 -left-2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductRange;
