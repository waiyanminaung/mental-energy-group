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
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico", type: "image/x-icon" },
    ],
    apple: [{ url: "/favicon/apple-icon.png", sizes: "180x180" }],
  },
  appleWebApp: {
    title: "Webo",
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "Mental Energy Group",
    description:
      "We provide medical tourism support, visa and passport assistance, work permits, and real estate services — making your travel and relocation simple and stress-free",
    url: "https://mentalenergygroup.com",
    siteName: "Mental Energy Group",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mental Energy Group",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
