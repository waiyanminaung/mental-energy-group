"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { destinationsData } from "@/app/(main)/data";

const DestinationsSection = () => {
  return (
    <div>
      <p className="text-gray-600 !mb-7 text-center">
        We proudly offer unforgettable experiences in: Bangkok City, Ayutthaya,
        Nakhon Nayok, Pattaya Beach, Ko Lan, Bang Saen Beach, Rayong Beach,
        Ratchaburi, Hua Hin Beach, Kanchanaburi, Ban i Tong, Mon Bridge, Khao
        Yai, Phetchabun, Chiang Mai, Chiang Rai, Mae Hong Son, Phuket, Ko Phi
        Phi, Krabi, Ko Samui, Phang Nga Bay, Ko Tao, Khao Lak, Pa Tong, Prachuap
        Khiri Khan, and Ratchaburi.
      </p>

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
