import Image from "next/image";
import { ReactNode } from "react";

export default function EntryServiceBanner({
  title,
  description,
  image,
}: {
  title: string;
  description: string | ReactNode;
  image: string;
}) {
  return (
    <div className="grid grid-cols-12 w-full bg-gray-100 rounded-xl mb-10 items-center">
      {/* Left Content */}
      <div className="p-8 lg:col-span-7 col-span-full">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <div className="text-base text-gray-600 ">{description}</div>
      </div>

      {/* Right Image Grid */}
      <div className="mask mx-auto aspect-square w-full lg:col-span-5 col-start-3 col-end-11">
        <Image
          src={image}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
