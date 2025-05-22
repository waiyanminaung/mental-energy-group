import Image from "next/image";

export default function EntryServiceBanner({
  title,
  description,
  image,
  video,
}: {
  title: string;
  description: string;
  image?: string;
  video?: string;
}) {
  return (
    <div className="grid grid-cols-12 w-full bg-gray-100 rounded-xl mb-10 items-center">
      {/* Left Content */}
      <div className="p-8 col-span-7">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <div className="text-base text-gray-600 ">{description}</div>
      </div>

      {/* Right Image Grid */}
      <div className="mask mx-auto aspect-square w-full col-span-5">
        {video && (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover"
          ></video>
        )}

        {image && (
          <Image
            src={image}
            alt="Banner Image"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        )}
      </div>
    </div>
  );
}
