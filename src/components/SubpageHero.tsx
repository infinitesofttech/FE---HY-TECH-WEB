"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface SubpageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  category?: string;
}

export const SubpageHero: React.FC<SubpageHeroProps> = ({
  title,
  subtitle,
  badge = "HY-TECH Dharampur",
  category = "Page",
}) => {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[#FAF5ED] text-[#0B132B] overflow-hidden border-b border-[#F0E6D8]">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF5A00]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Trail */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-xs font-extrabold text-slate-600 mb-6"
        >
          <Link href="/" className="hover:text-[#FF5A00] transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5 text-[#FF5A00]" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#FF5A00] font-black">{category}</span>
        </motion.nav>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4"
        >
          {badge && (
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFF0E6] border border-[#FFD8C2] text-[#FF5A00] text-xs font-extrabold uppercase tracking-wider">
              {badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0B132B] leading-tight">
            {title}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

      </div>
    </div>
  );
};

