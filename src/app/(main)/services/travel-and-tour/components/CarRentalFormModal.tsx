"use client";

import { RHFInput, RHFInputGroup } from "@/app/components/rhf";
import { RHFDate } from "@/app/components/rhf/rhf-date";
import { RHFFile } from "@/app/components/rhf/rhf-file";
import { RHFTextarea } from "@/app/components/rhf/rhf-textarea";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import * as yup from "yup";
import toast from "react-hot-toast";
import { fileToBase64 } from "@/utils/fileToBase64";
import { useSentMail } from "@/app/(main)/hooks/useSentMail";
import { BaseMailData } from "@/app/(main)/types";
import { ServiceTypeEnum } from "@/app/(main)/constant";
import FormModalWrapper from "@/app/components/modal/ModalWrapper";
import { ModalProps } from "@/app/components/modal/useModal";
import { emailValidation } from "@/app/helpers/emailValidation";
import { CarRentalType } from "@/app/(main)/data";
import classNames from "@/utils/classNames";
import { useEffect } from "react";

interface FileValue {
  preview: string | null;
  fileType: string;
  file: File;
}

const carRentalSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: emailValidation.required("Email is required"),
  nationality: yup.string().required("Nationality is required"),
  phone: yup.string().required("Phone is required"),
  date: yup.date().required("Preferred date is required"),
  driverType: yup.string().required("Driver Type is required"),
  model: yup.string().required("Model is required"),
  passport: yup.mixed<FileValue>().when("driverType", {
    is: "without-driver",
    then: (schema) =>
      schema
        .required("Passport Bio is required")
        .test("fileSize", "File size is too large", (value) => {
          if (!value) return true;
          if (!value.file) return true;
          return value.file.size <= 5 * 1024 * 1024;
        }),
    otherwise: (schema) => schema.optional(),
  }),
  driving_license: yup.mixed<FileValue>().when("driverType", {
    is: "without-driver",
    then: (schema) =>
      schema
        .required("Driving License Bio is required")
        .test("fileSize", "File size is too large", (value) => {
          if (!value) return true;
          if (!value.file) return true;
          return value.file.size <= 5 * 1024 * 1024;
        }),
    otherwise: (schema) => schema.optional(),
  }),
  message: yup.string(),
});

export type CarRentalFormDto = yup.InferType<typeof carRentalSchema>;

interface CarRentalFormModalProps extends ModalProps {
  data: CarRentalType;
}

const CarRentalFormModal = ({ data, closeModal }: CarRentalFormModalProps) => {
  const methods = useForm({
    defaultValues: {
      driverType: "with-driver",
    },
    resolver: yupResolver(carRentalSchema),
  });

  const { loading, sentMail } = useSentMail<CarRentalFormDto & BaseMailData>();

  useEffect(() => {
    methods.setValue("model", data.model);
  }, [data, methods]);

  console.log(methods.watch("model"));

  const onSubmit = async (formData: CarRentalFormDto) => {
    const passportBase64 = formData.passport?.file
      ? await fileToBase64(formData.passport.file)
      : null;

    const licenseBase64 = formData.driving_license?.file
      ? await fileToBase64(formData.driving_license.file)
      : null;

    const attachments = [];

    if (passportBase64 && formData.driverType === "without-driver") {
      attachments.push({
        content: passportBase64,
        filename: formData?.passport?.file.name || "",
      });
    }

    if (licenseBase64 && formData.driverType === "without-driver") {
      attachments.push({
        content: licenseBase64,
        filename: formData?.driving_license?.file.name || "",
      });
    }

    const { error } = await sentMail({
      ...formData,
      subject: `New Enquiry for [Car Rental] - ${formData.model}`,
      serviceType: ServiceTypeEnum.CAR_RENTAL,
      attachments: attachments,
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
          <div className="modal-content-header">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold !text-gray-500">
                Booking for <span className="text-primary">{data.model}</span>
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

          <div className="modal-content gap-4 flex-1 grid grid-cols-2">
            <RHFInputGroup label="Name">
              <RHFInput name="name" />
            </RHFInputGroup>

            <RHFInputGroup label="Email">
              <RHFInput name="email" />
            </RHFInputGroup>

            <RHFInputGroup label="Phone">
              <RHFInput name="phone" />
            </RHFInputGroup>

            <RHFInputGroup label="Nationality">
              <RHFInput name="nationality" />
            </RHFInputGroup>

            <div className="col-span-full">
              <RHFInputGroup label="Preferred Date">
                <RHFDate name="date" />
              </RHFInputGroup>
            </div>

            <div className="col-span-full">
              <SelectDriveType />
            </div>

            {methods.watch("driverType") === "without-driver" && (
              <>
                <div className="col-span-full">
                  <RHFInputGroup label="Passport Bio">
                    <RHFFile name="passport" accept="image/*,.pdf" />
                  </RHFInputGroup>
                </div>

                <div className="col-span-full">
                  <RHFInputGroup label="Driving License">
                    <RHFFile name="driving_license" accept="image/*,.pdf" />
                  </RHFInputGroup>
                </div>
              </>
            )}
            <div className="col-span-full">
              <RHFInputGroup label="Message">
                <RHFTextarea name="message" />
              </RHFInputGroup>
            </div>
          </div>

          <div className="modal-content-footer">
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

export default CarRentalFormModal;

export function SelectDriveType() {
  const methods = useFormContext();
  const driverType = methods.watch("driverType");

  const handleChange = (value: string) => {
    methods.setValue("driverType", value);
  };

  return (
    <div className="flex gap-2">
      <button
        type="button"
        className={classNames(
          "border py-1.5 px-2 rounded flex-1",
          driverType === "with-driver"
            ? "bg-[#dbb481] text-white"
            : "text-[#dbb481] border-[#dbb481]"
        )}
        onClick={() => handleChange("with-driver")}
      >
        With Driver
      </button>
      <button
        type="button"
        className={classNames(
          "border py-1.5 px-2 rounded flex-1",
          driverType === "without-driver"
            ? "bg-[#dbb481] text-white"
            : "text-[#dbb481] border-[#dbb481]"
        )}
        onClick={() => handleChange("without-driver")}
      >
        Without Driver
      </button>
    </div>
  );
}
