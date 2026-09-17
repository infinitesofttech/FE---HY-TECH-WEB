"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SERVICES_DATA, COMPUTER_COURSES_LIST } from "@/data/servicesData";
import { InquiryForm } from "@/components/InquiryForm";
import { Footer } from "@/components/Footer";
import {
  Globe,
  Monitor,
  GraduationCap,
  FileCheck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Award,
  Clock,
  MessageSquare
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleHeroSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Get top 6 popular services for homepage preview
  const popularServices = SERVICES_DATA.flatMap((cat) => cat.items).slice(0, 6);

  return (
    <main className="min-h-screen bg-slate-50 text-[#0F172A] selection:bg-[#FF5A00] selection:text-white">
      <Header />
      <HeroSection onSearch={handleHeroSearch} />

      {/* 1. Core Categories Overview Cards */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#FF5A00] uppercase tracking-wider bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200">
              Explore Our Hub
            </span>
            <h2 className="text-3xl font-black text-[#0F172A] mt-3">
              What We Offer at HY-TECH Dharampur
            </h2>
            <p className="text-slate-600 text-sm mt-2 font-medium">
              Click any category below to open its dedicated page with complete details.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "All Digital Services",
                desc: "Aadhaar update, PAN Card, Ayushman Bharat, Passport & PVC cards.",
                href: "/services",
                icon: Globe,
                badge: "30+ Services",
                color: "bg-blue-50 text-blue-600 border-blue-200"
              },
              {
                title: "Computer Classes",
                desc: "CCC, Tally Prime + GST, DTP Graphic Design, MS Office courses.",
                href: "/courses",
                icon: Monitor,
                badge: "Practical Training",
                color: "bg-orange-50 text-[#FF5A00] border-orange-200"
              },
              {
                title: "College Forms & Admission",
                desc: "Shree Vanraj College Dharampur, GCAS Portal & Scholarships.",
                href: "/college-forms",
                icon: GraduationCap,
                badge: "Dharampur College",
                color: "bg-emerald-50 text-emerald-600 border-emerald-200"
              },
              {
                title: "Document Helper",
                desc: "Check exact required documents before visiting our center.",
                href: "/doc-helper",
                icon: FileCheck,
                badge: "Quick Guidance",
                color: "bg-purple-50 text-purple-600 border-purple-200"
              }
            ].map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-white rounded-[32px] p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-2xl ${card.color} border`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-extrabold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full border border-slate-200">
                        {card.badge}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-[#0F172A]">{card.title}</h3>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-medium">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href={card.href}
                      className="w-full py-2.5 px-4 bg-slate-900 hover:bg-[#FF5A00] text-white font-extrabold rounded-full text-xs transition-all flex items-center justify-center gap-2 group shadow-sm"
                    >
                      <span>Open Page</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Popular Services Preview */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-extrabold text-[#FF5A00] uppercase tracking-wider bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200">
                Popular Services
              </span>
              <h2 className="text-3xl font-black text-[#0F172A] mt-3">
                Most Requested Online Services
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5A00] hover:bg-[#E04F00] text-white font-extrabold rounded-full text-xs shadow-md transition-all shrink-0"
            >
              <span>View All 30+ Services Directory →</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServices.map((service, idx) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -4 }}
                className="bg-white rounded-[32px] p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold bg-orange-50 text-[#FF5A00] px-3 py-1 rounded-full border border-orange-200">
                      {service.badgeEn || "Verified"}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-[#0F172A]">
                    {service.titleEn}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed font-medium">
                    {service.descriptionEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-[#FF5A00]">
                  <Link href="/services" className="hover:underline flex items-center gap-1">
                    <span>Read Documents Required</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Computer Courses Preview */}
      <section className="py-20 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-extrabold text-[#FF5A00] uppercase tracking-wider bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
                Computer Classes
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
                Level Up Your Career with Computer Courses
              </h2>
            </div>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5A00] hover:bg-[#E04F00] text-white font-extrabold rounded-full text-xs shadow-lg transition-all shrink-0"
            >
              <span>Explore All Computer Courses & Syllabus →</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPUTER_COURSES_LIST.map((course) => (
              <div
                key={course.id}
                className="bg-white/5 border border-white/10 rounded-[32px] p-6 flex flex-col justify-between hover:border-[#FF5A00]/60 transition-all"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-extrabold bg-[#FF5A00] text-white px-3 py-1 rounded-full inline-block">
                    {course.badgeGu}
                  </span>
                  <h3 className="text-lg font-black text-white">{course.title}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-extrabold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Duration: {course.duration}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium line-clamp-3">
                    {course.descriptionEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    href="/courses"
                    className="w-full py-2.5 bg-white/10 hover:bg-[#FF5A00] text-white font-extrabold rounded-full text-xs flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>View Full Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose HY-TECH Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-[#FF5A00] uppercase tracking-wider bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200">
              Why HY-TECH Dharampur
            </span>
            <h2 className="text-3xl font-black text-[#0F172A] mt-3">
              Trusted by 1,200+ Students & Citizens in Dharampur
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 bg-orange-100 text-[#FF5A00] rounded-2xl flex items-center justify-center mx-auto font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#0F172A]">100% Error-Free Processing</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                We carefully verify your document details before final submission to avoid rejection.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#0F172A]">Individual Computer Attention</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Dedicated computer system for every student with hands-on practical learning.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-200 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#0F172A]">Affordable & Fast Service</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Fair transparent pricing for government forms, PVC smart card prints, and computer courses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <InquiryForm />
      <Footer />
    </main>
  );
}

