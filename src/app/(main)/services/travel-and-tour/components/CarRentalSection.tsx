"use client";

import Image from "next/image";
import { useModal } from "@/app/components/modal/useModal";
import { carRentalData } from "@/app/(main)/data";
import CarRentalFormModal from "./CarRentalFormModal";

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

      {/* Car Options List */}
      <div className="space-y-6">
        {carRentalData.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] flex flex-col sm:flex-row"
          >
            <div className="relative w-full sm:w-52 h-48 sm:h-auto flex-shrink-0">
              <Image
                src={car.image}
                alt={car.model}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6 flex-grow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{car.model}</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>Self Drive: {car.selfDrive.toLocaleString()} THB/day</p>
                    <p>
                      With Driver: {car.withDriver.toLocaleString()} THB/day
                    </p>
                    <p>Deposit: {car.deposit.toLocaleString()} THB</p>
                  </div>
                </div>
                <button
                  onClick={() => show(<CarRentalFormModal data={car} />)}
                  className="w-full sm:w-auto bg-[#dbb481] text-white px-6 py-2 rounded-full hover:bg-[#c49c69] transition-colors duration-300 whitespace-nowrap self-end sm:self-start"
                >
                  Inquire Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarRentalSection;
