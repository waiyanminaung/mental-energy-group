"use client";

import Image from "next/image";
import { Hospital } from "../type";
import { useModal } from "@/app/components/modal/useModal";
import MedicalTourismBookingFormModal from "./MedicalTourismBookingFormModal";

interface MedicalTourismBookingFormModalProps {
  data: Hospital;
}

export default function HospitalCard({
  data,
}: MedicalTourismBookingFormModalProps) {
  const { show } = useModal();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-48">
        <Image src={data.image} alt={data.name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{data.name}</h3>
        <button
          className="inline-block bg-[#dbb481] text-white px-6 py-2 rounded-full hover:bg-[#c49c69] transition-colors duration-300"
          onClick={() => {
            show(<MedicalTourismBookingFormModal data={data} />);
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
