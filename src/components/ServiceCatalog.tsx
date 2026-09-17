"use client";

import React, { useState, useMemo } from "react";
import { SERVICES_DATA, ServiceItem, CONTACT_INFO } from "@/data/servicesData";
import {
  Globe,
  Fingerprint,
  GraduationCap,
  Briefcase,
  Monitor,
  Printer,
  CreditCard,
  UserCheck,
  Vote,
  FileCheck,
  Car,
  HeartPulse,
  BadgeCheck,
  Sprout,
  ShieldCheck,
  Smartphone,
  ScanFace,
  MapPin,
  School,
  Laptop,
  Award,
  FileText,
  Building2,
  Train,
  Shield,
  CheckCircle2,
  Calculator,
  FileSpreadsheet,
  Keyboard,
  Copy,
  Image as ImageIcon,
  Receipt,
  MessageSquare,
  X,
  FileSearch,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

// Icon mapping helper
const iconMap: Record<string, React.ElementType> = {
  Globe, Fingerprint, GraduationCap, Briefcase, Monitor, Printer,
  CreditCard, UserCheck, Vote, FileCheck, Car, HeartPulse, BadgeCheck,
  Sprout, ShieldCheck, Smartphone, ScanFace, MapPin, School, Laptop,
  Award, FileText, Building2, Train, Shield, CheckCircle2, Calculator,
  FileSpreadsheet, Keyboard, Copy, Image: ImageIcon, Receipt
};

interface ServiceCatalogProps {
  searchQuery: string;
}

export const ServiceCatalog: React.FC<ServiceCatalogProps> = ({ searchQuery }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Filter items based on category & search query
  const filteredCategories = useMemo(() => {
    return SERVICES_DATA.map((category) => {
      const items = category.items.filter((item) => {
        const matchesCategory = activeCategory === "all" || category.id === activeCategory;
        const queryLower = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !queryLower ||
          item.titleEn.toLowerCase().includes(queryLower) ||
          item.descriptionEn.toLowerCase().includes(queryLower);

        return matchesCategory && matchesSearch;
      });

      return { ...category, items };
    }).filter((category) => category.items.length > 0);
  }, [activeCategory, searchQuery]);

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-50 text-[#FF5A00] text-xs font-extrabold uppercase tracking-wider border border-orange-200">
            <Globe className="w-3.5 h-3.5" />
            <span>All Services Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
            Complete Directory of Digital Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Government schemes, Aadhaar updates, digital certificates, college forms, and computer education.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-extrabold whitespace-nowrap transition-all shadow-sm ${
              activeCategory === "all"
                ? "bg-[#FF5A00] text-white shadow-md shadow-[#FF5A00]/30 scale-105"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            All Services
          </button>

          {SERVICES_DATA.map((cat) => {
            const CatIcon = iconMap[cat.iconName] || Globe;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold whitespace-nowrap transition-all shadow-sm ${
                  activeCategory === cat.id
                    ? "bg-[#0F172A] text-white shadow-md scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <CatIcon className="w-3.5 h-3.5 text-[#FF5A00]" />
                <span>{cat.titleEn}</span>
              </button>
            );
          })}
        </div>

        {/* Catalog Grid */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-[32px] border border-slate-200 p-8 shadow-sm">
            <FileSearch className="w-12 h-12 text-[#FF5A00] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#0F172A]">
              No services found
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              Please search with a different keyword or select another category.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredCategories.map((category) => {
              const CatIcon = iconMap[category.iconName] || Globe;
              return (
                <div key={category.id} className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                    <div className="p-2.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF5A00]">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-black text-[#0F172A]">
                      {category.titleEn}
                    </h3>
                  </div>

                  {/* Product Cards Grid (32px Curves) */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, idx) => {
                      const ItemIcon = iconMap[item.iconName] || Globe;
                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.05 * idx }}
                          whileHover={{ y: -6, scale: 1.01 }}
                          onClick={() => setSelectedService(item)}
                          className="group bg-white rounded-[32px] p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
                        >
                          {/* Item Badge */}
                          {item.badgeEn && (
                            <span className="absolute top-5 right-5 text-[10px] font-extrabold bg-orange-50 text-[#FF5A00] px-3 py-1 rounded-full border border-orange-200">
                              {item.badgeEn}
                            </span>
                          )}

                          <div className="space-y-4">
                            {/* Pastel Background Container for Icon */}
                            <div className="w-13 h-13 rounded-2xl bg-orange-50 border border-orange-200 text-[#FF5A00] flex items-center justify-center group-hover:bg-[#FF5A00] group-hover:text-white transition-all duration-300">
                              <ItemIcon className="w-6 h-6" />
                            </div>

                            <div>
                              <h4 className="text-base font-extrabold text-[#0F172A] group-hover:text-[#FF5A00] transition-colors">
                                {item.titleEn}
                              </h4>
                              <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3 font-medium">
                                {item.descriptionEn}
                              </p>
                            </div>
                          </div>

                          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-[#FF5A00]">
                            <span>View Required Docs & Info</span>
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-[32px] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-orange-50 text-[#FF5A00] border border-orange-200 rounded-full">
                  {React.createElement(iconMap[selectedService.iconName] || Globe, { className: "w-7 h-7" })}
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#0F172A]">
                    {selectedService.titleEn}
                  </h3>
                  <span className="text-xs text-[#FF5A00] font-extrabold">HY-TECH Dharampur Service</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
                {selectedService.descriptionEn}
              </p>

              {/* Required Documents List */}
              {selectedService.requiredDocsEn && (
                <div className="space-y-2">
                  <h4 className="text-xs font-extrabold text-[#0F172A] uppercase tracking-wider flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Required Documents to Bring:</span>
                  </h4>
                  <ul className="space-y-2 bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200/70 text-xs">
                    {selectedService.requiredDocsEn.map((doc, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-800 font-bold">
                        <span className="w-2 h-2 rounded-full bg-emerald-600" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello, I would like to inquire about '${selectedService.titleEn}'.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#FF5A00] hover:bg-[#E04F00] text-white font-extrabold rounded-full shadow-md text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire for this Service on WhatsApp</span>
                </a>

                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold rounded-full text-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};


