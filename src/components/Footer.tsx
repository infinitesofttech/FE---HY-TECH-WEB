"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_INFO } from "@/data/servicesData";
import { MapPin, Phone, Mail, Instagram, ChevronRight } from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1E1B4B] text-slate-300 text-xs border-t border-indigo-900/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-indigo-900/60">
          
          {/* Brand info with logo image */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-xl bg-white shadow-sm border border-indigo-200">
                <img src="/logo.png" alt="HY-TECH Logo" className="h-10 w-auto object-contain" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">HY-TECH</span>
                <p className="text-[10px] text-amber-400 uppercase tracking-widest font-bold">Dharampur Hub</p>
              </div>
            </div>

            <p className="text-indigo-200/80 text-xs leading-relaxed">
              Dharampur&apos;s #1 digital service center and computer education hub. All online citizen services and professional computer courses under one roof.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-pink-400 hover:bg-pink-600 hover:text-white transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-indigo-300 hover:bg-[#4F46E5] hover:text-white transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { href: "#hero", labelGu: "Home", labelEn: "Home" },
                { href: "#services", labelGu: "All Services", labelEn: "All Services" },
                { href: "#courses", labelGu: "Computer Courses", labelEn: "Computer Courses" },
                { href: "#college", labelGu: "College Forms", labelEn: "College Forms" },
                { href: "#documents", labelGu: "Doc Requirements", labelEn: "Doc Requirements" },
                { href: "#contact", labelGu: "Contact Us", labelEn: "Contact Us" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-indigo-200 hover:text-amber-300 transition-colors flex items-center gap-1.5 font-medium">
                    <ChevronRight className="w-3 h-3 text-[#818CF8]" />
                    <span>{t(link.labelGu, link.labelEn)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Offered */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Popular Services
            </h4>
            <ul className="space-y-2">
              {[
                "Aadhaar Card Mobile Link & Update",
                "New PAN Card & Correction",
                "Ayushman Bharat Health Card",
                "GCAS Portal Admission & College Forms",
                "Government Job OJAS Recruitment",
                "CCC & Tally Prime Computer Courses",
              ].map((serv, idx) => (
                <li key={idx} className="flex items-center gap-1.5 text-indigo-200/90 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8]" />
                  <span>{serv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Contact Info
            </h4>
            <div className="space-y-2.5">
              <p className="flex items-start gap-2 text-indigo-200">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.addressEn}</span>
              </p>
              <p className="flex items-center gap-2 text-indigo-200">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-amber-300 font-mono font-bold">
                  {CONTACT_INFO.displayPhone}
                </a>
              </p>
              <p className="text-amber-400 font-extrabold">
                {CONTACT_INFO.contactPerson}
              </p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-indigo-300/70">
          <p>© {new Date().getFullYear()} HY-TECH Computer Education & Online Hub Dharampur. All Rights Reserved.</p>
          <p>All Online & Computer Services Under One Roof</p>
        </div>
      </div>
    </footer>
  );
};
