"use client";

import Button from "@/app/admin/components/Button";
import { Edit05, Plus, Trash01 } from "@untitledui/icons";
import Image from "next/image";
import { useFirestoreDB } from "@/hooks/useFirestoreDB";
import classNames from "@/utils/classNames";
import { Announcement } from "./type";
import { useModal } from "@/app/components/modal/useModal";
import EditFormModal from "./components/EditFormModal";
import { ConfirmDialog } from "@/app/admin/components/ConfirmDialog";
import { deleteDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";
import { db } from "@/lib/firebase";

export default function AnnouncementsPage() {
  const {
    data: announcements,
    loading,
    error,
    refresh,
  } = useFirestoreDB<Announcement>("hospital_announcement");

  const { show } = useModal();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleCreateOrEdit = (data?: Announcement) => {
    show(<EditFormModal data={data} onSuccess={refresh} />);
  };

  const handleDelete = (id: string) => {
    ConfirmDialog.show({
      title: "Delete Announcement",
      message: "Are you sure you want to delete this announcement?",
      onConfirm: async () => {
        try {
          const docRef = doc(db, "hospital_announcement", id);
          await deleteDoc(docRef);
          refresh();
          toast.success("Announcement deleted successfully");
        } catch (error) {
          console.error("Error deleting document:", error);
        }
      },
    });
  };

  return (
    <>
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h1 className="font-bold text-gray-900 text-2xl">
            Hospital Announcements
          </h1>
          <p className="mt-1 text-sm font-normal text-gray-500">
            Manage hospital announcements, discounts, and special offers. You
            can add, edit, or remove announcements as needed.
          </p>
        </div>
        <Button
          variant="primary"
          className="items-center gap-1"
          onClick={() => handleCreateOrEdit()}
        >
          <Plus width={16} height={16} /> Create New
        </Button>
      </div>
      <div className="relative overflow-x-auto rounded-lg shadow">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3" />
            </tr>
          </thead>
          <tbody>
            {announcements.map((announcement) => (
              <tr
                key={announcement.id}
                className="bg-white border-b last:border-0 border-gray-200"
              >
                <td className="px-6 py-3">
                  <Image
                    src={
                      announcement.featured_image ||
                      "/images/placeholder-image.png"
                    }
                    alt={announcement.title}
                    width={48}
                    height={48}
                    className="rounded-lg size-12 object-cover object-center"
                  />
                </td>
                <th className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                  {announcement.title}
                </th>
                <td className="px-6 py-3">
                  {new Date(announcement.created_at).toLocaleDateString()}
                </td>
                <td className="px-6 py-3">
                  <span
                    className={classNames(
                      "inline-flex px-3 py-1 rounded-full text-xs font-medium text-center capitalize",
                      announcement.status == 1
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    )}
                  >
                    {announcement.status == 1 ? "Publish" : "Draft"}
                  </span>
                </td>
                <td className="px-6 py-3 text-right">
                  <div className="flex gap-3 justify-end">
                    <Button
                      isLoading={loading}
                      size="small"
                      onClick={() => handleCreateOrEdit(announcement)}
                      className="font-medium hover:text-primary hover:underline"
                    >
                      <Edit05 width={16} height={16} />
                    </Button>

                    <Button
                      isLoading={loading}
                      size="small"
                      onClick={() => handleDelete(announcement.id)}
                      className="font-medium hover:text-destructive hover:underline"
                    >
                      <Trash01 width={16} height={16} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
