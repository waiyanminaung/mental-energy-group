import { BaseMailData } from "@/app/(main)/types";
import * as React from "react";
import { EmailTemplate, Row, Table } from "./EmailTemplate";
import { RealEstateFormDto } from "@/app/(main)/services/real-estate/components/RealEstateFormModal";

export const RealEstateTemplate: React.FC<
  Readonly<RealEstateFormDto & BaseMailData>
> = ({
  name,
  email,
  nationality,
  phone,
  message,
  requestType,
  location,
  subject,
}) => (
  <EmailTemplate subject={subject}>
    <Table>
      <Row label="Name" value={name} />
      <Row label="Email" value={email} />
      <Row label="Nationality" value={nationality} />
      <Row label="I'm Looking To" value={requestType} />
      <Row label="Location" value={location} />
      <Row label="Phone" value={phone} />
      <Row label="Message" value={message} />
    </Table>
  </EmailTemplate>
);
