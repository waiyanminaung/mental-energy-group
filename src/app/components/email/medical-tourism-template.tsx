import { BookingDto } from "@/app/services/medical-tourism/components/BookingForm";
import { BaseMailData } from "@/app/types";
import * as React from "react";

export const MedicalTourismEmailTemplate: React.FC<
  Readonly<BookingDto & BaseMailData>
> = ({ name, email, nationality, phone, preferredDate, message, subject }) => (
  <div
    style={{
      fontFamily: "system-ui, sans-serif, Arial",
      fontSize: "14px",
      color: "#333",
      padding: "14px 8px",
      backgroundColor: "#f5f5f5",
    }}
  >
    <div style={{ maxWidth: "600px", margin: "auto", backgroundColor: "#fff" }}>
      <div style={{ borderTop: "6px solid #458500", padding: "16px" }}>
        <span style={{ fontSize: "16px", verticalAlign: "middle" }}>
          <strong>{subject}</strong>
        </span>
      </div>

      <div style={{ padding: "16px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tr>
            <td
              style={{
                padding: "8px 0",
                borderBottom: "1px solid #eee",
                width: "140px",
              }}
            >
              <strong>Patient Name:</strong>
            </td>
            <td style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>
              {name}
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>
              <strong>Email:</strong>
            </td>
            <td style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>
              {email}
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>
              <strong>Nationality:</strong>
            </td>
            <td style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>
              {nationality}
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>
              <strong>Phone:</strong>
            </td>
            <td style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>
              {phone}
            </td>
          </tr>
          <tr>
            <td style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>
              <strong>Preferred Date:</strong>
            </td>
            <td style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>
              {new Date(preferredDate).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </td>
          </tr>
          {message && (
            <tr>
              <td style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>
                <strong>Message:</strong>
              </td>
              <td
                style={{
                  padding: "8px 0",
                  borderBottom: "1px solid #eee",
                  whiteSpace: "pre-wrap",
                }}
              >
                {message}
              </td>
            </tr>
          )}
        </table>
      </div>
    </div>
  </div>
);
