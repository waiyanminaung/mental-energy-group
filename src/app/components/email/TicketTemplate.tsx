import { BaseMailData } from "@/app/(main)/types";
import * as React from "react";
import { EmailTemplate, Row, Table } from "./EmailTemplate";
import { TicketFormDto } from "@/app/(main)/services/travel-and-tour/components/TicketFormModal";

export const TicketTemplate: React.FC<
  Readonly<TicketFormDto & BaseMailData>
> = ({
  name,
  email,
  nationality,
  phone,
  date,
  number_of_ticket,
  message,
  subject,
}) => (
  <EmailTemplate subject={subject}>
    <Table>
      <Row label="Name" value={name} />
      <Row label="Email" value={email} />
      <Row label="Nationality" value={nationality} />
      <Row label="Phone" value={phone} />
      <Row
        label="Date"
        value={new Date(date).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      />
      <Row label="Number of ticket" value={number_of_ticket} />
      <Row label="Message" value={message} />
    </Table>
  </EmailTemplate>
);
