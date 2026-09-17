import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://fe-hy-tech-web.vercel.app/"),
  title: {
    default: "HY-TECH Computer Education & Online Hub | Dharampur",
    template: "%s | HY-TECH Dharampur",
  },
  description: "Dharampur's #1 digital online citizen service center & computer education hub. Aadhaar card mobile link/update, PAN card, Ayushman Bharat health card, Shree Vanraj Arts & Commerce College forms, CCC, and Tally Prime computer courses.",
  keywords: [
    "HY-TECH",
    "HY TECH Dharampur",
    "Computer Education Dharampur",
    "Online Services Dharampur",
    "Aadhaar Update Dharampur",
    "PAN Card Dharampur",
    "Shree Vanraj College Dharampur Forms",
    "GCAS Portal Admission",
    "CCC Computer Course Dharampur",
    "Tally Prime GST Course",
    "Yagnik Gayakwad",
    "Rajmilan Complex Dharampur"
  ],
  authors: [{ name: "Yagnik Gayakwad" }],
  creator: "HY-TECH Dharampur",
  publisher: "HY-TECH Computer Education & Online Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HY-TECH Computer Education & Online Hub | Dharampur",
    description: "All online government services and computer education courses under one roof in Dharampur, Gujarat. Contact: +91 72260 30701.",
    url: "https://fe-hy-tech-web.vercel.app/",
    siteName: "HY-TECH Computer Education & Online Hub",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "HY-TECH Computer Education & Online Hub Dharampur Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HY-TECH Computer Education & Online Hub | Dharampur",
    description: "Dharampur's #1 digital online service center & computer classes hub.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <JsonLd />
      </head>
      <body>
        <LanguageProvider>
          {children}
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
