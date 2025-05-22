"use client";

import EntryServiceBanner from "@/app/components/EntryServiceBanner";
import ContactInfoSection from "@/app/components/layout/ContactInfoSection";

export default function RealEstatePage() {
  return (
    <div>
      <EntryServiceBanner
        title="Real Estate Solutions"
        description="Find your perfect property in Thailand - Houses and Condos for rent/sale, Land for buy/sale. We help you discover the ideal property that matches your needs."
        image="/images/real-estate.jpg"
      />

      <ContactInfoSection onRequestClick={() => alert("Coming Soon")} />
    </div>
  );
}
