"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_INFO, STATS } from "@/data/servicesData";
import { Search, ShieldCheck, Zap, HeartHandshake, Smile, ChevronRight, GraduationCap, CheckCircle2, PhoneCall, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  const { t } = useLanguage();
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
    { icon: Zap, textGu: "ઝડપી સેવા", textEn: "Fast Service", color: "text-amber-500 bg-amber-50 border-amber-200" },
    { icon: ShieldCheck, textGu: "વિશ્વસનીય સેવા", textEn: "100% Reliable", color: "text-blue-600 bg-blue-50 border-blue-200" },
    { icon: HeartHandshake, textGu: "ઉચિત દરે સેવા", textEn: "Affordable Rates", color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { icon: Smile, textGu: "ગ્રાહક સંતોષ પ્રાથમિકતા", textEn: "Customer Satisfaction First", color: "text-purple-600 bg-purple-50 border-purple-200" },
  ];

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-navy-950 via-navy-900 to-slate-900 text-white overflow-hidden">
      {/* Dynamic Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text & Search */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 border border-brand-500/40 text-brand-300 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>{t("ધરમપુરનું નંબર-૧ ડિજિટલ સેવા & કમ્પ્યુટર કેન્દ્ર", "Dharampur's #1 Digital Service & Computer Center")}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="block text-white">HY-TECH</span>
              <span className="block text-gradient-orange mt-1">
                {t("તમામ ઓનલાઈન અને કમ્પ્યુટર સેવાઓ એક જ સ્થળે", "All Online & Computer Services Under One Roof")}
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {t(
                "આધાર અપડેટ, પાન કાર્ડ, ચૂંટણી કાર્ડ, આયુષ્માન ભારત, શ્રી વનરાજ કોલેજ એડમિશન ફોર્મ્સ, નોકરી ફોર્મ્સ તથા સીસીસી અને ટેલી કમ્પ્યુટર ક્લાસીસ.",
                "Aadhaar updates, PAN card, Voter ID, Ayushman Bharat, Vanraj College Dharampur forms, Job applications, and CCC/Tally Computer Courses."
              )}
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit} className="max-w-xl mx-auto lg:mx-0 relative">
              <div className="relative flex items-center shadow-glow-navy">
                <Search className="absolute left-4 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("કોઈપણ સેવા અથવા કમ્પ્યુટર કોર્સ શોધો (દા.ત. આધાર, પાન, CCC)...", "Search any service or computer course (e.g. Aadhaar, PAN, CCC)...")}
                  className="w-full pl-12 pr-28 py-3.5 bg-slate-900/90 border border-slate-700/80 rounded-2xl text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all shadow-inner"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl text-xs flex items-center gap-1 transition-all shadow-md hover:scale-105"
                >
                  <span>{t("શોધો", "Search")}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#services"
                className="px-6 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl shadow-glow-orange text-sm flex items-center gap-2 transition-all hover:-translate-y-0.5"
              >
                <span>{t("તમામ સેવાઓ જુઓ", "Explore All Services")}</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl text-sm flex items-center gap-2 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>{t("અત્યારે જ કૉલ કરો", "Call Now: " + CONTACT_INFO.displayPhone)}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card matching Banner Image 2 */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-gradient-to-b from-navy-800/90 to-navy-900/90 border border-slate-700/60 p-6 md:p-8 shadow-2xl backdrop-blur-xl">
              
              {/* Header inside visual card */}
              <div className="flex items-center justify-between border-b border-slate-700/60 pb-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-brand-500" />
                    <span>HY-TECH COMPUTER HUB</span>
                  </h3>
                  <p className="text-xs text-amber-400 font-medium">
                    {t("ધરમપુર ઓનલાઈન કમ્પ્યુટર સેવા કેન્દ્ર", "Dharampur Digital & Education Hub")}
                  </p>
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold rounded-full animate-pulse">
                  OPEN NOW
                </span>
              </div>

              {/* Service Highlights Checklist */}
              <div className="space-y-3">
                {[
                  { titleGu: "આધાર કાર્ડ & બાયોમેટ્રિક અપડેટ ગાઈડન્સ", titleEn: "Aadhaar Card & Biometric Guidance" },
                  { titleGu: "શ્રી વનરાજ આર્ટ્સ અને કોમર્સ કોલેજ ફોર્મ્સ", titleEn: "Shree Vanraj College Dharampur Forms" },
                  { titleGu: "GCAS રજિસ્ટ્રેશન & સ્કોલરશીપ ફોર્મ્સ", titleEn: "GCAS Portal & Scholarship Applications" },
                  { titleGu: "સરકારી નોકરી અને ઓજાસ (OJAS) ભરતીઓ", titleEn: "Government Jobs & OJAS Recruitment" },
                  { titleGu: "CCC & Tally Prime કમ્પ્યુટર ક્લાસીસ", titleEn: "CCC & Tally Prime Computer Classes" },
                  { titleGu: "પાસપોર્ટ ફોટો અને પીવીસી સ્માર્ટ કાર્ડ", titleEn: "Passport Photos & PVC Smart Card Print" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/40 hover:border-brand-500/50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                    <span className="text-sm font-medium text-slate-200">
                      {t(item.titleGu, item.titleEn)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Contact Pill at bottom of card */}
              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
                <div>
                  <p className="font-semibold text-white">{CONTACT_INFO.contactPerson}</p>
                  <p className="text-slate-400">{t("સંચાલક / ઓનર", "Proprietor")}</p>
                </div>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                  className="font-mono text-base font-extrabold text-amber-400 hover:underline"
                >
                  {CONTACT_INFO.displayPhone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Four Trust Badges matching Image 2 Footer */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {quickBadges.map((badge, idx) => {
            const IconComp = badge.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md hover:border-brand-500/40 transition-all hover:scale-[1.02]"
              >
                <div className={`p-2.5 rounded-xl ${badge.color} border shrink-0`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    {t(badge.textGu, badge.textEn)}
                  </h4>
                  <p className="text-[11px] text-slate-400">HY-TECH {t("ગેરંટી", "Guarantee")}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Counter Bar */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-800/80 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-gradient-orange">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-slate-400">
                {t(stat.labelGu, stat.labelEn)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
