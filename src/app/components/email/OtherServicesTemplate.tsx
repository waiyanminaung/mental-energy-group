import { BaseMailData } from "@/app/(main)/types";
import * as React from "react";
import { EmailTemplate, Row, Table } from "./EmailTemplate";
import { OtherServicesFormDto } from "@/app/(main)/services/other/components/OtherServicesFormModal";

export const OtherServicesTemplate: React.FC<
  Readonly<OtherServicesFormDto & BaseMailData>
> = ({ name, email, nationality, phone, message, subject }) => (
  <EmailTemplate subject={subject}>
    <Table>
      <Row label="Name" value={name} />
      <Row label="Email" value={email} />
      <Row label="Nationality" value={nationality} />
      <Row label="Phone" value={phone} />
      <Row label="Message" value={message} />
    </Table>
  </EmailTemplate>
);
