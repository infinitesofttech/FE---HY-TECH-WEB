"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_INFO } from "@/data/servicesData";
import { Phone, MapPin, Menu, X, MessageSquare, Clock } from "lucide-react";

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", labelGu: "Home", labelEn: "Home" },
    { href: "#services", labelGu: "All Services", labelEn: "All Services" },
    { href: "#courses", labelGu: "Computer Courses", labelEn: "Computer Courses" },
    { href: "#college", labelGu: "College Forms", labelEn: "College Forms" },
    { href: "#documents", labelGu: "Doc Helper", labelEn: "Doc Helper" },
    { href: "#contact", labelGu: "Contact Us", labelEn: "Contact Us" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-navy-950 text-slate-200 py-1.5 px-4 text-xs font-medium border-b border-navy-800/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-amber-400">
              <MapPin className="w-3.5 h-3.5 text-brand-500" />
              <span>{t(CONTACT_INFO.addressGu, CONTACT_INFO.addressEn)}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{t(CONTACT_INFO.workingHoursGu, CONTACT_INFO.workingHoursEn)}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-brand-400 transition-colors font-semibold text-white"
            >
              <Phone className="w-3.5 h-3.5 text-brand-500" />
              <span>{CONTACT_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-slate-200/80"
            : "bg-white/90 backdrop-blur-sm py-2.5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Official Logo Image from User */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative p-1 rounded-xl bg-white shadow-sm border border-slate-100 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/logo.png"
                alt="HY-TECH Computer Education & Online Hub"
                className="h-12 w-auto object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-navy-950">
                  HY-TECH
                </span>
                <span className="text-[10px] bg-brand-100 text-brand-800 font-extrabold px-1.5 py-0.5 rounded border border-brand-200">
                  Dharampur
                </span>
              </div>
              <p className="text-[10px] font-extrabold text-brand-600 tracking-wide uppercase leading-none mt-0.5">
                Computer Education & Online Hub
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-brand-600 font-semibold text-sm transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-500 hover:after:w-full after:transition-all"
              >
                {t(link.labelGu, link.labelEn)}
              </a>
            ))}
          </div>

          {/* Quick CTA Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Hello HY-TECH, I would like to inquire about your services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-slate-100">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-600 border border-slate-100 transition-colors"
                >
                  {t(link.labelGu, link.labelEn)}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Hello HY-TECH, I would like to inquire about your services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-2.5 rounded-xl shadow text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 bg-navy-900 text-white font-bold py-2.5 rounded-xl text-sm"
              >
                <Phone className="w-4 h-4 text-brand-500" />
                <span>Call Us: {CONTACT_INFO.displayPhone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
