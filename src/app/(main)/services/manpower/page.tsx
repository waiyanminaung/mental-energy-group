"use client";

import EntryServiceBanner from "@/app/components/EntryServiceBanner";
import ContactInfoSection from "@/app/components/layout/ContactInfoSection";
import MakeRequestSection from "@/app/components/layout/MakeRequestSection";
import JobApplicationModal from "./components/JobApplicationModal";
import { useModal } from "@/app/components/modal/useModal";

export default function Page() {
  const { show } = useModal();

  return (
    <div>
      <EntryServiceBanner
        title="Professional Manpower Solutions"
        description="Connect with skilled professionals through our comprehensive manpower services. We provide reliable staffing solutions tailored to your business needs."
        image="/images/manpower.jpeg"
      />
      <ContactInfoSection />
      <MakeRequestSection
        requestDescription="Ready to start your journey? Make a request now and let us help you
plan your perfect Thai adventure."
        onRequestClick={() => show(<JobApplicationModal />)}
        buttonLabel="Job Apply Now"
      />
    </div>
  );
}
