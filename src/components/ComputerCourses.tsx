"use client";

import React, { useState } from "react";
import { COMPUTER_COURSES_LIST, CourseItem, CONTACT_INFO } from "@/data/servicesData";
import { Monitor, Clock, CheckCircle2, Sparkles, MessageSquare, ChevronRight, Star, BookOpen, User } from "lucide-react";
import { motion } from "framer-motion";

export const ComputerCourses: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);

  return (
    <section id="courses" className="py-20 bg-[#0B132B] text-white relative overflow-hidden">
      {/* Veeba Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5A00]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0E6]/10 border border-[#FF5A00]/30 text-[#FF5A00] text-xs font-extrabold uppercase tracking-wider">
            <Monitor className="w-4 h-4 text-[#FF5A00]" />
            <span>Computer Classes Dharampur</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            <span className="block text-[#FF5A00]">
              Featured Computer Courses
            </span>
            <span className="text-lg sm:text-xl text-slate-300 font-semibold mt-2 block">
              Result-Oriented & Practical Learning Methodology in Dharampur
            </span>
          </h2>

          <p className="text-slate-400 text-sm max-w-xl mx-auto font-medium">
            You&apos;ll learn quality skills and practical knowledge that will level up your career.
          </p>
        </div>

        {/* Veeba 32px Course Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPUTER_COURSES_LIST.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-white/10 rounded-[32px] p-6 flex flex-col justify-between hover:border-[#FF5A00]/70 transition-all duration-300 shadow-2xl group relative overflow-hidden"
            >
              {/* Badge Pill */}
              {course.badgeGu && (
                <span className="absolute top-5 right-5 text-[10px] font-extrabold bg-[#FF5A00] text-white px-3 py-1 rounded-full shadow-md">
                  {course.badgeGu}
                </span>
              )}

              <div className="space-y-4">
                {/* Icon Container */}
                <div className="w-13 h-13 rounded-2xl bg-[#FFF0E6]/10 border border-[#FF5A00]/30 text-[#FF5A00] flex items-center justify-center group-hover:bg-[#FF5A00] group-hover:text-white transition-all">
                  <Monitor className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-black text-white group-hover:text-[#FF5A00] transition-colors">
                    {course.title}
                  </h3>

                  {/* Rating & Duration */}
                  <div className="flex items-center justify-between gap-2 mt-2 pt-1">
                    <div className="flex items-center gap-1 text-xs text-amber-400 font-extrabold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>4.9</span>
                      <span className="text-[10px] text-slate-400 font-normal">(120+)</span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] bg-white/10 px-3 py-0.5 rounded-full text-amber-300 font-extrabold border border-white/10">
                      <Clock className="w-3 h-3" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {course.descriptionEn}
                </p>

                {/* Instructor */}
                <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-white/5 border border-white/10 text-[11px] text-slate-300">
                  <User className="w-3.5 h-3.5 text-[#FF5A00] shrink-0" />
                  <span>Instructor: <strong className="text-white">Yagnik Gayakwad</strong></span>
                </div>

                {/* Syllabus Checklist */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  {course.highlightsEn.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A00] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="w-full py-3 bg-[#FF5A00]/20 hover:bg-[#FF5A00] text-[#FF5A00] hover:text-white border border-[#FF5A00]/40 rounded-full text-xs font-extrabold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Course Details & Syllabus</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Veeba Call to Action Banner (32px curves) */}
        <div className="mt-16 bg-[#FF5A00] rounded-[32px] p-8 shadow-2xl text-white flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl font-black flex items-center justify-center lg:justify-start gap-2">
              <Sparkles className="w-6 h-6 text-amber-200" />
              <span>Contact Today & Confirm Your Admission!</span>
            </h3>
            <p className="text-amber-100 text-sm font-medium">
              Learn practical computer skills with individual attention and level up your career.
            </p>
          </div>

          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Hello, I would like to inquire about computer classes admission.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-[#0B132B] font-extrabold rounded-full hover:bg-[#FFF0E6] shadow-xl transition-all duration-300 hover:scale-105 shrink-0 flex items-center gap-2 text-xs uppercase tracking-wider"
          >
            <MessageSquare className="w-4 h-4 text-[#FF5A00]" />
            <span>Inquire for Admission</span>
          </a>
        </div>

      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B132B]/85 backdrop-blur-md">
          <div className="bg-[#0B132B] border border-white/15 rounded-[32px] max-w-lg w-full p-6 sm:p-8 shadow-2xl text-white relative">
            <h3 className="text-xl font-black text-[#FF5A00] mb-1">
              {selectedCourse.title}
            </h3>
            <p className="text-xs text-amber-400 font-extrabold mb-4 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Duration: {selectedCourse.duration}</span>
            </p>

            <div className="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/10 text-xs mb-6">
              <h4 className="font-extrabold text-white uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#FF5A00]" />
                <span>Complete Course Syllabus:</span>
              </h4>
              <ul className="space-y-2">
                {selectedCourse.highlightsEn.map((hl, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5A00] shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello, I want to enroll in ${selectedCourse.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 bg-[#FF5A00] hover:bg-[#E04F00] font-extrabold rounded-full text-center text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book Admission via WhatsApp</span>
              </a>
              <button
                onClick={() => setSelectedCourse(null)}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-slate-300 font-extrabold rounded-full text-xs"
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

