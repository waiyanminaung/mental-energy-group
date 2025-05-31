"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const LogoSlider = ({ data }: { data: string[] }) => {
  return (
    <div className="client-carousel py-10">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={5}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            "0": {
              spaceBetween: 30,
              slidesPerView: 2,
            },
            "375": {
              spaceBetween: 30,
              slidesPerView: 2,
            },
            "575": {
              spaceBetween: 30,
              slidesPerView: 3,
            },
            "767": {
              spaceBetween: 50,
              slidesPerView: 4,
            },
            "991": {
              spaceBetween: 50,
              slidesPerView: 5,
            },
            "1199": {
              spaceBetween: 100,
              slidesPerView: 5,
            },
          }}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Image src={item} alt="" width={123} height={24} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default LogoSlider;
