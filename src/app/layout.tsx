import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import "swiper/css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mental Energy Group",
  description:
    "We provide medical tourism support, visa and passport assistance, work permits, and real estate services — making your travel and relocation simple and stress-free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/pylon-icons.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/fontawesome-all.min.css" />
      </head>
      <body
        className={`${rajdhani.variable} ${inter.variable} antialiased overflow-x-hidden`}
      >
        {children}
        <Toaster />
        <div id="mount-container" />
      </body>
    </html>
  );
}
