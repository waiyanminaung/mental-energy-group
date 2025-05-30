"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import toast from "react-hot-toast";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { storage, db } from "@/lib/firebase";
import FormModalWrapper from "@/app/components/modal/ModalWrapper";
import { ModalProps } from "@/app/components/modal/useModal";
import { RHFInput } from "@/app/components/rhf";
import { RHFTextarea } from "@/app/components/rhf/rhf-textarea";
import { FileValue, RHFFile } from "@/app/components/rhf/rhf-file";
import Button from "@/app/admin/components/Button";
import Image from "next/image";
import { Announcement } from "../type";
import { RHFSelect } from "@/app/components/rhf/rhf-select";
import { CollectionEnum } from "@/app/(main)/constant";

interface EditFormModalProps extends ModalProps {
  data?: Announcement;
  onSuccess?: () => void;
}

const announcementSchema = yup.object({
  id: yup.string().nullable(),
  title: yup.string().required("Title is required"),
  content: yup.string().required("Content is required"),
  status: yup.number().required("Status is required"),
  featured_image: yup
    .mixed<FileValue>()
    .test("fileSize", "File size is too large", (value) => {
      if (!value) return true;
      if (!value.file) return true;
      return value.file.size <= 5 * 1024 * 1024;
    })
    .nullable(),
});

export type AnnouncementDto = yup.InferType<typeof announcementSchema>;

const EditFormModal = ({ data, closeModal, onSuccess }: EditFormModalProps) => {
  const methods = useForm({
    defaultValues: {
      ...(data ? data : {}),
      featured_image: data?.featured_image
        ? ({
            preview: data?.featured_image,
            fileType: "image",
            file: null,
          } as unknown as FileValue)
        : null,
    },
    resolver: yupResolver(announcementSchema),
    shouldFocusError: false,
  });

  const isEditMode = data?.id;

  const onSubmit = async (formData: AnnouncementDto) => {
    try {
      let imageUrl = "";
      if (formData.featured_image?.file) {
        const storageRef = ref(
          storage,
          `hospital-announcements/${Date.now()}_${formData?.featured_image.file.name}`
        );
        const uploadResult = await uploadBytes(
          storageRef,
          formData.featured_image.file
        );
        imageUrl = await getDownloadURL(uploadResult.ref);
      } else {
        imageUrl = formData.featured_image?.preview || "";
      }

      const payload = {
        ...formData,
        featured_image: imageUrl,
        created_at: new Date().toISOString(),
      };

      if (isEditMode) {
        if (!data.id) return console.log("No id found");
        const docRef = doc(db, CollectionEnum.HOSPITAL_ANNOUNCEMENTS, data.id);
        console.log("update", payload);
        await updateDoc(docRef, payload);
      } else {
        console.log("new", payload);
        await addDoc(
          collection(db, CollectionEnum.HOSPITAL_ANNOUNCEMENTS),
          payload
        );
      }

      toast.success("Announcement saved successfully");
      onSuccess?.();
      handleClose();
    } catch {
      toast.error("Failed to save announcement");
    }
  };

  const handleClose = () => {
    methods.reset();
    closeModal?.();
  };

  return (
    <FormModalWrapper className="bg-white">
      <FormProvider {...methods}>
        <form
          className="flex-1 overflow-hidden flex flex-col h-full"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {/* Header */}
          <div className="px-6 py-4 font-semibold text-lg flex items-center justify-between">
            {isEditMode ? "Edit Announcement" : "Create Announcement"}
          </div>

          <div className="p-6 pt-0 space-y-6 flex-1 overflow-y-auto">
            <RHFSelect
              name="status"
              placeholder="Choose Status"
              className="w-fit"
              selectButtonClassName="pe-10"
              options={[
                { label: "Publish", value: 1 },
                { label: "Draft", value: 0 },
              ]}
            />

            <RHFFile
              name="featured_image"
              accept="image/*"
              render={({ openFilePicker, field }) => {
                console.log(field.value);
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

            <RHFInput name="title" placeholder="Add Title" />

            <RHFTextarea name="content" placeholder="Add Content" />
          </div>

          <div className="flex justify-end gap-3.5 px-6 py-3 border-t border-gray-200">
            <Button onClick={handleClose} appearance="outline">
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              isLoading={methods.formState.isSubmitting}
            >
              {isEditMode ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </FormProvider>
    </FormModalWrapper>
  );
};

export default EditFormModal;
