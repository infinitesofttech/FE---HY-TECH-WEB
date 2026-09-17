"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FileCheck, CheckCircle2, AlertCircle, Printer, MessageSquare } from "lucide-react";
import { CONTACT_INFO } from "@/data/servicesData";

interface DocumentPreset {
  id: string;
  titleGu: string;
  titleEn: string;
  docsGu: string[];
  docsEn: string[];
  noteGu?: string;
  noteEn?: string;
}

const DOCUMENT_PRESETS: DocumentPreset[] = [
  {
    id: "pan",
    titleGu: "PAN Card (નવું અથવા સુધારો)",
    titleEn: "PAN Card (New or Correction)",
    docsGu: [
      "ઓરિજિનલ આધાર કાર્ડ (માહિતી સ્પષ્ટ હોવી જરૂરી)",
      "૨ પાસપોર્ટ સાઈઝ કલર ફોટોગ્રાફ્સ",
      "ચાલુ મોબાઈલ નંબર (ઓટીપી માટે)",
      "જૂનું પાન કાર્ડ (સુધારો કરાવવાનો હોય તો)"
    ],
    docsEn: [
      "Original Aadhaar Card (with clear details)",
      "2 Passport Size Color Photographs",
      "Active Mobile Number (for OTP verification)",
      "Old PAN Card (if applying for correction)"
    ],
    noteGu: "નોંધ: ૧૮ વર્ષથી નાની ઉંમર માટે માતા કે પિતાનું આધાર કાર્ડ સાથે લાવવું.",
    noteEn: "Note: For minors below 18 years, parent's Aadhaar is required."
  },
  {
    id: "aadhaar-update",
    titleGu: "આધાર કાર્ડ અપડેટ (સરનામું / મોબાઈલ)",
    titleEn: "Aadhaar Mobile & Address Update",
    docsGu: [
      "હાલનું ઓરિજિનલ આધાર કાર્ડ",
      "સરનામાં સુધારા માટે: ચૂંટણી કાર્ડ / રેશન કાર્ડ / લાઇટ બિલ / પાસબુક",
      "રજિસ્ટર્ડ અથવા નવો લિંક કરવાનો મોબાઈલ નંબર"
    ],
    docsEn: [
      "Current Original Aadhaar Card",
      "For Address Change: Voter ID / Ration Card / Electricity Bill / Bank Passbook",
      "Active Mobile Number to link"
    ],
    noteGu: "નોંધ: બાયોમેટ્રિક ફિંગરપ્રિન્ટ અપડેટ માટે વ્યક્તિનું પ્રત્યક્ષ આવવું ફરજિયાત છે.",
    noteEn: "Note: Individual presence is mandatory for biometric update."
  },
  {
    id: "ayushman",
    titleGu: "આયુષ્માન કાર્ડ (PMJAY)",
    titleEn: "Ayushman Card (PMJAY Health Card)",
    docsGu: [
      "NFSA રેશન કાર્ડ (કુટુંબના બધા સભ્યોના નામ હોવા જરૂરી)",
      "બધા સભ્યોના ઓરિજિનલ આધાર કાર્ડ",
      "ઓટીપી માટે ચાલુ મોબાઈલ નંબર"
    ],
    docsEn: [
      "NFSA Ration Card (with family member names listed)",
      "Original Aadhaar Cards of all family members",
      "Active Mobile Number for OTP"
    ],
    noteGu: "નોંધ: રેશન કાર્ડમાં નામ હોવું અને આધાર ઈ-કેવાયસી થવું જરૂરી છે.",
    noteEn: "Note: Ration card inclusion & Aadhaar e-KYC required."
  },
  {
    id: "income-cert",
    titleGu: "આવકનો દાખલો (Income Certificate)",
    titleEn: "Income Certificate (Mamlatdar Office)",
    docsGu: [
      "અરજદારનું આધાર કાર્ડ",
      "રેશન કાર્ડ અને લાઈટ બિલની ઝેરોક્ષ",
      "તલાટી મંત્રીશ્રીનો આવકનો દાખલો",
      "૧ પાસપોર્ટ સાઈઝ ફોટો"
    ],
    docsEn: [
      "Applicant's Aadhaar Card",
      "Ration Card and Electricity Bill copy",
      "Talati Mantri Income Report",
      "1 Passport Size Photograph"
    ]
  },
  {
    id: "scholarship",
    titleGu: "ડિજિટલ ગુજરાત સ્કોલરશીપ ફોર્મ",
    titleEn: "Digital Gujarat Scholarship Form",
    docsGu: [
      "વિદ્યાર્થી અને વાલીનું આધાર કાર્ડ",
      "છેલ્લા વર્ષની ઓરિજિનલ માર્કશીટ (૧૦/૧૨/ડિગ્રી)",
      "સક્ષમ અધિકારીશ્રીનો આવકનો દાખલો",
      "જાતિનો દાખલો (ST/SC/OBC)",
      "વિદ્યાર્થીના નામે બેંક પાસબુક (આધાર સીડેડ)",
      "કોલેજ ફી ની પહોંચ અને બોનાફાઈડ સર્ટિફિકેટ"
    ],
    docsEn: [
      "Student & Parent Aadhaar Card",
      "Last Exam Marksheet (10th/12th/Degree)",
      "Valid Income Certificate",
      "Caste Certificate (ST/SC/OBC)",
      "Aadhaar-seeded Bank Passbook in student's name",
      "College Fee Receipt & Bonafide Certificate"
    ]
  }
];

