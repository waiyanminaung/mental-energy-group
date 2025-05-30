import { contactInfoData } from "@/app/(main)/data";
import classNames from "@/utils/classNames";
import Image from "next/image";

export default function ContactInfoListSection() {
  return (
    <div className="bg-white shadow-lg border-gray-200 py-8 px-6 rounded-lg flex flex-col justify-center items-center">
      <div className="w-full">
        {contactInfoData.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={classNames(
              "flex items-center hover:bg-gray-50 transition-colors group border-b border-gray-200 py-2",
              index === contactInfoData.length - 1 && "border-b-0"
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
