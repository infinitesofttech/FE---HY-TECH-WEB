"use client";

import React from "react";
import { Header } from "@/components/Header";
import { SubpageHero } from "@/components/SubpageHero";
import { ComputerCourses } from "@/components/ComputerCourses";
import { Footer } from "@/components/Footer";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Header />
      <SubpageHero
        title="Computer Classes & Technical Training"
        subtitle="Practical, result-oriented computer education in Dharampur. Government recognized CCC, Tally Prime with GST, MS Office Masterclass, and English/Gujarati Typing."
        badge="Career Elevation"
        category="Computer Courses"
      />
      <ComputerCourses />
      <Footer />
    </main>
  );
}
