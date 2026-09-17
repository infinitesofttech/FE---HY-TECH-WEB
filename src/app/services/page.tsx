"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { SubpageHero } from "@/components/SubpageHero";
import { ServiceCatalog } from "@/components/ServiceCatalog";
import { Footer } from "@/components/Footer";

export default function ServicesPage() {
  const [searchQuery] = useState("");

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <SubpageHero
        title="Complete Directory of Services"
        subtitle="Explore all 30+ online government schemes, Aadhaar updates, digital certificates, college admission forms, and utility banking services in Dharampur."
        badge="Service Directory"
        category="All Services"
      />
      <ServiceCatalog searchQuery={searchQuery} />
      <Footer />
    </main>
  );
}
