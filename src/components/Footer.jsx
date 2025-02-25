import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto">
        {/* Logo Slider */}
        <div className="mb-16">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <SwiperSlide key={num}>
                <img 
                  src={`/logos/partner${num}.svg`}
                  alt={`Partner ${num}`}
                  className="h-12 object-contain mx-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src="/logo.svg" alt="Marvel" className="h-8 mb-6" />
            <p className="text-gray-600">
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 