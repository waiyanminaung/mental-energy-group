import Image from "next/image";

const hospitals = [
  {
    category: "Hospitals",
    list: [
      {
        name: "Vimut Hospital",
        image: "/images/hospitals/vimut.jpg",
        rating: 4.8,
        link: "#",
      },
      {
        name: "Medpark Hospital",
        image: "/images/hospitals/medpark.jpg",
        rating: 4.7,
        link: "#",
      },
      {
        name: "Bumrungrad International Hospital",
        image: "/images/hospitals/bumrungrad.jpg",
        rating: 4.9,
        link: "#",
      },
      {
        name: "Bangkok Hospital",
        image: "/images/hospitals/bangkok.jpg",
        rating: 4.8,
        link: "#",
      },
      {
        name: "BNH Hospital",
        image: "/images/hospitals/bnh.jpg",
        rating: 4.7,
        link: "#",
      },
    ],
  },
  {
    category: "Aesthetic & Beauty Hospitals",
    list: [
      {
        name: "Masterpiece Hospital",
        image: "/images/hospitals/masterpiece.jpg",
        rating: 4.8,
        link: "#",
      },
      {
        name: "Lelux Hospital",
        image: "/images/hospitals/lelux.jpg",
        rating: 4.6,
        link: "#",
      },
      {
        name: "Asia Cosmetic Hospital",
        image: "/images/hospitals/asia-cosmetic.jpg",
        rating: 4.7,
        link: "#",
      },
      {
        name: "Kamol Cosmetic Hospital",
        image: "/images/hospitals/kamol.jpg",
        rating: 4.8,
        link: "#",
      },
    ],
  },
];

export default function MedicalTourismPage() {
  return (
    <div>
      {hospitals.map((category, idx) => (
        <div key={idx} className="mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.list.map((hospital, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-48">
                  <Image
                    src={hospital.image}
                    alt={hospital.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {hospital.name}
                  </h3>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(hospital.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-gray-600">
                        {hospital.rating}
                      </span>
                    </div>
                  </div>
                  <a
                    href={hospital.link}
                    className="inline-block bg-[#dbb481] text-white px-6 py-2 rounded-full hover:bg-[#c49c69] transition-colors duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
