import { JobApplyDto } from "@/app/(main)/services/manpower/components/JobApplicationModal";
import { BaseMailData } from "@/app/(main)/types";
import * as React from "react";
import { EmailTemplate, Row, Table } from "./EmailTemplate";
import { isNil } from "lodash";

export const JobEmailTemplate: React.FC<
  Readonly<JobApplyDto & BaseMailData>
> = ({
  name,
  email,
  nationality,
  phone,
  date,
  subject,
  countries,
  other_country,
  position,
  other_position,
  salary,
}) => (
  <EmailTemplate subject={subject}>
    <Table>
      <Row
        label="Date"
        value={new Date(date).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      />
      <Row label="Name" value={name} />
      <Row label="Email" value={email} />
      <Row label="Phone" value={phone} />
      <Row label="Nationality" value={nationality} />
      <Row
        label="Preferred Countries"
        value={`${countries} ${!isNil(other_country) ? ":" + other_country : ""}`}
      />
      <Row
        label="Position"
        value={`${position} ${!isNil(other_position) ? ":" + other_position : ""}`}
      />
      <Row label="Expected Salary" value={salary} />
    </Table>
  </EmailTemplate>
);
