"use client";

import EntryServiceBanner from "@/app/components/EntryServiceBanner";
import ContactInfoSection from "@/app/components/layout/ContactInfoSection";
import MakeRequestSection from "@/app/components/layout/MakeRequestSection";
import { useModal } from "@/app/components/modal/useModal";
import RealEstateFormModal from "./components/RealEstateFormModal";

export default function RealEstatePage() {
  const { show } = useModal();

  return (
    <div>
      <EntryServiceBanner
        title="Real Estate Solutions"
        description="Find your perfect property in Thailand - Houses and Condos for rent/sale, Land for buy/sale. We help you discover the ideal property that matches your needs."
        image="/images/services/real-estate.jpg"
      />

      <ContactInfoSection />

      <MakeRequestSection
        requestDescription="Looking for your next property or investment opportunity? Submit your enquiry today and let us help you find the perfect match."
        onRequestClick={() => show(<RealEstateFormModal />)}
        buttonLabel="Get Enquiry Now"
      />
    </div>
  );
}
