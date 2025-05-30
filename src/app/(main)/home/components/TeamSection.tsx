"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Lwin Me Me Zaw",
    role: "Professional Translator",
    image: "/images/team/Lwin-Me-Me-Zaw.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      pinterest: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Ian Barker",
    role: "Expert Agent",
    image: "/images/team/team.png",
    social: {
      facebook: "#",
      twitter: "#",
      pinterest: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Nannie Robinson",
    role: "Expert Agent",
    image: "/images/team/team.png",
    social: {
      facebook: "#",
      twitter: "#",
      pinterest: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "Team Member 4",
    role: "Expert Agent",
    image: "/images/team/team.png",
    social: {
      facebook: "#",
      twitter: "#",
      pinterest: "#",
      instagram: "#",
    },
  },
];

const TeamSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="team-home__bg"
        style={{
          backgroundImage: "url(/images/backgrounds/team-bg-1-1.jpg)",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="team-home__content z-10 relative">
              <div className="block-title text-left">
                <p>Professional & Experts</p>
                <h2>Meet Our Experience Staff For Loan</h2>
              </div>
              <p>
                Our team provide your best variations for passages lorem Ipsum
                available, but the majority have suffered alteration in some
                form tristique senectus for etnetuset malesuada fames aliquam
                eleifend volutpat est velit egestas dui id ornare arcu. Purus
                gravida quis blandit turpis cursus.
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
          {teamMembers.map((member) => (
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
