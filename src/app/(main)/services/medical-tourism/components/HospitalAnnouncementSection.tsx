"use client";

import { CollectionEnum } from "@/app/(main)/constant";
import { Job } from "@/app/admin/(dashboard)/jobs/type";
import Button from "@/app/admin/components/Button";
import { useFirestoreDB } from "@/hooks/useFirestoreDB";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const HospitalAnnouncementSection = () => {
  const { data, loading } = useFirestoreDB<Job>(
    CollectionEnum.HOSPITAL_ANNOUNCEMENTS
  );

  const hospitals = data.filter((h) => h.status === 1);

  if (loading) return <div>Loading...</div>;

  if (!hospitals || hospitals.length === 0) return <></>;

  return (
    <div className="mb-10">
      <h3 className="text-3xl font-bold mb-4">Latest Posts</h3>
      <div>
        <Swiper
          spaceBetween={16}
          slidesPerView={2}
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
              slidesPerView: 1,
            },
            767: {
              slidesPerView: 2,
            },
          }}
          className="relative"
        >
          {hospitals.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white p-3 rounded-lg shadow mt-0.5 border border-gray-200">
                <div className="aspect-video relative rounded mb-2 overflow-hidden">
                  <Image
                    src={item.featured_image || "/images/placeholder-image.png"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-semibold line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-1">{item.content}</p>
                  <Button
                    fullWidth
                    variant="primary"
                    onClick={() => alert("coming soon")}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HospitalAnnouncementSection;
