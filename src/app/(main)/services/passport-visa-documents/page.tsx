"use client";

import { useState } from "react";
import EntryServiceBanner from "@/app/components/EntryServiceBanner";
import ContactInfoSection from "@/app/components/layout/ContactInfoSection";
import MakeRequestSection from "@/app/components/layout/MakeRequestSection";
import { useModal } from "@/app/components/modal/useModal";
import PassportVisaFormModal from "./components/PassportVisaFormModal";

const tabs = [
  {
    label: "Visa Type 1",
    content:
      "Details about Visa Type 1. This may include required documents, eligibility, and benefits.",
  },
  {
    label: "Visa Type 2",
    content:
      "Details about Visa Type 2. Information on how to apply and common use cases.",
  },
  {
    label: "Visa Type 3",
    content:
      "Details about Visa Type 3. Includes length of stay, renewability, and restrictions.",
  },
];

export default function RealEstatePage() {
  const { show } = useModal();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="px-4 md:px-8">
      <EntryServiceBanner
        title="Passport, Visa and Documents"
        description="We assist with passport renewal, new passport issuance, and various visa services including NoLA, DTV, ED, and Retirement visas—making your travel and stay in Thailand smooth and hassle-free."
        image="/images/services/passport-visa-docs.webp"
      />

      {/* Tabs Section */}
      <div className="my-10">
        <div className="flex gap-3">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              className={`flex-1 px-2 py-4 text-sm font-medium rounded-md transition-colors duration-200
                ${
                  activeTab === idx
                    ? "bg-[#dbb481] text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-[#f0e6d6]"
                }`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6 text-gray-800 leading-relaxed bg-gray-50 p-4 rounded-md shadow-sm">
          {tabs[activeTab].content}
        </div>
      </div>

      <ul className="list-unstyled about-two__list my-6 space-y-2 text-gray-700">
        <li>
          <i className="fa fa-check-circle text-[#dbb481] mr-2" />
          Passport Renewal / Replacement
        </li>
        <li>
          <i className="fa fa-check-circle text-[#dbb481] mr-2" />
          Change of Passport Type (Green to Red)
        </li>
        <li>
          <i className="fa fa-check-circle text-[#dbb481] mr-2" />
          Issue of New Green Passport
        </li>
        <li>
          <i className="fa fa-check-circle text-[#dbb481] mr-2" />
          Reissue of Damaged or Lost Passport
        </li>
        <li>
          <i className="fa fa-check-circle text-[#dbb481] mr-2" />
          NoLA Visa
        </li>
        <li>
          <i className="fa fa-check-circle text-[#dbb481] mr-2" />
          DTV Visa
        </li>
        <li>
          <i className="fa fa-check-circle text-[#dbb481] mr-2" />
          ED Visa
        </li>
        <li>
          <i className="fa fa-check-circle text-[#dbb481] mr-2" />
          Retirement Visa
        </li>
      </ul>

      <ContactInfoSection />

      <MakeRequestSection
        requestDescription="Need help with passport or visa services? Whether it's a renewal, replacement, or a special visa like NoLA, DTB, or ED — submit your enquiry now and let us assist you."
        onRequestClick={() => show(<PassportVisaFormModal />)}
        buttonLabel="Get Enquiry Now"
      />
    </div>
  );
}
