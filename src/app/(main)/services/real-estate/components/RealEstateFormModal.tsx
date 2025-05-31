"use client";

import { RHFInput, RHFInputGroup } from "@/app/components/rhf";
import { RHFTextarea } from "@/app/components/rhf/rhf-textarea";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import toast from "react-hot-toast";
import { useSentMail } from "@/app/(main)/hooks/useSentMail";
import { BaseMailData } from "@/app/(main)/types";
import { ServiceTypeEnum } from "@/app/(main)/constant";
import FormModalWrapper from "@/app/components/modal/ModalWrapper";
import { ModalProps } from "@/app/components/modal/useModal";
import { emailValidation } from "@/app/helpers/emailValidation";
import { RHFSelect } from "@/app/components/rhf/rhf-select";

const realEstateFormSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: emailValidation.required("Email is required"),
  nationality: yup.string().required("Nationality is required"),
  phone: yup.string().required("Phone is required"),
  requestType: yup.string().required("Request Type is required"),
  location: yup.string().required("Location is required"),
  message: yup.string(),
});

export type RealEstateFormDto = yup.InferType<typeof realEstateFormSchema>;

const RealEstateFormModal = ({ closeModal }: ModalProps) => {
  const methods = useForm({
    resolver: yupResolver(realEstateFormSchema),
  });

  const { loading, sentMail } = useSentMail<RealEstateFormDto & BaseMailData>();

  const onSubmit = async (data: RealEstateFormDto) => {
    const { error } = await sentMail({
      ...data,
      subject: `New Enquiry for [Real Estate]`,
      serviceType: ServiceTypeEnum.REAL_ESTATE,
    });

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Enquiry submitted successfully");
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
              <h3 className="text-2xl font-semibold">
                Submit Your Real Estate Inquiry
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

            <RHFInputGroup label="I'm Looking To:">
              <RHFSelect
                name="requestType"
                options={[
                  {
                    label: "Buy",
                    value: "Buy",
                  },
                  {
                    label: "Rent",
                    value: "Rent",
                  },
                  {
                    label: "Sell",
                    value: "Sell",
                  },
                ]}
              />
            </RHFInputGroup>

            <RHFInputGroup label="Interested Location">
              <RHFInput name="location" />
            </RHFInputGroup>

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
              {loading ? "Submitting..." : "Submit Enquiry"}
            </button>
          </div>
        </form>
      </FormProvider>
    </FormModalWrapper>
  );
};

export default RealEstateFormModal;
