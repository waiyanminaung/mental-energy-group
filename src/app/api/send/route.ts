import { Resend } from "resend";
import * as React from "react";
import { MedicalTourismEmailTemplate } from "@/app/components/email/MedicalTourismTemplate";
import { ServiceTypeEnum } from "@/app/(main)/constant";
import { JobEmailTemplate } from "@/app/components/email/JobTemplate";
import { TicketTemplate } from "@/app/components/email/TicketTemplate";
import { HotelTemplate } from "@/app/components/email/HotelTemplate";
import { TravelTemplate } from "@/app/components/email/TravelTemplate";
import { CarRentalTemplate } from "@/app/components/email/CarRentalTemplate";
import { RealEstateTemplate } from "@/app/components/email/RealEstateTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const subject = res.subject || "New Enquiry Received";
    const DynamicTemplate = (function () {
      switch (res.serviceType) {
        case ServiceTypeEnum.MEDICAL_TOURISM:
          return MedicalTourismEmailTemplate;
        case ServiceTypeEnum.JOB:
          return JobEmailTemplate;
        case ServiceTypeEnum.TICKET:
          return TicketTemplate;
        case ServiceTypeEnum.HOTEL:
          return HotelTemplate;
        case ServiceTypeEnum.TRAVEL:
          return TravelTemplate;
        case ServiceTypeEnum.CAR_RENTAL:
          return CarRentalTemplate;
        case ServiceTypeEnum.REAL_ESTATE:
          return RealEstateTemplate;
        default:
          return MedicalTourismEmailTemplate;
      }
    })();

    const { data, error } = await resend.emails.send({
      from: `${res.name} (via Mental Energy Group Website) <onboarding@resend.dev>`,
      to: ["info.wyma@gmail.com"],
      subject,
      react: DynamicTemplate({
        ...res,
        subject,
      }) as React.ReactElement,
      attachments: res.attachments || [],
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
