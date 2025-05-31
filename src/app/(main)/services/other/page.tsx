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
        image="/images/main-slider/visa.jpg"
      />
      <ul className="list-unstyled about-two__list">
        <li>
          <i className="fa fa-check-circle"></i>Passport Renewal / Replacement
        </li>
        <li>
          <i className="fa fa-check-circle"></i>Change of Passport Type (Green
          to Red)
        </li>
        <li>
          <i className="fa fa-check-circle"></i>Issue of New Green Passport
        </li>
        <li>
          <i className="fa fa-check-circle"></i>Reissue of Damaged or Lost
          Passport
        </li>
        <li>
          <i className="fa fa-check-circle"></i>NoLA Visa
        </li>
        <li>
          <i className="fa fa-check-circle"></i>DTV Visa
        </li>
        <li>
          <i className="fa fa-check-circle"></i>ED Visa
        </li>
        <li>
          <i className="fa fa-check-circle"></i>Retirement Visa
        </li>
      </ul>

      <ContactInfoSection />

      <MakeRequestSection
        requestDescription="Need help with passport or visa services? Whether it's a renewal, replacement, or a special visa like NoLA, DTB, or ED — submit your enquiry now and let us assist you."
        onRequestClick={() => show(<OtherServicesFormModal />)}
        buttonLabel="Get Enquiry Now"
      />
    </div>
  );
}
