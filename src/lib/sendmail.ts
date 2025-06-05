"use server";

import nodemailer from "nodemailer";
import { Attachment } from "nodemailer/lib/mailer";
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function sendMail({
  email,
  subject,
  text,
  html,
  attachments,
}: {
  email: string;
  subject: string;
  text: string;
  html?: string;
  attachments?: Attachment[];
}) {
  try {
    const info = await transporter.sendMail({
      from: email,
      to: "mentalenergygroup@gmail.com",
      subject: subject,
      text: text,
      cc: ["mgroupnet@gmail.com", "mailbox.waiyanminaung@gmail.com"],
      html: html ? html : "",
      attachments: attachments || [],
    });
    console.info("Email sent:", info.response);
    return { data: info };
  } catch (error: unknown) {
    console.error("Email sending error:", error);
    return { error: "Failed to send email. Please try again later." };
  }
}
