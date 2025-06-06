"use client";

import EntryServiceBanner from "@/app/components/EntryServiceBanner";
import ContactInfoSection from "@/app/components/layout/ContactInfoSection";
import MakeRequestSection from "@/app/components/layout/MakeRequestSection";
import OtherServicesFormModal from "./components/OtherServicesFormModal";
import { useModal } from "@/app/components/modal/useModal";

export default function OtherPage() {
  const { show } = useModal();

  return (
    <div>
      <EntryServiceBanner
        title="Other Solutions"
        description="We offer a wide range of services to help you with your business needs."
        image="/images/services/other.jpg"
      />
      <ul className="list-unstyled about-two__list">
        <li>
          <i className="fa fa-check-circle"></i>Document Translation
        </li>
        <li>
          <i className="fa fa-check-circle"></i>Interpreter Group
        </li>
        <li>
          <i className="fa fa-check-circle"></i>Driver Group
        </li>
      </ul>

      <ContactInfoSection />

      <MakeRequestSection
        onRequestClick={() => show(<OtherServicesFormModal />)}
        buttonLabel="Get Enquiry Now"
      />
    </div>
  );
}
