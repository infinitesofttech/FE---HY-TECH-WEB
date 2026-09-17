"use client";

import React from "react";
import { Header } from "@/components/Header";
import { SubpageHero } from "@/components/SubpageHero";
import { CollegeServices } from "@/components/CollegeServices";
import { Footer } from "@/components/Footer";

export default function CollegeFormsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <SubpageHero
        title="Shree Vanraj College Dharampur Forms & GCAS Portal"
        subtitle="Complete online form assistance for Shree Vanraj Arts & Commerce College Dharampur, GCAS Portal Admissions, Hostel Forms, Digital Gujarat Scholarships, and VNSGU Exam Hall Tickets."
        badge="Education Portal"
        category="College Forms"
      />
      <CollegeServices />
      <Footer />
    </main>
  );
}
