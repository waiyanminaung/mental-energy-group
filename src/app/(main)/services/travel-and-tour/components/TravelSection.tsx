"use client";

const TravelSection = () => {
  return (
    <div className="flex flex-col justify-between shadow-lg border-gray-200 p-8 rounded-lg">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Travel Planning Service</h2>
        <p className="font-medium">
          Let us create your perfect Thai travel itinerary. Our expert team will
          help plan your entire journey, from transportation arrangements to
          daily activities, ensuring a memorable and hassle-free experience
          tailored to your interests and schedule.
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

export default TravelSection;
