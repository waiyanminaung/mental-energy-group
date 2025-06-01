"use client";

import { useModal } from "@/app/components/modal/useModal";
import { LinkExternal01 } from "@untitledui/icons";
import TicketFormModal from "./TicketFormModal";
import Button from "@/app/admin/components/Button";

const TicketSection = () => {
  const { show } = useModal();

  return (
    <div className="flex flex-col justify-between shadow-lg border-gray-200 p-8 rounded-lg">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Ticket Selling Service</h2>
        <p className="font-medium">
          We offer various tickets for attractions and experiences in Thailand.
        </p>
        <Button
          variant="primary"
          appearance="outline"
          onClick={() => {
            window.open(
              "https://firebasestorage.googleapis.com/v0/b/portfolio-56baf.appspot.com/o/documents%2FTicket.pdf?alt=media&token=6551b351-8c3e-4b61-a726-5eec6926c0ab",
              "_blank"
            );
          }}
        >
          View Tickets
          <LinkExternal01 className="size-4" />
        </Button>
      </div>

      <div>
        <button
          onClick={() => show(<TicketFormModal />)}
          className="bg-[#dbb481] text-white px-8 py-3 rounded-full hover:bg-[#c49c69] transition-colors duration-300 mt-4"
        >
          Inquire Now
        </button>
      </div>
    </div>
  );
};

export default TicketSection;
