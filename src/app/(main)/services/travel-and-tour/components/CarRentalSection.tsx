"use client";

import Image from "next/image";
import { useModal } from "@/app/components/modal/useModal";
import CarRentalRequestFormModal from "./CarRentalRequestFormModal";

interface CarOption {
  id: number;
  title: string;
  model: string;
  image: string;
  startingPrice: number;
}

const carOptions: CarOption[] = [
  {
    id: 1,
    title: "Luxury Sedan",
    model: "Toyota Camry or Similar",
    image: "/images/cars/camry.jpg",
    startingPrice: 3000,
  },
  {
    id: 2,
    title: "Premium SUV",
    model: "Toyota Fortuner or Similar",
    image: "/images/cars/fortuner.jpg",
    startingPrice: 4500,
  },
  {
    id: 3,
    title: "Spacious Van",
    model: "Toyota Commuter or Similar",
    image: "/images/cars/commuter.jpg",
    startingPrice: 5000,
  },
];

const CarRentalSection = () => {
  const { show } = useModal();

  return (
    <div>
      <div className="space-y-2 mb-8">
        <h2 className="text-3xl font-bold">Car Rental Service</h2>
        <p className="font-semibold">
          Let us arrange your transportation needs in Thailand. We&apos;ll help
          you secure the perfect vehicle rental, from comfortable sedans to
          spacious vans, complete with professional drivers to ensure a safe and
          convenient journey throughout your stay.
        </p>
      </div>

      {/* Car Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {carOptions.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <div className="relative h-48">
              <Image
                src={car.image}
                alt={car.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{car.title}</h3>
              <p className="text-gray-600 mb-2">{car.model}</p>
              <p className="text-lg font-semibold text-[#dbb481] mb-4">
                Start From {car.startingPrice.toLocaleString()} THB
              </p>
              <button
                onClick={() => show(<CarRentalRequestFormModal />)}
                className="w-full bg-[#dbb481] text-white px-6 py-2 rounded-full hover:bg-[#c49c69] transition-colors duration-300"
              >
                Inquire Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarRentalSection;
