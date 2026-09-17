"use client";

import React, { useState } from "react";
import Link from "next/link";
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
      
      {/* Featured Service Directory Section */}
      <section className="relative">
        <ServiceCatalog searchQuery={searchQuery} />
        <div className="bg-slate-100 py-6 text-center border-b border-slate-200">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-950 hover:bg-navy-900 text-white font-bold rounded-xl text-sm shadow-md transition-all hover:scale-105"
          >
            <span>View All 30+ Online Services Page →</span>
          </Link>
        </div>
      </section>

      {/* Featured Computer Courses Section */}
      <section className="relative">
        <ComputerCourses />
        <div className="bg-navy-950 py-6 text-center border-t border-navy-800">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl text-sm shadow-md transition-all hover:scale-105"
          >
            <span>Explore All Computer Courses & Syllabus →</span>
          </Link>
        </div>
      </section>

      {/* Featured College Forms Section */}
      <section className="relative">
        <CollegeServices />
        <div className="bg-amber-50 py-6 text-center border-b border-amber-200">
          <Link
            href="/college-forms"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-950 text-white font-bold rounded-xl text-sm shadow-md transition-all hover:scale-105"
          >
            <span>Visit Dedicated College Forms Portal →</span>
          </Link>
        </div>
      </section>

      <DocumentChecklist />
      <InquiryForm />
      <ContactSection />
      <Footer />
    </main>
  );
}
