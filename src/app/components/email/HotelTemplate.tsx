import { BaseMailData } from "@/app/(main)/types";
import * as React from "react";
import { EmailTemplate, Row, Table } from "./EmailTemplate";
import { HotelFormDto } from "@/app/(main)/services/travel-and-tour/components/HotelFormModal";

export const HotelTemplate: React.FC<Readonly<HotelFormDto & BaseMailData>> = ({
  name,
  email,
  nationality,
  phone,
  date,
  number_of_people,
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
      <Row label="Number of people" value={number_of_people} />
      <Row label="Message" value={message} />
    </Table>
  </EmailTemplate>
);
