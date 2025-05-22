"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import toast from "react-hot-toast";
import FormModalWrapper from "@/app/components/modal/ModalWrapper";
import { ModalProps } from "@/app/components/modal/useModal";
import { RHFInput } from "@/app/components/rhf";
import { RHFTextarea } from "@/app/components/rhf/rhf-textarea";
import { RHFFile } from "@/app/components/rhf/rhf-file";
import Button from "@/app/admin/components/Button";
import Image from "next/image";

interface FileValue {
  preview: string | null;
  fileType: string;
  file: File;
}

const announcementSchema = yup.object({
  title: yup.string().required("Title is required"),
  content: yup.string().required("Content is required"),
  featuredImage: yup
    .mixed<FileValue>()
    .test("fileSize", "File size is too large", (value) => {
      if (!value) return true;
      if (!value.file) return true;
      return value.file.size <= 5 * 1024 * 1024;
    }),
});

export type AnnouncementDto = yup.InferType<typeof announcementSchema>;

const EditFormModal = ({ closeModal }: ModalProps) => {
  const methods = useForm({
    resolver: yupResolver(announcementSchema),
  });

  const onSubmit = async (data: AnnouncementDto) => {
    console.log(data);
    toast.success("Announcement saved successfully");
    handleClose();
  };

  const handleClose = () => {
    methods.reset();
    closeModal?.();
  };

  return (
    <FormModalWrapper className="max-w-full max-h-full h-full rounded-none">
      <FormProvider {...methods}>
        <form
          className="flex-1 overflow-hidden flex flex-col h-full"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {/* Header */}
          <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Edit Announcement</h2>
            <div className="flex items-center gap-3">
              <Button onClick={handleClose} appearance="text">
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                Publish
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-12 flex-1">
            <div className="col-span-9">
              <div className="p-8 space-y-8">
                <RHFInput
                  name="title"
                  className="full text-2xl font-semibold focus:ring-0 focus:border-gray-300 rounded-none py-2 px-3 h-auto"
                  placeholder="Add Title"
                />
                <RHFTextarea
                  name="content"
                  placeholder="Add Content"
                  className="rounded-none min-h-[300px] text-lg px-3"
                />
              </div>
            </div>
            <div className="col-span-3 border-s border-gray-300">
              <div className="p-8">
                <RHFFile
                  name="featuredImage"
                  accept="image/*"
                  render={({ openFilePicker, field }) => {
                    return (
                      <div>
                        {field.value?.preview ? (
                          <div>
                            <div className="aspect-video relative border border-input">
                              <Image
                                src={field.value.preview}
                                alt="Preview"
                                className="w-full h-full object-cover object-center"
                                fill
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                              <Button
                                onClick={openFilePicker}
                                fullWidth
                                size="large"
                                variant="primary"
                                appearance="outline"
                              >
                                Replace
                              </Button>
                              <Button
                                onClick={() => {
                                  field.onChange(null);
                                }}
                                fullWidth
                                size="large"
                                variant="destructive"
                                appearance="outline"
                              >
                                Remove
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <Button
                            variant="primary"
                            appearance="outline"
                            size="large"
                            fullWidth
                            onClick={openFilePicker}
                          >
                            Set Featured Image
                          </Button>
                        )}
                      </div>
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </FormModalWrapper>
  );
};

export default EditFormModal;
