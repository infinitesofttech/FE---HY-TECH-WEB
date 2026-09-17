"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT_INFO } from "@/data/servicesData";
import { Phone, MapPin, Menu, X, MessageSquare, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header: React.FC = () => {
  const pathname = usePathname();
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
    { href: "/", label: "Home" },
    { href: "/services", label: "All Services" },
    { href: "/courses", label: "Computer Courses" },
    { href: "/college-forms", label: "College Forms" },
    { href: "/doc-helper", label: "Doc Helper" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
    >
      {/* Top Announcement Bar (Deep Dark Navy Indigo #1E1B4B) */}
      <div className="bg-[#1E1B4B] text-slate-200 py-1.5 px-4 text-xs font-medium pointer-events-auto border-b border-indigo-950">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{CONTACT_INFO.addressEn}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{CONTACT_INFO.workingHoursEn}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-amber-400 font-bold text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{CONTACT_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Crisp White & Indigo Navigation Pill */}
      <div className="max-w-6xl mx-auto px-4 mt-3 pointer-events-auto">
        <motion.nav
          animate={{
            scale: isScrolled ? 0.98 : 1,
            boxShadow: isScrolled
              ? "0 20px 30px -10px rgba(30, 27, 75, 0.15)"
              : "0 10px 25px -5px rgba(30, 27, 75, 0.08)",
          }}
          transition={{ duration: 0.2 }}
          className="bg-white/98 backdrop-blur-md rounded-full border border-indigo-100 px-5 py-2.5 flex items-center justify-between transition-all"
        >
          {/* Official Logo Image */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative p-1 rounded-full bg-indigo-50 border border-indigo-100">
              <img
                src="/logo.png"
                alt="HY-TECH Computer Education & Online Hub Logo Dharampur"
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black tracking-tight text-[#1E1B4B]">
                  HY-TECH
                </span>
                <span className="text-[10px] bg-[#4F46E5] text-white font-extrabold px-2 py-0.5 rounded-full shadow-xs">
                  Dharampur
                </span>
              </div>
              <p className="text-[9px] font-extrabold text-[#4F46E5] tracking-wide uppercase leading-none mt-0.5">
                Computer Education & Online Hub
              </p>
            </div>
          </Link>

          {/* Desktop Multi-Page Navigation */}
          <div className="hidden lg:flex items-center gap-1.5 bg-indigo-50/70 p-1.5 rounded-full border border-indigo-100">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-extrabold text-xs px-4 py-2 rounded-full transition-all ${
                    isActive
                      ? "bg-[#4F46E5] text-white shadow-md shadow-indigo-500/30"
                      : "text-slate-700 hover:text-[#4F46E5] hover:bg-white"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Quick CTA Action */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Hello HY-TECH, I would like to inquire about your services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-extrabold px-5 py-2.5 rounded-full shadow-md text-xs transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-slate-700 hover:bg-indigo-50 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#4F46E5]" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.nav>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="mt-2 bg-white/98 backdrop-blur-md rounded-3xl border border-indigo-100 p-5 shadow-2xl space-y-3 pointer-events-auto"
            >
              <div className="grid grid-cols-2 gap-2 pb-3 border-b border-indigo-100">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2.5 rounded-full text-xs font-extrabold transition-all border ${
                        isActive
                          ? "bg-[#4F46E5] text-white border-[#4F46E5] shadow-sm"
                          : "text-slate-700 bg-indigo-50/50 hover:bg-indigo-50 border-indigo-100"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-1 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("Hello HY-TECH, I would like to inquire about your services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#4F46E5] text-white font-extrabold py-3 rounded-full shadow text-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#1E1B4B] text-white font-extrabold py-3 rounded-full text-xs"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Us: {CONTACT_INFO.displayPhone}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};


