import Button from "@/app/admin/components/Button";
import { Plus } from "@untitledui/icons";
import Image from "next/image";
import EditButton from "./components/EditButton";

export default function AnnouncementsPage() {
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
        <Button className="items-center gap-1">
          <Plus width={16} height={16} /> Create New
        </Button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-gray-200">
              <td className="px-6 py-4">
                <Image
                  src="/images/placeholder-image.png"
                  alt="Announcement"
                  width={48}
                  height={48}
                  className="rounded-lg size-12 object-cover object-center"
                />
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Special Discount on Health Checkup
              </th>
              <td className="px-6 py-4">
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4">2024-01-20</td>
              <td className="px-6 py-4 text-right">
                <EditButton />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
