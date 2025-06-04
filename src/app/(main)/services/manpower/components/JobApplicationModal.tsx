"use client";

import { RHFInput, RHFInputGroup } from "@/app/components/rhf";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import toast from "react-hot-toast";
import FormModalWrapper from "@/app/components/modal/ModalWrapper";
import { ModalProps } from "@/app/components/modal/useModal";
import { emailValidation } from "@/app/helpers/emailValidation";
import { RHFSelect } from "@/app/components/rhf/rhf-select";
import { sendMail } from "@/lib/sendmail";
import { JobEmailTemplate } from "@/app/components/email/JobTemplate";
import { renderEmail } from "@/lib/renderEmail";

const jobApplySchema = yup.object({
  name: yup.string().required("Name is required"),
  email: emailValidation.required("Email is required"),
  nationality: yup.string().required("Nationality is required"),
  phone: yup.string().required("Phone is required"),
  date: yup.date().required("Preferred date is required"),
  countries: yup.string().required("Country is required"),
  other_country: yup.string().when("countries", (countries, schema) => {
    return countries[0] === "Other"
      ? schema.required("Please enter your other country")
      : schema.optional();
  }),
  position: yup.string().required("Position is required"),
  other_position: yup.string().when("position", (position, schema) => {
    return position[0] === "Other"
      ? schema.required("Please enter your other position")
      : schema.optional();
  }),
  salary: yup.string().required("Salary is required"),
});

export type JobApplyDto = yup.InferType<typeof jobApplySchema>;

const JobApplicationModal = ({ closeModal }: ModalProps) => {
  const methods = useForm({
    resolver: yupResolver(jobApplySchema),
  });

  const loading = methods.formState.isSubmitting;

  const onSubmit = async (data: JobApplyDto) => {
    const subject = "Job Application";

    const { error } = await sendMail({
      email: data.email,
      subject: subject,
      text: "",
      html: renderEmail(<JobEmailTemplate subject={subject} {...data} />),
    });

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Submitted successfully");
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
              <h3 className="text-2xl font-semibold">Job Application</h3>
              <button
                type="button"
                onClick={handleClose}
                className="text-2xl text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                ×
              </button>
            </div>
          </div>

          <div className="modal-content gap-6 grid">
            <RHFInputGroup label="Date ">
              <RHFInput type="date" name="date" />
            </RHFInputGroup>

            <div className="col-span-full space-y-3">
              <RHFInputGroup label="Countries where you want to apply for a job">
                <RHFSelect
                  name="countries"
                  options={[
                    {
                      label: "Singapore",
                      value: "Singapore",
                    },
                    {
                      label: "Korea",
                      value: "Korea",
                    },
                    {
                      label: "Taiwan",
                      value: "Taiwan",
                    },
                    {
                      label: "Japan",
                      value: "Japan",
                    },
                    {
                      label: "Jordan",
                      value: "Jordan",
                    },
                    {
                      label: "Saudi Arabia",
                      value: "Saudi Arabia",
                    },
                    {
                      label: "Israel",
                      value: "Israel",
                    },
                    {
                      label: "Other",
                      value: "Other",
                    },
                  ]}
                />
              </RHFInputGroup>

              {methods.watch("countries") === "Other" && (
                <div className="bg-gray-100 p-2 rounded-md">
                  <RHFInputGroup>
                    <RHFInput
                      name="other_country"
                      placeholder="Please enter your other country"
                    />
                  </RHFInputGroup>
                </div>
              )}
            </div>

            <div className="col-span-full space-y-3">
              <RHFInputGroup label="Position you wish to apply for">
                <RHFSelect
                  name="position"
                  options={[
                    {
                      label: "General workers",
                      value: "General workers",
                    },
                    {
                      label: "Factory workers",
                      value: "Factory workers",
                    },
                    {
                      label: "Cleaning staff",
                      value: "Cleaning staff",
                    },
                    {
                      label: "Delivery Driver",
                      value: "Delivery Driver",
                    },
                    {
                      label: "Machine Operator",
                      value: "Machine Operator",
                    },
                    {
                      label: "Packaging staff",
                      value: "Packaging staff",
                    },
                    {
                      label: "Forklift Driver",
                      value: "Forklift Driver",
                    },
                    {
                      label: "Electrician",
                      value: "Electrician",
                    },
                    {
                      label: "Construction worker",
                      value: "Construction worker",
                    },
                    {
                      label: "Capenter",
                      value: "Capenter",
                    },
                    {
                      label: "Morson",
                      value: "Morson",
                    },
                    {
                      label: "Painter",
                      value: "Painter",
                    },
                    {
                      label: "Welder",
                      value: "Welder",
                    },
                    {
                      label: "Option 14",
                      value: "Option 14",
                    },
                    {
                      label: "Other",
                      value: "Other",
                    },
                  ]}
                />
              </RHFInputGroup>

              {methods.watch("position") === "Other" && (
                <div className="bg-gray-100 p-2 rounded-md">
                  <RHFInputGroup>
                    <RHFInput
                      name="other_position"
                      placeholder="Please enter your other position"
                    />
                  </RHFInputGroup>
                </div>
              )}
            </div>

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

            <RHFInputGroup label="Salary">
              <RHFInput name="salary" />
            </RHFInputGroup>
          </div>

          <div className="modal-content-footer">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#dbb481] text-white py-2 px-4 rounded-lg hover:bg-[#c49c69] transition-colors duration-300 sticky bottom-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Apply Now"}
            </button>
          </div>
        </form>
      </FormProvider>
    </FormModalWrapper>
  );
};

export default JobApplicationModal;
