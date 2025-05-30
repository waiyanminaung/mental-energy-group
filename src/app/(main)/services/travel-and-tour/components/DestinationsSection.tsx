"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { destinationsData } from "@/app/(main)/data";

const DestinationsSection = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="destination-swiper"
      >
        {destinationsData.map((destination) => (
          <SwiperSlide key={destination.id}>
            <div className="text-center">
              <div className="relative w-full aspect-square rounded-full overflow-hidden mb-4">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">{destination.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DestinationsSection;
