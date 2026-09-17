"use client";

import React, { useState, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
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
  Search,
  MessageSquare,
  X,
  FileSearch
} from "lucide-react";

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
  const { t } = useLanguage();
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
          item.titleGu.toLowerCase().includes(queryLower) ||
          item.titleEn.toLowerCase().includes(queryLower) ||
          item.descriptionGu.toLowerCase().includes(queryLower) ||
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5" />
            <span>{t("તમામ ઓનલાઈન સેવાઓ", "All Online Services")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            {t("અમારી તમામ સેવાઓની વિગતવાર યાદી", "Complete Directory of Services")}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {t(
              "સરકારી યોજનાઓ, આધાર અપડેટ, ડિજિટલ સર્ટિફિકેટ્સ, ફોર્મ્સ અને કમ્પ્યુટર કોર્સિસ એક જ સ્થળેથી ત્વરિત મેળવો.",
              "Government schemes, Aadhaar updates, digital certificates, college forms, and computer education."
            )}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-sm ${
              activeCategory === "all"
                ? "bg-brand-500 text-white shadow-brand-500/30 shadow-md"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {t("તમામ સેવાઓ (All)", "All Services")}
          </button>

          {SERVICES_DATA.map((cat) => {
            const CatIcon = iconMap[cat.iconName] || Globe;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-sm ${
                  activeCategory === cat.id
                    ? "bg-navy-900 text-white shadow-navy-900/30 shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <CatIcon className="w-3.5 h-3.5" />
                <span>{t(cat.titleGu, cat.titleEn)}</span>
              </button>
            );
          })}
        </div>

        {/* Catalog Grid */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <FileSearch className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">
              {t("કોઈ સેવા મળી નથી", "No services found")}
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              {t("કૃપા કરીને બીજો કીવર્ડ સર્ચ કરો અથવા અન્ય કેટેગરી સિલેક્ટ કરો.", "Please search with a different keyword or select another category.")}
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredCategories.map((category) => {
              const CatIcon = iconMap[category.iconName] || Globe;
              return (
                <div key={category.id} className="space-y-6">
                  {/* Category Title Header */}
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                    <div className={`p-2 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-sm`}>
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-950">
                      {t(category.titleGu, category.titleEn)}
                    </h3>
                  </div>

                  {/* Items Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item) => {
                      const ItemIcon = iconMap[item.iconName] || Globe;
                      return (
                        <div
                          key={item.id}
                          onClick={() => setSelectedService(item)}
                          className="group bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-brand-500/50 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
                        >
                          {/* Item Badge if exists */}
                          {item.badgeGu && (
                            <span className="absolute top-4 right-4 text-[10px] font-extrabold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full border border-amber-200">
                              {t(item.badgeGu, item.badgeEn || item.badgeGu)}
                            </span>
                          )}

                          <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-slate-100 text-brand-600 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                              <ItemIcon className="w-6 h-6" />
                            </div>

                            <div>
                              <h4 className="text-base font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                                {t(item.titleGu, item.titleEn)}
                              </h4>
                              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-3">
                                {t(item.descriptionGu, item.descriptionEn)}
                              </p>
                            </div>
                          </div>

                          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600 group-hover:text-brand-700">
                            <span>{t("જરૂરી ડોક્યુમેન્ટ અને વિગત જુઓ", "View Required Docs")}</span>
                            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                          </div>
                        </div>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-brand-100 text-brand-600 rounded-2xl">
                  {React.createElement(iconMap[selectedService.iconName] || Globe, { className: "w-7 h-7" })}
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-navy-950">
                    {t(selectedService.titleGu, selectedService.titleEn)}
                  </h3>
                  <span className="text-xs text-slate-500">HY-TECH Dharampur Service</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                {t(selectedService.descriptionGu, selectedService.descriptionEn)}
              </p>

              {/* Required Documents List */}
              {selectedService.requiredDocsGu && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>{t("સાથે લાવવાના જરૂરી પુરાવા / ડોક્યુમેન્ટ્સ:", "Required Documents to Bring:")}</span>
                  </h4>
                  <ul className="space-y-1.5 bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200/60 text-xs">
                    {(t(
                      selectedService.requiredDocsGu.join("###"),
                      (selectedService.requiredDocsEn || selectedService.requiredDocsGu).join("###")
                    ).split("###")).map((doc, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(`નમસ્તે, મારે '${selectedService.titleGu}' સેવા વિશે માહિતી અને એપ્લિકેશન કરાવવી છે.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t("આ સેવા માટે વોટ્સએપ પર મેસેજ કરો", "Inquire for this Service on WhatsApp")}</span>
                </a>

                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition-colors"
                >
                  {t("બંધ કરો", "Close")}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
