import { Resend } from "resend";
import * as React from "react";
import { MedicalTourismEmailTemplate } from "@/app/components/email/medical-tourism-template";
import { ServiceTypeEnum } from "@/app/(main)/constant";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const subject = res.subject || "New Enquiry Received";
    const DynamicTemplate = (function () {
      switch (res.serviceType) {
        case ServiceTypeEnum.MEDICAL_TOURISM:
          return MedicalTourismEmailTemplate;
        default:
          return MedicalTourismEmailTemplate;
      }
    })();

    const { data, error } = await resend.emails.send({
      from: `${res.name} <onboarding@resend.dev>`,
      to: ["info.wyma@gmail.com"],
      subject,
      react: DynamicTemplate({
        ...res,
        subject,
      }) as React.ReactElement,
      attachments: res.attachment ? [res.attachment] : [],
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
