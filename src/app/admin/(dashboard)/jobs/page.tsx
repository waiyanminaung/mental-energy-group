"use client";

import Button from "@/app/admin/components/Button";
import { Edit05, Plus, Trash01 } from "@untitledui/icons";
import Image from "next/image";
import { useFirestoreDB } from "@/hooks/useFirestoreDB";
import classNames from "@/utils/classNames";
import { Job } from "./type";
import { useModal } from "@/app/components/modal/useModal";
import EditFormModal from "./components/EditFormModal";
import { ConfirmDialog } from "@/app/admin/components/ConfirmDialog";
import toast from "react-hot-toast";
import { CollectionEnum } from "@/app/(main)/constant";
import { orderBy } from "lodash";
import { firebaseDeleteDocument } from "../../utils/firebaseDeleteDocument";

export default function JobsPage() {
  const {
    data: jobs,
    loading,
    error,
    refresh,
  } = useFirestoreDB<Job>(CollectionEnum.JOB);

  const { show } = useModal();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleCreateOrEdit = (data?: Job) => {
    show(<EditFormModal data={data} onSuccess={refresh} />);
  };

  const handleDelete = (job: Job) => {
    ConfirmDialog.show({
      title: "Delete Job",
      message: "Are you sure you want to delete this job?",
      onConfirm: async () => {
        try {
          await firebaseDeleteDocument(CollectionEnum.JOB, job);
          refresh();
          toast.success("Job deleted successfully");
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
          <h1 className="font-bold text-gray-900 text-2xl">Jobs</h1>
          <p className="mt-1 text-sm font-normal text-gray-500">
            Manage demands. You can add, edit, or remove jobs as needed.
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
            {jobs.length === 0 ? (
              <tr className="bg-white">
                <td
                  className="px-6 py-4 whitespace-nowrap text-center text-md"
                  colSpan={5}
                >
                  No jobs found
                </td>
              </tr>
            ) : (
              orderBy(jobs, ["created_at"], ["desc"]).map((job) => (
                <tr
                  key={job.id}
                  className="bg-white border-b last:border-0 border-gray-200"
                >
                  <td className="px-6 py-3">
                    <Image
                      src={
                        job.featured_image || "/images/placeholder-image.png"
                      }
                      alt={job.title}
                      width={48}
                      height={48}
                      className="rounded-lg size-12 object-cover object-center"
                    />
                  </td>
                  <th className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                    {job.title}
                  </th>
                  <td className="px-6 py-3">
                    {new Date(job.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-3">
                    <span
                      className={classNames(
                        "inline-flex px-3 py-1 rounded-full text-xs font-medium text-center capitalize",
                        job.status == 1
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      )}
                    >
                      {job.status == 1 ? "Publish" : "Draft"}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-right">
                    <div className="flex gap-3 justify-end">
                      <Button
                        isLoading={loading}
                        size="small"
                        onClick={() => handleCreateOrEdit(job)}
                        className="font-medium hover:text-primary hover:underline"
                      >
                        <Edit05 width={16} height={16} />
                      </Button>

                      <Button
                        isLoading={loading}
                        size="small"
                        onClick={() => handleDelete(job)}
                        className="font-medium hover:text-destructive hover:underline"
                      >
                        <Trash01 width={16} height={16} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
