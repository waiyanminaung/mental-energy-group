"use client";

import { useModal } from "@/app/components/modal/useModal";
import { LinkExternal01 } from "@untitledui/icons";
import TicketRequestFormModal from "./TicketRequestFormModal";

const TicketSection = () => {
  const { show } = useModal();

  return (
    <div className="flex flex-col justify-between shadow-lg border-gray-200 p-8 rounded-lg">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Ticket Selling Service</h2>
        <p className="font-medium">
          We offer various tickets for attractions and experiences in Thailand.
        </p>
        <button
          onClick={() => {
            window.open(
              "https://firebasestorage.googleapis.com/v0/b/portfolio-56baf.appspot.com/o/documents%2Ftickets.pdf?alt=media&token=1f47afdb-3f09-4c65-b7d9-b554c9581823",
              "_blank"
            );
          }}
          className="text-blue-600 font-semibold hover:!underline border py-2 px-3 rounded mt-2 inline-flex gap-1.5 items-center"
        >
          View Tickets
          <LinkExternal01 className="size-4" />
        </button>
      </div>

      <div>
        <button
          onClick={() => show(<TicketRequestFormModal />)}
          className="bg-[#dbb481] text-white px-8 py-3 rounded-full hover:bg-[#c49c69] transition-colors duration-300 mt-4"
        >
          Make a Request
        </button>
      </div>
    </div>
  );
};

export default TicketSection;
