"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_INFO } from "@/data/servicesData";
import { MapPin, Phone, Mail, Instagram, Clock, User, Navigation, ExternalLink } from "lucide-react";

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Rajmilan Complex, Old Jakatnaka, Dharampur")}`;

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t("અમારું સરનામું અને સંપર્ક", "Contact & Location")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            {t("HY-TECH સેવા કેન્દ્ર ધરમપુર ખાતે પધારો", "Visit HY-TECH Digital Hub Dharampur")}
          </h2>
          <p className="text-slate-600 text-sm">
            {t(
              "અમારા શોપ પર આવીને રૂબરૂ સેવાઓ મેળવો અથવા કોઈપણ માહિતી માટે સીધો ફોન કરો.",
              "Visit our shop in Dharampur or contact us via phone/WhatsApp for immediate assistance."
            )}
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Address Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-navy-950">
              {t("મુલાકાતનું સરનામું", "Shop Address")}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {t(CONTACT_INFO.addressGu, CONTACT_INFO.addressEn)}
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:underline pt-2"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>{t("ગુગલ મેપ પર જુઓ", "View on Google Maps")}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Call / WhatsApp Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-navy-950">
              {t("ફોન નંબર & વોટ્સએપ", "Phone & WhatsApp")}
            </h3>
            <div className="space-y-1">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                className="text-sm font-extrabold text-navy-950 hover:text-brand-600 block"
              >
                {CONTACT_INFO.displayPhone}
              </a>
              <p className="text-xs text-slate-500 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>{CONTACT_INFO.contactPerson}</span>
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-navy-950">
              {t("ઈમેઈલ આઈડી", "Email Address")}
            </h3>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-xs font-semibold text-slate-700 hover:text-brand-600 block truncate"
            >
              {CONTACT_INFO.email}
            </a>
            <p className="text-[11px] text-slate-400">
              {t("ઓફિશિયલ ઈમેઈલ સંપર્ક", "Official Support Email")}
            </p>
          </div>

          {/* Instagram Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center">
              <Instagram className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-navy-950">
              {t("ઈન્સ્ટાગ્રામ પેજ", "Instagram Profile")}
            </h3>
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-pink-600 hover:underline block truncate"
            >
              @{CONTACT_INFO.instagram}
            </a>
            <p className="text-[11px] text-slate-400">
              {t("નવા અપડેટ્સ માટે ફોલો કરો", "Follow for new updates")}
            </p>
          </div>

        </div>

        {/* Working Hours Bar */}
        <div className="bg-navy-950 rounded-2xl p-6 text-white flex flex-wrap items-center justify-between gap-4 border border-navy-800">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-amber-400" />
            <div>
              <h4 className="text-sm font-bold text-white">
                {t("શોપ કામગીરીનો સમય (Working Hours)", "Shop Working Hours")}
              </h4>
              <p className="text-xs text-slate-300">
                {t(CONTACT_INFO.workingHoursGu, CONTACT_INFO.workingHoursEn)}
              </p>
            </div>
          </div>

          <a
            href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
            className="px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl text-xs transition-all shadow-md"
          >
            {t("હમણાં જ કોલ કરો", "Call Now")}
          </a>
        </div>

      </div>
    </section>
  );
};
