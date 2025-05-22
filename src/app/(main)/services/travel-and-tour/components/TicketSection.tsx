"use client";

const TicketSection = () => {
  return (
    <div className="flex flex-col justify-between shadow-lg border-gray-200 p-8 rounded-lg">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Ticket Selling Service</h2>
        <p className="font-medium">
          We offer various tickets for attractions and experiences in Thailand.
        </p>
        <a href="#" className="text-blue-600 font-semibold hover:!underline">
          View Tickets
        </a>
      </div>

      <div>
        <button className="bg-[#dbb481] text-white px-8 py-3 rounded-full hover:bg-[#c49c69] transition-colors duration-300 mt-4">
          Make a Request
        </button>
      </div>
    </div>
  );
};

export default TicketSection;
