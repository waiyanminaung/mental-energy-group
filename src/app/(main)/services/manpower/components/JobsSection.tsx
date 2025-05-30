"use client";

import { CollectionEnum } from "@/app/(main)/constant";
import { Job } from "@/app/admin/(dashboard)/jobs/type";
import Button from "@/app/admin/components/Button";
import { useFirestoreDB } from "@/hooks/useFirestoreDB";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ContentDetailModal from "../../components/ContentDetailModal";
import { useModal } from "@/app/components/modal/useModal";
import { ArrowLeft, ArrowRight } from "@untitledui/icons";

const JobsSection = () => {
  const { data, loading } = useFirestoreDB<Job>(CollectionEnum.JOB);
  const { show } = useModal();

  const jobs = data.filter((job) => job.status === 1);

  if (loading) return <div>Loading...</div>;

  if (!jobs || jobs.length === 0) return <></>;

  return (
    <div className="mb-10">
      <div className="flex w-full justify-between items-center">
        <h3 className="text-3xl font-bold mb-4 flex-1">Announcements</h3>
        <div>
          <button
            id="destination__swiper-button-prev"
            className="border size-8 rounded-sm hover:bg-gray-100 border-gray-400 me-3"
          >
            <ArrowLeft width={18} height={18} className="m-auto" />
          </button>
          <button
            id="destination__swiper-button-next"
            className="border size-8 rounded-sm hover:bg-gray-100 border-gray-400"
          >
            <ArrowRight width={18} height={18} className="m-auto" />
          </button>
        </div>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          effect="fade"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={16}
          slidesPerView={2}
          navigation={{
            nextEl: "#destination__swiper-button-next",
            prevEl: "#destination__swiper-button-prev",
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
          {jobs.map((item) => (
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
                    onClick={() => {
                      show(<ContentDetailModal data={item} />);
                    }}
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

export default JobsSection;
