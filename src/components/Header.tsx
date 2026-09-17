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
      {/* Top Banner Bar (Veeba Coral Bar) */}
      <div className="bg-[#FF5A00] text-white py-1.5 px-4 text-xs font-medium pointer-events-auto border-b border-[#E04F00]/40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-white/95">
              <MapPin className="w-3.5 h-3.5 text-amber-200" />
              <span>{CONTACT_INFO.addressEn}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-white/90">
              <Clock className="w-3.5 h-3.5 text-amber-200" />
              <span>{CONTACT_INFO.workingHoursEn}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:underline font-bold text-white"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{CONTACT_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Veeba Floating Pill Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 mt-3 pointer-events-auto">
        <motion.nav
          animate={{
            scale: isScrolled ? 0.98 : 1,
            boxShadow: isScrolled
              ? "0 20px 30px -10px rgba(0, 0, 0, 0.15)"
              : "0 10px 25px -5px rgba(0, 0, 0, 0.08)",
          }}
          transition={{ duration: 0.2 }}
          className="bg-white/95 backdrop-blur-md rounded-full border border-[#F0E6D8] px-5 py-2.5 flex items-center justify-between transition-all"
        >
          {/* Official Logo Image */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative p-1 rounded-full bg-[#FFF0E6] border border-[#FFD8C2]">
              <img
                src="/logo.png"
                alt="HY-TECH Computer Education & Online Hub Logo Dharampur"
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black tracking-tight text-[#0B132B]">
                  HY-TECH
                </span>
                <span className="text-[10px] bg-[#FF5A00] text-white font-extrabold px-2 py-0.5 rounded-full shadow-xs">
                  Dharampur
                </span>
              </div>
              <p className="text-[9px] font-extrabold text-[#FF5A00] tracking-wide uppercase leading-none mt-0.5">
                Computer Education & Online Hub
              </p>
            </div>
          </Link>

          {/* Desktop Multi-Page Navigation */}
          <div className="hidden lg:flex items-center gap-1.5 bg-[#FAF5ED] p-1.5 rounded-full border border-[#F0E6D8]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-extrabold text-xs px-4 py-2 rounded-full transition-all ${
                    isActive
                      ? "bg-[#FF5A00] text-white shadow-md shadow-[#FF5A00]/30"
                      : "text-slate-700 hover:text-[#FF5A00] hover:bg-white"
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
              className="flex items-center gap-2 bg-[#FF5A00] hover:bg-[#E04F00] text-white font-extrabold px-5 py-2.5 rounded-full shadow-md text-xs transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-slate-700 hover:bg-[#FFF0E6] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF5A00]" /> : <Menu className="w-6 h-6" />}
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
              className="mt-2 bg-white/98 backdrop-blur-md rounded-3xl border border-[#F0E6D8] p-5 shadow-2xl space-y-3 pointer-events-auto"
            >
              <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#F0E6D8]">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2.5 rounded-full text-xs font-extrabold transition-all border ${
                        isActive
                          ? "bg-[#FF5A00] text-white border-[#FF5A00] shadow-sm"
                          : "text-slate-700 bg-[#FAF5ED] hover:bg-[#FFF0E6] border-[#F0E6D8]"
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
                  className="w-full flex items-center justify-center gap-2 bg-[#FF5A00] text-white font-extrabold py-3 rounded-full shadow text-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#0B132B] text-white font-extrabold py-3 rounded-full text-xs"
                >
                  <Phone className="w-4 h-4 text-[#FF5A00]" />
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
