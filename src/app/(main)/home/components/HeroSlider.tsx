"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const HeroSlider = ({
  data,
}: {
  data: { id: number; title: string; subtitle: string; image: string }[];
}) => {
  return (
    <section className="main-slider main-slider__two">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: "#hero__swiper-button-next",
          prevEl: "#hero__swiper-button-prev",
        }}
      >
        {data.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="image-layer"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />

            <div className="container">
              <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-8">
                  <p>{slide.subtitle}</p>
                  <h2>{slide.title}</h2>
                  <div className="button-wrap">
                    <a href="#" className="thm-btn">
                      Contact Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="main-slider__nav">
          <button
            id="hero__swiper-button-prev"
            className="swiper-button-prev"
            aria-label="Previous slide"
          >
            <i className="pylon-icon-left-arrow"></i>
          </button>
          <button
            id="hero__swiper-button-next"
            className="swiper-button-next"
            aria-label="Next slide"
          >
            <i className="pylon-icon-right-arrow"></i>
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default HeroSlider;
