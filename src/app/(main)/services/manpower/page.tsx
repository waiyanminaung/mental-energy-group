"use client";

import EntryServiceBanner from "@/app/components/EntryServiceBanner";
import ContactInfoSection from "@/app/components/layout/ContactInfoSection";
import MakeRequestSection from "@/app/components/layout/MakeRequestSection";
import JobApplicationModal from "./components/JobApplicationModal";
import { useModal } from "@/app/components/modal/useModal";
import JobsSection from "./components/JobsSection";

export default function Page() {
  const { show } = useModal();

  return (
    <div>
      <EntryServiceBanner
        title="Professional Manpower Solutions"
        description="Connect with skilled professionals through our comprehensive manpower services. We provide reliable staffing solutions tailored to your business needs."
        image="/images/services/manpower.jpeg"
      />
      <JobsSection />
      <ContactInfoSection />
      <MakeRequestSection
        requestDescription="Ready to start your next career journey? Submit your application now and take the first step toward a rewarding opportunity with us."
        onRequestClick={() => show(<JobApplicationModal />)}
        buttonLabel="Job Apply Now"
      />
    </div>
  );
}
