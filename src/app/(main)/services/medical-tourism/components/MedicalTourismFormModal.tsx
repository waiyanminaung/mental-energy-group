"use client";

import { RHFInput, RHFInputGroup } from "@/app/components/rhf";
import { RHFDate } from "@/app/components/rhf/rhf-date";
import { RHFFile } from "@/app/components/rhf/rhf-file";
import { RHFTextarea } from "@/app/components/rhf/rhf-textarea";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import toast from "react-hot-toast";
import { fileToBase64 } from "@/utils/fileToBase64";
import { useSentMail } from "@/app/(main)/hooks/useSentMail";
import { BaseMailData } from "@/app/(main)/types";
import { ServiceTypeEnum } from "@/app/(main)/constant";
import { useEffect } from "react";
import FormModalWrapper from "@/app/components/modal/ModalWrapper";
import { Hospital } from "../type";
import { ModalProps } from "@/app/components/modal/useModal";
import { emailValidation } from "@/app/helpers/emailValidation";

interface FileValue {
  preview: string | null;
  fileType: string;
  file: File;
}

const bookingSchema = yup.object({
  title: yup.string().required("Hospital is required"),
  name: yup.string().required("Name is required"),
  email: emailValidation.required("Email is required"),
  nationality: yup.string().required("Nationality is required"),
  phone: yup.string().required("Phone is required"),
  preferredDate: yup.date().required("Preferred date is required"),
  passport: yup
    .mixed<FileValue>()
    .required("Passport Bio is required")
    .test("fileSize", "File size is too large", (value) => {
      if (!value) return true;
      if (!value.file) return true;
      return value.file.size <= 5 * 1024 * 1024;
    }),
  message: yup.string(),
});

export type BookingDto = yup.InferType<typeof bookingSchema>;

const MedicalTourismFormModal = ({
  data,
  closeModal,
}: {
  data: Hospital;
} & ModalProps) => {
  const methods = useForm({
    resolver: yupResolver(bookingSchema),
  });

  const { loading, sentMail } = useSentMail<BookingDto & BaseMailData>();

  useEffect(() => {
    methods.setValue("title", data.name);
  }, [methods, data]);

  const onSubmit = async (data: BookingDto) => {
    const attachmentBase64 = await fileToBase64(data.passport.file);

    const { error } = await sentMail({
      ...data,
      subject: `New Enquiry for [Medical Tourism] - ${data.title}`,
      serviceType: ServiceTypeEnum.MEDICAL_TOURISM,
      attachments: [
        {
          content: attachmentBase64,
          filename: data.passport.file.name,
        },
      ],
    });

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Booking submitted successfully");
    handleClose();
  };

  const handleClose = () => {
    methods.reset();
    closeModal?.();
  };

  return (
    <FormModalWrapper>
      <FormProvider {...methods}>
        <form
          className="modal-content-container"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className="px-6 pt-4">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold !text-gray-500">
                Booking for <span className="text-primary">{data.name}</span>
              </h3>
              <button
                type="button"
                onClick={handleClose}
                className="text-2xl text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                ×
              </button>
            </div>
          </div>

          <div className="modal-content p-6 gap-4 flex-1 grid grid-cols-2">
            <RHFInputGroup label="Patient Name">
              <RHFInput name="name" />
            </RHFInputGroup>

            <RHFInputGroup label="Email">
              <RHFInput name="email" />
            </RHFInputGroup>

            <RHFInputGroup label="Nationality">
              <RHFInput name="nationality" />
            </RHFInputGroup>

            <RHFInputGroup label="Phone">
              <RHFInput name="phone" />
            </RHFInputGroup>

            <div className="col-span-full">
              <RHFInputGroup label="Preferred Date">
                <RHFDate name="preferredDate" />
              </RHFInputGroup>
            </div>

            <div className="col-span-full">
              <RHFInputGroup label="Passport Bio">
                <RHFFile name="passport" accept="image/*,.pdf" />
              </RHFInputGroup>
            </div>

            <div className="col-span-full">
              <RHFInputGroup label="Message">
                <RHFTextarea name="message" />
              </RHFInputGroup>
            </div>
          </div>

          <div className="p-6 pt-0">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#dbb481] text-white py-2 px-4 rounded-lg hover:bg-[#c49c69] transition-colors duration-300 sticky bottom-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Booking"}
            </button>
          </div>
        </form>
      </FormProvider>
    </FormModalWrapper>
  );
};

export default MedicalTourismFormModal;
