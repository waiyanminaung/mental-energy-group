import classNames from "@/utils/classNames";
import Image from "next/image";

export default function ContactInfoListSection() {
  const contactInfo = [
    {
      icon: "/icons/line.svg",
      label: "Chat Now",
      description: "Right from this website",
      value: "Start chat",
      link: "#",
      iconColor: "text-blue-500",
    },
    {
      icon: "/icons/mail.svg",
      label: "Email Us",
      description: "From your email app",
      value: "contact@mgroup.co.th",
      link: "mailto:contact@mgroup.co.th",
      iconColor: "text-purple-500",
    },
    {
      icon: "/icons/phone.svg",
      label: "Call or text us",
      description: "From your phone",
      value: "+66 123 456 789",
      link: "tel:+66123456789",
      iconColor: "text-red-500",
    },
  ];

  return (
    <div className="bg-white shadow-lg border-gray-200 py-8 px-6 rounded-lg flex flex-col justify-center items-center">
      <div className="w-full">
        {contactInfo.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={classNames(
              "flex items-center hover:bg-gray-50 transition-colors group border-b border-gray-200 py-2",
              index === contactInfo.length - 1 && "border-b-0"
            )}
          >
            <div
              className={`w-12 h-12 rounded-full bg-green-100 flex items-center justify-center`}
            >
              <Image src={item.icon} width={40} height={40} alt="" />
            </div>
            <div className="ml-4 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.label}
                </h3>
              </div>
              <p className="text-gray-500 text-sm">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
