"use client";

import Image from "next/image";
import { useState } from "react";
import FormModal from "@/app/components/FormModal";
import BookingForm from "./components/BookingForm";

const hospitals = [
  {
    category: "Hospitals",
    list: [
      {
        name: "Vimut Hospital",
        image: "/images/hospitals/vimut.jpg",
        rating: 4.8,
        link: "#",
      },
      {
        name: "Medpark Hospital",
        image: "/images/hospitals/medpark.jpg",
        rating: 4.7,
        link: "#",
      },
      {
        name: "Bumrungrad International Hospital",
        image: "/images/hospitals/bumrungrad.jpg",
        rating: 4.9,
        link: "#",
      },
      {
        name: "Bangkok Hospital",
        image: "/images/hospitals/bangkok.jpg",
        rating: 4.8,
        link: "#",
      },
      {
        name: "BNH Hospital",
        image: "/images/hospitals/bnh.jpg",
        rating: 4.7,
        link: "#",
      },
    ],
  },
  {
    category: "Aesthetic & Beauty Hospitals",
    list: [
      {
        name: "Masterpiece Hospital",
        image: "/images/hospitals/masterpiece.jpg",
        rating: 4.8,
        link: "#",
      },
      {
        name: "Lelux Hospital",
        image: "/images/hospitals/lelux.jpg",
        rating: 4.6,
        link: "#",
      },
      {
        name: "Asia Cosmetic Hospital",
        image: "/images/hospitals/asia-cosmetic.jpg",
        rating: 4.7,
        link: "#",
      },
      {
        name: "Kamol Cosmetic Hospital",
        image: "/images/hospitals/kamol.jpg",
        rating: 4.8,
        link: "#",
      },
    ],
  },
];

export default function MedicalTourismPage() {
  const [selectedHospital, setSelectedHospital] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {hospitals.map((category, idx) => (
        <div key={idx} className="mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.list.map((hospital, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-48">
                  <Image
                    src={hospital.image}
                    alt={hospital.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {hospital.name}
                  </h3>
                  <button
                    onClick={() => {
                      setSelectedHospital(hospital.name);
                      setIsModalOpen(true);
                    }}
                    className="inline-block bg-[#dbb481] text-white px-6 py-2 rounded-full hover:bg-[#c49c69] transition-colors duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedHospital}
      >
        {(props) => <BookingForm {...props} />}
      </FormModal>
    </div>
  );
}
