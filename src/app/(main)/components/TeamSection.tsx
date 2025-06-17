"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { teamMembersData } from "../data";

const TeamSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="team-home__bg" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="team-home__content z-10 relative">
              <div className="block-title text-left">
                <p>Professional & Experts</p>
                <h2>Meet Our Experience Staff</h2>
              </div>
              <p>
                Our team is made up of skilled professionals with years of
                experience across multiple industries. We are committed to
                delivering high-quality services tailored to your needs. Whether
                you’re seeking reliable manpower, planning a medical trip,
                organizing a travel tour, investing in real estate, or looking
                for support services like translation and visa assistance—we’re
                here to help.
              </p>

              <div className="team-home__nav">
                <div
                  className="swiper-button-prev"
                  id="team-home__swiper-button-prev"
                >
                  <i className="pylon-icon-left-arrow"></i>
                </div>
                <div
                  className="swiper-button-next"
                  id="team-home__swiper-button-next"
                >
                  <i className="pylon-icon-right-arrow"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team-home__carousel-wrap">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          navigation={{
            nextEl: "#team-home__swiper-button-next",
            prevEl: "#team-home__swiper-button-prev",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              spaceBetween: 0,
              slidesPerView: 1,
            },
            375: {
              spaceBetween: 0,
              slidesPerView: 1,
            },
            575: {
              spaceBetween: 30,
              slidesPerView: 2,
            },
            767: {
              spaceBetween: 30,
              slidesPerView: 2,
            },
            991: {
              spaceBetween: 30,
              slidesPerView: 3,
            },
          }}
          className="relative"
        >
          {teamMembersData.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="team-one__card">
                <div className="team-one__image">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={370}
                    height={430}
                  />
                </div>
                <div className="team-one__content">
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamSection;
