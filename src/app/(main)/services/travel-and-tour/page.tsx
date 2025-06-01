import EntryServiceBanner from "@/app/components/EntryServiceBanner";
import TicketSection from "./components/TicketSection";
import HotelSection from "./components/HotelSection";
import TravelSection from "./components/TravelSection";
import CarRentalSection from "./components/CarRentalSection";
import DestinationsSection from "./components/DestinationsSection";
import ContactInfoListSection from "@/app/components/layout/ContactInfoListSection";

export default function TravelAndTourPage() {
  return (
    <div>
      <EntryServiceBanner
        title="Experience Amazing Thailand"
        description="Discover the beauty and culture of Thailand with our curated travel experiences"
        image={"/images/services/bangkok.jpg"}
      />

      <div className="lg:space-y-18 space-y-14">
        <DestinationsSection />

        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-y-8">
          <TicketSection />
          <HotelSection />
          <TravelSection />
          <ContactInfoListSection />
        </div>
        <CarRentalSection />
      </div>
    </div>
  );
}
