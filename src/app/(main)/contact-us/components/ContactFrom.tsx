"use client";

import { RHFInput, RHFInputGroup } from "@/app/components/rhf";
import { RHFTextarea } from "@/app/components/rhf/rhf-textarea";
import { emailValidation } from "@/app/helpers/emailValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { useSentMail } from "../../hooks/useSentMail";
import toast from "react-hot-toast";

const contactFormSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: emailValidation.required("Email is required"),
  phone: yup.string().required("Phone is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

export type ContactFormDto = yup.InferType<typeof contactFormSchema>;

const ContactFrom = () => {
  const methods = useForm({
    resolver: yupResolver(contactFormSchema),
  });

  const { loading, sentMail } = useSentMail();

  const onSubmit = async (data: ContactFormDto) => {
    const { error } = await sentMail({
      ...data,
      subject: `${data.subject} - Contact Form`,
      serviceType: "contact",
    });

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Submitted successfully");
    methods.reset({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        className="contact-one__form"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="row low-gutters space-y-6">
          <div className="col-md-6">
            <RHFInputGroup>
              <RHFInput
                name="name"
                placeholder="Your Name"
                className="min-h-14"
              />
            </RHFInputGroup>
          </div>
          <div className="col-md-6">
            <RHFInputGroup>
              <RHFInput
                name="email"
                placeholder="Your Email"
                className="min-h-14"
              />
            </RHFInputGroup>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <RHFInputGroup>
                <RHFInput
                  name="phone"
                  placeholder="Your Phone"
                  className="min-h-14"
                />
              </RHFInputGroup>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <RHFInputGroup>
                <RHFInput
                  name="subject"
                  placeholder="Your Subject"
                  className="min-h-14"
                />
              </RHFInputGroup>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <RHFInputGroup>
                <RHFTextarea name="message" placeholder="Your Message" />
              </RHFInputGroup>
            </div>
          </div>
          <div className="col-12">
            <button className="thm-btn" type="submit" disabled={loading}>
              {loading ? "Senting..." : "Send A Message"}
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default ContactFrom;
