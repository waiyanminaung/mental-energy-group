"use client";

const HotelSection = () => {
  return (
    <div className="flex flex-col justify-between shadow-lg border-gray-200 p-8 rounded-lg">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Hotel Booking Service</h2>
        <p className="font-medium">
          Let us handle your hotel reservations in Thailand. Simply submit your
          requirements through our request form, and our team will assist you in
          finding and booking the perfect accommodation that matches your
          preferences and budget.
        </p>
      </div>

      <div>
        <button className="bg-[#dbb481] text-white px-8 py-3 rounded-full hover:bg-[#c49c69] transition-colors duration-300 mt-4">
          Make a Request
        </button>
      </div>
    </div>
  );
};

export default HotelSection;
