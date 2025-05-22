const MakeRequestSection = ({
  requestDescription,
  onRequestClick,
  buttonLabel = "Make a Request",
}: {
  requestDescription?: string;
  onRequestClick: () => void;
  buttonLabel?: string;
}) => {
  console.log(requestDescription);
  return (
    <div className="text-center mt-12 max-w-[400px] mx-auto">
      <p className="text-gray-600 mb-6">{requestDescription}</p>
      <button
        className="bg-[#dbb481] text-white px-8 py-3 rounded-full hover:bg-[#c49c69] transition-colors duration-300"
        onClick={onRequestClick}
      >
        {buttonLabel}
      </button>
    </div>
  );
};
export default MakeRequestSection;
