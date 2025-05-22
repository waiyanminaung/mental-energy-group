"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const destinations = [
  {
    id: 1,
    title: "Bangkok",
    image: "/images/destinations/bangkok.jpg",
  },
  {
    id: 2,
    title: "Phuket",
    image: "/images/destinations/phuket.jpg",
  },
  {
    id: 3,
    title: "Chiang Mai",
    image: "/images/destinations/chiangmai.jpg",
  },
  {
    id: 4,
    title: "Pattaya",
    image: "/images/destinations/pattaya.jpg",
  },
  {
    id: 5,
    title: "Ayutthaya",
    image: "/images/destinations/ayutthaya.jpg",
  },
  {
    id: 6,
    title: "Krabi",
    image: "/images/destinations/krabi.jpg",
  },
  {
    id: 7,
    title: "kanchanaburi",
    image: "/images/destinations/kanchanaburi.jpg",
  },
];

const DestinationsSection = () => {
  return (
    <Swiper
      modules={[Autoplay]}
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
      {destinations.map((destination) => (
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
  );
};

export default DestinationsSection;
