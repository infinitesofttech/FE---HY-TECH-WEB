"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCatalog } from "@/components/ServiceCatalog";
import { ComputerCourses } from "@/components/ComputerCourses";
import { CollegeServices } from "@/components/CollegeServices";
import { DocumentChecklist } from "@/components/DocumentChecklist";
import { InquiryForm } from "@/components/InquiryForm";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleHeroSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-brand-500 selection:text-white">
      <Header />
      <HeroSection onSearch={handleHeroSearch} />
      <ServiceCatalog searchQuery={searchQuery} />
      <ComputerCourses />
      <CollegeServices />
      <DocumentChecklist />
      <InquiryForm />
      <ContactSection />
      <Footer />
    </main>
  );
}