export const DocumentChecklist: React.FC = () => {
  const { t } = useLanguage();
  const [selectedId, setSelectedId] = useState<string>("pan");

  const selectedPreset = DOCUMENT_PRESETS.find((p) => p.id === selectedId) || DOCUMENT_PRESETS[0];

  return (
    <section id="documents" className="py-20 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <FileCheck className="w-3.5 h-3.5" />
            <span>{t("નાગરિક માર્ગદર્શન", "Citizen Guidance")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            {t("સાથે લાવવાના જરૂરી ડોક્યુમેન્ટ્સ ચકાસો", "Check Required Documents Before Visiting")}
          </h2>
          <p className="text-slate-600 text-sm">
            {t(
              "HY-TECH સેવા કેન્દ્રની મુલાકાત લેતા પહેલા તમારી સેવા પસંદ કરો અને જરૂરી પુરાવાઓની યાદી ચકાસી લો.",
              "Select your service below to view the exact document checklist to bring to HY-TECH Dharampur."
            )}
          </p>
        </div>

        {/* Preset Selector Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {DOCUMENT_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => setSelectedId(preset.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-sm ${
                selectedId === preset.id
                  ? "bg-emerald-600 text-white shadow-emerald-600/30 shadow-md scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {t(preset.titleGu, preset.titleEn)}
            </button>
          ))}
        </div>

        {/* Checklist Card */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-emerald-50/80 via-white to-slate-50 rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-xl">
          <div className="flex items-center justify-between border-b border-emerald-200/80 pb-4 mb-6">
            <div>
              <h3 className="text-xl font-extrabold text-navy-950">
                {t(selectedPreset.titleGu, selectedPreset.titleEn)}
              </h3>
              <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                HY-TECH Dharampur Verification List
              </p>
            </div>
            <div className="p-2.5 bg-emerald-600 text-white rounded-2xl shadow-md">
              <FileCheck className="w-6 h-6" />
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {(t(
              selectedPreset.docsGu.join("###"),
              selectedPreset.docsEn.join("###")
            ).split("###")).map((doc, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-200/80 shadow-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">{doc}</span>
              </div>
            ))}
          </div>

          {selectedPreset.noteGu && (
            <div className="flex items-start gap-2.5 p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-amber-800 text-xs font-medium mb-6">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>{t(selectedPreset.noteGu, selectedPreset.noteEn || selectedPreset.noteGu)}</span>
            </div>
          )}

          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-500 font-medium">
              {t("મુલાકાત લેવાનું સરનામું: શોપ નં. ૦૫, રાજમિલન કોમ્પ્લેક્સ, ધરમપુર", "Address: Shop No. 05, Rajmilan Complex, Dharampur")}
            </span>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(`નમસ્તે, મારે '${selectedPreset.titleGu}' માટે ઓનલાઈન અરજી કરવી છે.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t("વોટ્સએપ પર કન્ફર્મ કરો", "Confirm on WhatsApp")}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
