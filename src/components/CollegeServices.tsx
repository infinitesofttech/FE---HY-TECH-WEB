"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_INFO } from "@/data/servicesData";
import { School, Award, Laptop, GraduationCap, FileCheck, MessageSquare } from "lucide-react";

export const CollegeServices: React.FC = () => {
  const { t } = useLanguage();

  const collegeFeatures = [
    {
      icon: School,
      titleGu: "Shree Vanraj College Dharampur Special",
      titleEn: "Shree Vanraj College Dharampur Forms",
      descGu: "All admission, hostel, and examination online forms for Shree Vanraj Arts & Commerce College Dharampur.",
      descEn: "All online forms for Shree Vanraj Arts & Commerce College Dharampur."
    },
    {
      icon: Laptop,
      titleGu: "GCAS Portal Registration",
      titleEn: "GCAS Portal Registration",
      descGu: "Gujarat Common Admission Services (GCAS) portal online registration for BA, BCom, BSc, and PG courses.",
      descEn: "Gujarat Common Admission Services (GCAS) online registration for all courses."
    },
    {
      icon: Award,
      titleGu: "Digital Gujarat Scholarship Forms",
      titleEn: "Digital Gujarat Scholarship Forms",
      descGu: "ST / SC / OBC / EWS and Kanya Kelavani scholarship online application with document verification.",
      descEn: "Digital Gujarat scholarship application form filling with document verification."
    },
    {
      icon: FileCheck,
      titleGu: "University Exam Forms & Hall Tickets",
      titleEn: "University Exam Forms & Hall Tickets",
      descGu: "VNSGU university exam form submission, re-checking forms, and hall tickets download.",
      descEn: "VNSGU university exam form submission, re-checking forms, and hall tickets."
    }
  ];

  return (
    <section id="college" className="py-20 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-slate-100 border-y border-amber-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Special Banner matching Image 2 Education Box */}
        <div className="bg-navy-950 rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden mb-12 border border-navy-800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs font-bold">
              <GraduationCap className="w-4 h-4" />
              <span>Special College Student Services</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              “<span className="text-amber-400">Shree Vanraj Arts & Commerce College Dharampur</span>” All Online Forms Filled Here.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Complete online form filling assistance for students of Shree Vanraj Arts & Commerce College Dharampur and surrounding areas for GCAS Admissions, Hostel Entry, Scholarships, and Exam Forms.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collegeFeatures.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-500 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-navy-950 mb-2">
                  {t(item.titleGu, item.titleEn)}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t(item.descGu, item.descEn)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quick WhatsApp Inquiry Bar */}
        <div className="mt-10 text-center">
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Hello, I would like to inquire about Shree Vanraj College Dharampur form filling.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl shadow-md text-sm transition-all hover:scale-105"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Inquire for College Forms on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
