import { Hospital } from "./type";
import HospitalCard from "./components/HospitalCard";
import EntryServiceBanner from "@/app/components/EntryServiceBanner";

const hospitals: {
  category: string;
  list: Hospital[];
}[] = [
  {
    category: "Hospitals",
    list: [
      {
        name: "King Chulalongkorn Memorial Hospital",
        image: "/images/hospitals/king_chulalongkorn_memorial.jpg",
        link: "#",
      },
      {
        name: "Siriraj Piyamaharajkarun Hospital",
        image: "/images/hospitals/siriraj-piyamaharajkarun.jpg",
        link: "#",
      },
      {
        name: "Vimut Hospital",
        image: "/images/hospitals/vimut.jpg",
        link: "#",
      },
      {
        name: "Medpark Hospital",
        image: "/images/hospitals/medpark.jpg",
        link: "#",
      },
      {
        name: "Bumrungrad International Hospital",
        image: "/images/hospitals/bumrungrad.png",
        link: "#",
      },
      {
        name: "Bangkok Hospital",
        image: "/images/hospitals/bangkok-hostpital.jpg",
        link: "#",
      },
      {
        name: "BNH Hospital",
        image: "/images/hospitals/bnh.jpg",
        link: "#",
      },
      {
        name: "BIDH Dental Hospital",
        image: "/images/hospitals/BIDH Dental Hospital.webp",
        link: "#",
      },
      {
        name: "Rutnin Eye Hospital",
        image: "/images/hospitals/rutnin-eye-hospital.webp",
        link: "#",
      },
      {
        name: "Bangkok Eye Hospital",
        image: "/images/hospitals/bangkok-eye-hospital.webp",
        link: "#",
      },
    ],
  },
  {
    category: "Aesthetic & Beauty Hospitals",
    list: [
      {
        name: "Masterpiece Hospital",
        image: "/images/hospitals/masterpiece.webp",
        link: "#",
      },
      {
        name: "Lelux Hospital",
        image: "/images/hospitals/lelux.jpg",
        link: "#",
      },
      {
        name: "Asia Cosmetic Hospital",
        image: "/images/hospitals/asia-cosmetic.jpg",
        link: "#",
      },
      {
        name: "Kamol Cosmetic Hospital",
        image: "/images/hospitals/kamol-cosmetic.jpg",
        link: "#",
      },
    ],
  },
];

export default function MedicalTourismPage() {
  return (
    <div>
      <EntryServiceBanner
        title="World-Class Medical Care in Thailand"
        description="Experience Thailand's premier healthcare facilities with internationally accredited hospitals and skilled medical professionals"
        image="/images/main-slider/medical-tourism.jpg"
      />

      {hospitals.map((category, idx) => (
        <div key={idx} className="mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.list.map((item, index) => (
              <HospitalCard key={`${category}-${index}`} data={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
