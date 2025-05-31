"use client";

import { useModal } from "@/app/components/modal/useModal";
import EditFormModal from "./EditFormModal";
import { Edit05, Trash01 } from "@untitledui/icons";
import { ConfirmDialog } from "@/app/admin/components/ConfirmDialog";
import { Announcement } from "../../hospitals/announcements/type";

const ActionButton = ({ data }: { data?: Announcement }) => {
  const { show } = useModal();

  return (
    <div className="flex gap-5 justify-end">
      <button
        onClick={() => show(<EditFormModal data={data} />)}
        className="font-medium hover:text-primary hover:underline"
      >
        <Edit05 width={16} height={16} />
      </button>
      <button
        onClick={() => {
          ConfirmDialog.show({
            title: "Delete Announcement",
            message: "Are you sure you want to delete this announcement?",
            onConfirm: () => {
              alert("Delete");
            },
          });
        }}
        className="font-medium hover:text-destructive hover:underline"
      >
        <Trash01 width={16} height={16} />
      </button>
    </div>
  );
};

export default ActionButton;
