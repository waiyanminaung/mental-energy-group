import { BaseMailData } from "@/app/(main)/types";
import * as React from "react";
import { EmailTemplate, Row, Table } from "./EmailTemplate";
import { CarRentalFormDto } from "@/app/(main)/services/travel-and-tour/components/CarRentalFormModal";

export const CarRentalTemplate: React.FC<
  Readonly<CarRentalFormDto & BaseMailData>
> = ({
  name,
  email,
  nationality,
  phone,
  driverType,
  model,
  date,
  message,
  subject,
}) => (
  <EmailTemplate subject={subject}>
    <Table>
      <Row label="Name" value={name} />
      <Row label="Email" value={email} />
      <Row label="Nationality" value={nationality} />
      <Row label="Phone" value={phone} />
      <Row label="Driver Type" value={driverType} />
      <Row label="Car Model" value={model} />
      <Row
        label="Date"
        value={new Date(date).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      />
      <Row label="Message" value={message} />
    </Table>
  </EmailTemplate>
);
