"use client";

import React from "react";
import { Header } from "@/components/Header";
import { SubpageHero } from "@/components/SubpageHero";
import { DocumentChecklist } from "@/components/DocumentChecklist";
import { Footer } from "@/components/Footer";

export default function DocHelperPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <SubpageHero
        title="Citizen Document Requirement Checklist"
        subtitle="Check exact original and photocopy documents to bring to HY-TECH Dharampur before visiting. Avoid repeat trips by verifying your document list in advance."
        badge="Citizen Guidance"
        category="Doc Helper"
      />
      <DocumentChecklist />
      <Footer />
    </main>
  );
}
