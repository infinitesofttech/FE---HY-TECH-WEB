"use client";

import React from "react";
import { CONTACT_INFO } from "@/data/servicesData";
import { MessageSquare } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent("નમસ્તે HY-TECH, મને સેવા વિશે વિગતવાર માહિતી આપો.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group border border-emerald-400/50"
      aria-label="WhatsApp Support"
    >
      <MessageSquare className="w-6 h-6 animate-bounce" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-xs">
        WhatsApp પર વાત કરો
      </span>
    </a>
  );
};
