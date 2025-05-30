"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "@untitledui/icons";

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
    <div>
      <div className="flex w-full justify-between items-center">
        <h3 className="text-3xl font-bold mb-4 flex-1">Popular Destinations</h3>
        <div>
          <button
            id="hospital__swiper-button-prev"
            className="border size-8 rounded-sm hover:bg-gray-100 border-gray-400 me-3"
          >
            <ArrowLeft width={18} height={18} className="m-auto" />
          </button>
          <button
            id="hospital__swiper-button-next"
            className="border size-8 rounded-sm hover:bg-gray-100 border-gray-400"
          >
            <ArrowRight width={18} height={18} className="m-auto" />
          </button>
        </div>
      </div>
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
    </div>
  );
};

export default DestinationsSection;
