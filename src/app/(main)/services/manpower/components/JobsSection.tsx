"use client";

import { CollectionEnum } from "@/app/(main)/constant";
import { Job } from "@/app/admin/(dashboard)/jobs/type";
import Button from "@/app/admin/components/Button";
import { useFirestoreDB } from "@/hooks/useFirestoreDB";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const JobsSection = () => {
  const { data, loading } = useFirestoreDB<Job>(CollectionEnum.JOB);

  const jobs = data.filter((job) => job.status === 1);

  if (loading) return <div>Loading...</div>;

  if (!jobs || jobs.length === 0) return <></>;

  return (
    <div className="mb-10">
      <h3 className="text-3xl font-bold mb-4">Latest Jobs</h3>
      <div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={2}
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
          {jobs.map((job) => (
            <SwiperSlide key={job.id}>
              <div className="bg-white p-3 rounded-lg shadow mt-0.5 border border-gray-200">
                <div className="aspect-video relative rounded mb-2 overflow-hidden">
                  <Image
                    src={job.featured_image || "/placeholder-image.png"}
                    alt={job.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="text-gray-600 line-clamp-1">{job.content}</p>
                  <Button fullWidth variant="primary">
                    View Details
                  </Button>
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
      </div>
    </div>
  );
};

export default JobsSection;
