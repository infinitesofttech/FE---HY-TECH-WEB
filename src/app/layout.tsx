import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "HY-TECH Computer Education & Online Hub | Dharampur",
  description: "All online government services and computer education hub in Dharampur. Aadhaar Card, PAN Card, Ayushman Bharat, Shree Vanraj College Dharampur Forms, CCC & Tally Prime Courses.",
  keywords: ["HY-TECH", "Dharampur", "Computer Classes", "Online Services", "Aadhaar Card", "PAN Card", "Vanraj College Dharampur", "CCC Course", "Tally Prime", "Yagnik Gayakwad"],
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
