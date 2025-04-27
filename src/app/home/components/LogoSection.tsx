"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const LogoSlider = ({ data }: { data: string[] }) => {
  return (
    <div className="client-carousel pt-80 pb-80">
      <div className="container">
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={item} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default LogoSlider;
