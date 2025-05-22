import Image from "next/image";

export default function ContactInfoSection() {
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
    <div className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              className={`w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4`}
            >
              <Image src={item.icon} width={40} height={40} alt="" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
            <p className="text-gray-500 text-sm mb-4">{item.description}</p>
            <a
              href={item.link}
              className="inline-block text-[#00856A] hover:text-[#006B55] font-medium"
            >
              {item.value}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
