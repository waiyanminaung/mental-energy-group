import ModalWrapper from "@/app/components/modal/ModalWrapper";
import { ModalProps } from "@/app/components/modal/useModal";
import { X } from "@untitledui/icons";
import Image from "next/image";

interface ContentDetailModalProps extends ModalProps {
  data: {
    id: string;
    title: string;
    content: string;
    featured_image: string;
    created_at: string;
  };
}

const ContentDetailModal = ({ data, closeModal }: ContentDetailModalProps) => {
  return (
    <ModalWrapper className="md:max-w-[700px]">
      <div className="bg-white p-8 rounded-lg h-[90vh] flex flex-col">
        <div className="flex items-start justify-between  mb-5">
          <div className="inline-flex items-center text-sm text-gray-900">
            <div className="w-14 h-14 rounded-full overflow-hidden mr-4 relative bg-[#0c2139] border-5 border-[#0c2139]">
              <Image
                className="object-center w-full h-full object-cover"
                src="/images/logo.png"
                alt="Mental Energy Group"
                fill
                priority
              />
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Mental Energy Group
              </h2>
              <div className="text-sm text-gray-500">
                <time>
                  {new Date(data.created_at).toLocaleDateString("en", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>
          </div>

          <button onClick={closeModal}>
            <X width={30} height={30} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <h1 className="mb-3 text-2xl font-extrabold leading-tight text-gray-900">
            {data.title}
          </h1>

          <Image
            src={data.featured_image}
            alt={data.title}
            width={700}
            height={400}
            className="rounded-lg border border-gray-100"
          />
          <div className="mt-5">
            <p>{data.content}</p>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ContentDetailModal;
