"use client";

import { ModalProps } from "@/app/components/modal/useModal";
import ModalWrapper from "@/app/components/modal/ModalWrapper";
import Image from "next/image";

const TripPricingWithCarModal = ({ closeModal }: ModalProps) => {
  return (
    <ModalWrapper>
      <div className="modal-content-container">
        <div className="modal-content-header">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold">Trip Pricing</h3>
            <button
              type="button"
              onClick={closeModal}
              className="text-2xl text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              ×
            </button>
          </div>
        </div>
        <div className="modal-content">
          <Image
            src="/images/car-rental/car-rental-fee-by-destination.png"
            className="w-full h-auto"
            width={814}
            height={754}
            alt=""
          />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default TripPricingWithCarModal;
