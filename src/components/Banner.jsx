import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CompanyOverview from "./CompanyOverview";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductRange from "./ProductRange";
const Banner = () => {
  return (
    <>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="w-full h-[600px] md:h-[700px] relative"
        >
          <SwiperSlide>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(/banner-image.jpg)` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="container mx-auto h-full flex items-center">
                <div className="text-white max-w-xl px-4 relative ">
                  <p className="text-lg mb-3 font-medium">
                    Global Poultry Equipment Suppliers
                  </p>
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    WebsiteNI is a proud supplier and exporter of Poultry
                    Farming Equipment to Africa.
                  </h2>
                  <button className="bg-green-600 text-white px-8 py-3 rounded hover:bg-green-700 transition-colors">
                    View Our Product Range
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="absolute top-1/2 transform -translate-y-1/2 z-10 w-full">
            <button className="absolute left-4 bg-white/10 hover:bg-white/20 p-3 rounded-full">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="absolute right-4 bg-white/10 hover:bg-white/20 p-3 rounded-full">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </Swiper>
      </div>
      <CompanyOverview />
      <ProductRange />
    </>
  );
};

export default Banner;
