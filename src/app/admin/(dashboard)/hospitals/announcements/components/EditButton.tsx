"use client";

import { useModal } from "@/app/components/modal/useModal";
import EditFormModal from "./EditFormModal";

const EditButton = () => {
  const { show } = useModal();

  return (
    <button
      onClick={() => show(<EditFormModal />)}
      className="font-medium text-[#0c2139] hover:text-[#163456] hover:underline"
    >
      Edit
    </button>
  );
};

export default EditButton;
