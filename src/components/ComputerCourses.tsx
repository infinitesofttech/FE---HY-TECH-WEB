"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPUTER_COURSES_LIST, CourseItem, CONTACT_INFO } from "@/data/servicesData";
import { Monitor, Clock, CheckCircle2, Sparkles, MessageSquare, ChevronRight } from "lucide-react";

export const ComputerCourses: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);

  return (
    <section id="courses" className="py-20 bg-navy-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Title Box */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/20 border border-brand-500/40 text-brand-400 text-xs font-bold uppercase tracking-wider">
            <Monitor className="w-4 h-4" />
            <span>Computer Classes Dharampur</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="block text-gradient-orange">
              Computer Classes
            </span>
            <span className="text-xl sm:text-2xl text-slate-300 font-medium mt-2 block">
              Result Oriented & Practical Learning Methodology
            </span>
          </h2>

          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            You&apos;ll learn quality skills and knowledge that will level up your career.
          </p>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPUTER_COURSES_LIST.map((course) => (
            <div
              key={course.id}
              className="bg-navy-900/90 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between hover:border-brand-500 transition-all duration-300 hover:-translate-y-1 shadow-xl group relative overflow-hidden"
            >
              {/* Badge if exists */}
              {course.badgeGu && (
                <span className="absolute top-4 right-4 text-[10px] font-extrabold bg-brand-500 text-white px-2.5 py-1 rounded-full shadow-glow-orange">
                  {t(course.badgeGu, course.badgeGu)}
                </span>
              )}

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/20 border border-brand-500/40 text-brand-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Monitor className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-white group-hover:text-brand-400 transition-colors">
                    {t(course.titleGu, course.title)}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold mt-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {t(course.descriptionGu, course.descriptionEn)}
                </p>

                {/* Top Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  {(t(course.highlightsGu.join("###"), course.highlightsEn.join("###")).split("###")).slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="w-full py-2.5 bg-brand-500/10 hover:bg-brand-500 text-brand-400 hover:text-white border border-brand-500/30 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Course Details & Admission</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-600 to-amber-600 rounded-3xl p-8 shadow-2xl text-white flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl font-extrabold flex items-center justify-center lg:justify-start gap-2">
              <Sparkles className="w-6 h-6 text-amber-200" />
              <span>Contact Today & Confirm Your Admission!</span>
            </h3>
            <p className="text-brand-100 text-sm">
              Learn practical computer skills with personal attention and level up your career.
            </p>
          </div>

          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Hello, I would like to inquire about computer classes admission.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-white text-navy-950 font-extrabold rounded-2xl hover:bg-slate-100 shadow-xl transition-all duration-300 hover:scale-105 shrink-0 flex items-center gap-2 text-sm"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Inquire for Admission</span>
          </a>
        </div>

      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
          <div className="bg-navy-900 border border-slate-700 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl text-white relative">
            <h3 className="text-xl font-extrabold text-gradient-orange mb-2">
              {t(selectedCourse.titleGu, selectedCourse.title)}
            </h3>
            <p className="text-xs text-amber-400 font-semibold mb-4">
              Duration: {selectedCourse.duration}
            </p>

            <div className="space-y-3 bg-slate-800/80 p-4 rounded-2xl border border-slate-700 text-xs">
              <h4 className="font-bold text-slate-200 uppercase tracking-wider">
                Course Syllabus Highlights:
              </h4>
              <ul className="space-y-2">
                {(t(selectedCourse.highlightsGu.join("###"), selectedCourse.highlightsEn.join("###")).split("###")).map((hl, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello, I want to enroll in ${selectedCourse.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-brand-500 hover:bg-brand-600 font-bold rounded-xl text-center text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book Admission</span>
              </a>
              <button
                onClick={() => setSelectedCourse(null)}
                className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
