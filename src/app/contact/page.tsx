"use client";

import React from "react";
import { Header } from "@/components/Header";
import { SubpageHero } from "@/components/SubpageHero";
import { ContactSection } from "@/components/ContactSection";
import { InquiryForm } from "@/components/InquiryForm";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <SubpageHero
        title="Contact Us & Shop Location"
        subtitle="Visit HY-TECH Computer Education & Online Hub at Rajmilan Complex, Dharampur or send an instant WhatsApp inquiry directly to Yagnik Gayakwad."
        badge="Get in Touch"
        category="Contact Us"
      />
      <ContactSection />
      <InquiryForm />
      <Footer />
    </main>
  );
}
