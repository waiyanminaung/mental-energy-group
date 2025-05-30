import { BaseMailData } from "@/app/(main)/types";
import * as React from "react";
import { EmailTemplate, Row, Table } from "./EmailTemplate";
import { TravelFormDto } from "@/app/(main)/services/travel-and-tour/components/TravelFormModal";

export const TravelTemplate: React.FC<
  Readonly<TravelFormDto & BaseMailData>
> = ({ from, to, name, email, nationality, phone, date, message, subject }) => (
  <EmailTemplate subject={subject}>
    <Table>
      <Row label="From" value={from} />
      <Row label="To" value={to} />
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
      <Row label="Message" value={message} />
    </Table>
  </EmailTemplate>
);
