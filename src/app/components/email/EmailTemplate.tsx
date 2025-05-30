import * as React from "react";

interface EmailTemplateProps {
  subject: string;
  children: React.ReactNode;
  accentColor?: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  subject,
  children,
  accentColor = "#458500",
}) => (
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
      <div style={{ borderTop: `6px solid ${accentColor}`, padding: "16px" }}>
        <span style={{ fontSize: "16px", verticalAlign: "middle" }}>
          <strong>{subject}</strong>
        </span>
      </div>

      <div style={{ padding: "16px" }}>{children}</div>
    </div>
  </div>
);

export const Row: React.FC<{
  label: string;
  value: React.ReactNode;
}> = ({ label, value }) => (
  <tr>
    <td style={{ padding: "8px 8px 8px 0px", borderBottom: "1px solid #eee" }}>
      <strong>{label}:</strong>
    </td>
    <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>{value}</td>
  </tr>
);

export const Table: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <table style={{ width: "100%", borderCollapse: "collapse" }}>
    {children}
  </table>
);
