"use client";

import React, { createContext, useContext, useState } from "react";

export type Language = "en" | "gu";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (guText: string, enText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang] = useState<Language>("en");

  const setLang = () => {};

  // Always return English text since user requested ONLY English
  const t = (_guText: string, enText: string) => enText;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
