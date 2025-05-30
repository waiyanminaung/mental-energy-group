import { BookingDto } from "@/app/(main)/services/medical-tourism/components/MedicalTourismFormModal";
import { BaseMailData } from "@/app/(main)/types";
import * as React from "react";
import { EmailTemplate, Row, Table } from "./EmailTemplate";

export const MedicalTourismEmailTemplate: React.FC<
  Readonly<BookingDto & BaseMailData>
> = ({ name, email, nationality, phone, preferredDate, message, subject }) => (
  <EmailTemplate subject={subject}>
    <Table>
      <Row label="Patient Name" value={name} />
      <Row label="Email" value={email} />
      <Row label="Nationality" value={nationality} />
      <Row label="Phone" value={phone} />
      <Row
        label="Date"
        value={new Date(preferredDate).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      />
      <Row label="message" value={message} />
    </Table>
  </EmailTemplate>
);
