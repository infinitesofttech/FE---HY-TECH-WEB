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
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-slate-50 text-[#1E1B4B] overflow-hidden border-b border-indigo-100">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4F46E5]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Trail */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-xs font-extrabold text-slate-500 mb-6"
        >
          <Link href="/" className="hover:text-[#4F46E5] transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5 text-[#4F46E5]" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="text-[#4F46E5] font-black">{category}</span>
        </motion.nav>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4"
        >
          {badge && (
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-[#4F46E5] text-xs font-extrabold uppercase tracking-wider">
              {badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1E1B4B] leading-tight">
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


