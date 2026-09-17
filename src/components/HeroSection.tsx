"use client";

import React, { useState } from "react";
import { CONTACT_INFO, STATS } from "@/data/servicesData";
import { Search, ShieldCheck, Zap, HeartHandshake, Smile, ChevronRight, GraduationCap, CheckCircle2, PhoneCall, Sparkles, Star, Users } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      const servicesElement = document.getElementById("services");
      if (servicesElement) {
        servicesElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const quickBadges = [
    { icon: Zap, text: "Fast Service", color: "text-orange-600 bg-orange-50 border-orange-200" },
    { icon: ShieldCheck, text: "100% Reliable", color: "text-blue-600 bg-blue-50 border-blue-200" },
    { icon: HeartHandshake, text: "Affordable Rates", color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { icon: Smile, text: "Customer First", color: "text-purple-600 bg-purple-50 border-purple-200" },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 text-[#0F172A] overflow-hidden border-b border-slate-200/80">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text & Search */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Tagline Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-[#FF5A00] text-xs font-extrabold shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-[#FF5A00] animate-pulse" />
              <span>Dharampur&apos;s #1 Digital Service & Computer Education Hub</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-[#0F172A]">
              <span className="block">HY-TECH</span>
              <span className="block text-[#FF5A00] mt-1">
                All Online Services & Computer Education Under One Roof
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Aadhaar updates, PAN card, Voter ID, Ayushman Bharat, Shree Vanraj College Dharampur forms, Job applications, and CCC/Tally Computer Courses.
            </p>

            {/* Floating Search Pill */}
            <form onSubmit={handleSearchSubmit} className="max-w-xl mx-auto lg:mx-0 relative">
              <div className="relative flex items-center bg-white rounded-full p-2 border border-slate-200 shadow-xl">
                <Search className="ml-4 w-5 h-5 text-[#FF5A00]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search any service or course (e.g. Aadhaar, PAN, CCC)..."
                  className="w-full pl-3 pr-28 py-3 bg-transparent text-[#0F172A] placeholder-slate-400 text-sm font-medium focus:outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-6 py-3 bg-[#FF5A00] hover:bg-[#E04F00] text-white font-extrabold rounded-full text-xs flex items-center gap-1.5 transition-all shadow-md shrink-0"
                >
                  <span>Search</span>
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </form>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="/services"
                className="px-8 py-4 bg-[#FF5A00] hover:bg-[#E04F00] text-white font-extrabold rounded-full shadow-lg text-sm flex items-center gap-2 transition-all shadow-[#FF5A00]/25"
              >
                <span>Explore All Services</span>
                <ChevronRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                className="px-7 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-[#0F172A] font-bold rounded-full text-sm flex items-center gap-2 transition-all shadow-sm"
              >
                <PhoneCall className="w-4 h-4 text-[#FF5A00]" />
                <span>Call Now: {CONTACT_INFO.displayPhone}</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Visual Card with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Floating Rating Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 z-20 bg-white text-[#0F172A] px-4 py-2.5 rounded-full shadow-xl border border-slate-200 flex items-center gap-2.5"
            >
              <div className="p-1.5 rounded-full bg-amber-100 text-amber-600">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <p className="text-xs font-extrabold leading-none">4.9 / 5.0 Rating</p>
                <p className="text-[10px] text-slate-500 mt-0.5">120+ Verified Reviews</p>
              </div>
            </motion.div>

            {/* Floating Student Count Badge */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 z-20 bg-[#0F172A] text-white px-5 py-3 rounded-full shadow-xl border border-slate-800 flex items-center gap-3"
            >
              <div className="p-2 rounded-full bg-[#FF5A00] text-white">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-extrabold leading-none">1,200+ Students</p>
                <p className="text-[10px] text-slate-300 mt-0.5">Trained in Dharampur</p>
              </div>
            </motion.div>

            {/* Main Visual Showcase Card */}
            <div className="relative rounded-[32px] bg-white border border-slate-200 p-7 md:p-9 shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-black text-[#0F172A] flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-[#FF5A00]" />
                    <span>HY-TECH COMPUTER HUB</span>
                  </h3>
                  <p className="text-xs text-[#FF5A00] font-extrabold mt-0.5">
                    Dharampur Digital & Education Hub
                  </p>
                </div>
                <span className="px-3.5 py-1 bg-emerald-100 border border-emerald-300 text-emerald-800 text-[11px] font-extrabold rounded-full animate-pulse">
                  OPEN NOW
                </span>
              </div>

              {/* Service Highlights Checklist */}
              <div className="space-y-3">
                {[
                  "Aadhaar Card & Biometric Guidance",
                  "Shree Vanraj College Dharampur Forms",
                  "GCAS Portal & Scholarship Applications",
                  "Government Jobs & OJAS Recruitment",
                  "CCC & Tally Prime Computer Classes",
                  "Passport Photos & PVC Smart Card Print",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#FF5A00]/40 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#FF5A00] shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-[#0F172A]">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <p className="font-extrabold text-[#0F172A]">{CONTACT_INFO.contactPerson}</p>
                  <p className="text-slate-500">Proprietor</p>
                </div>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                  className="font-mono text-base font-black text-[#FF5A00] hover:underline"
                >
                  {CONTACT_INFO.displayPhone}
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Four Trust Badges */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {quickBadges.map((badge, idx) => {
            const IconComp = badge.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx + 0.3 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="flex items-center gap-3.5 p-4 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`p-3 rounded-2xl ${badge.color} border shrink-0`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-[#0F172A]">
                    {badge.text}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">HY-TECH Guarantee</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Counter Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#FF5A00]">
                {stat.value}
              </div>
              <div className="text-xs font-extrabold text-[#0F172A] uppercase tracking-wider">
                {stat.labelEn}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


