"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_INFO, SERVICES_DATA } from "@/data/servicesData";
import { MessageSquare, Send, CheckCircle2, PhoneCall, Sparkles } from "lucide-react";

export const InquiryForm: React.FC = () => {
  const { t } = useLanguage();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    const waText = `નમસ્તે HY-TECH (ધરમપુર),\nમારું નામ: ${fullName}\nમોબાઈલ નંબર: ${phone}\nસેવા: ${service || "સામાન્ય ઇન્ક્વાયરી"}\nમેસેજ: ${message || "મને આ સેવા વિશે વિગતવાર માહિતી આપો."}`;

    const waUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30 text-xs font-bold">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{t("ત્વરિત ઓનલાઈન ઇન્ક્વાયરી", "Instant Online Inquiry")}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              {t("ઘેર બેઠા ઓનલાઈન સેવા અથવા કમ્પ્યુટર ક્લાસ માટે સંપર્ક કરો", "Inquire Online for Any Service or Computer Class")}
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              {t(
                "તમારી વિગતો અહીં ભરો અને સીધો વોટ્સએપ પર મેસેજ મોકલો. અમારી ટીમ તમને ત્વરિત માર્ગદર્શન અને માહિતી આપશે.",
                "Fill out your details below to instantly connect with our Dharampur team on WhatsApp."
              )}
            </p>

            <div className="space-y-4 pt-2">
              {[
                { titleGu: "ઝડપી ઓનલાઈન રેસ્પોન્સ", titleEn: "Fast Online Response" },
                { titleGu: "ડોક્યુમેન્ટ વેરિફિકેશન ગાઈડન્સ", titleEn: "Document Verification Guidance" },
                { titleGu: "ન્યૂનતમ સર્વિસ ચાર્જ ગેરંટી", titleEn: "Affordable Transparent Charges" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-brand-500/20 text-brand-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-200">
                    {t(item.titleGu, item.titleEn)}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4 border-t border-slate-800">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 text-amber-400 hover:underline font-mono text-lg font-bold"
              >
                <PhoneCall className="w-5 h-5 text-brand-500" />
                <span>{CONTACT_INFO.displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-navy-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              
              <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-brand-500" />
                <span>{t("ઓનલાઈન ફોર્મ ઇન્ક્વાયરી", "Online Inquiry Form")}</span>
              </h3>

              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {t("તમારો મેસેજ વોટ્સએપ પર મોકલી દેવાયો છે!", "Inquiry sent to WhatsApp!")}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {t("અમે ટૂંક સમયમાં તમારો સંપર્ક કરીશું.", "We will respond to your query shortly.")}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-xl text-slate-200"
                  >
                    {t("નવો મેસેજ મોકલો", "Send Another Message")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t("તમારું પૂરું નામ (Full Name) *", "Full Name *")}
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={t("દા.ત. રમેશભાઈ પટેલ", "e.g. Ramesh Patel")}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t("મોબાઈલ નંબર (Mobile Number) *", "Mobile Number *")}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t("દા.ત. 98250 12345", "e.g. 98250 12345")}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t("જરૂરી સેવા પસંદ કરો (Select Service)", "Select Interested Service")}
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-brand-500"
                    >
                      <option value="">{t("-- સેવા પસંદ કરો --", "-- Select Service --")}</option>
                      <option value="Aadhaar Card Update">{t("આધાર કાર્ડ અપડેટ / મોબાઈલ લિંક", "Aadhaar Update & Mobile Link")}</option>
                      <option value="PAN Card">{t("નવું પાન કાર્ડ / સુધારો", "PAN Card Application")}</option>
                      <option value="Vanraj College Forms">{t("શ્રી વનરાજ કોલેજ ફોર્મ્સ ધરમપુર", "Shree Vanraj College Dharampur Forms")}</option>
                      <option value="Ayushman Bharat Card">{t("આયુષ્માન ભારત કાર્ડ", "Ayushman Bharat Health Card")}</option>
                      <option value="CCC Computer Course">{t("CCC કમ્પ્યુટર કોર્સ", "CCC Computer Course")}</option>
                      <option value="Tally Prime with GST">{t("Tally Prime કમ્પ્યુટર કોર્સ", "Tally Prime with GST Course")}</option>
                      <option value="Government Job Form">{t("સરકારી નોકરી ફોર્મ (OJAS)", "Govt Job Application")}</option>
                      <option value="Scholarship Form">{t("સ્કોલરશીપ ફોર્મ", "Digital Gujarat Scholarship")}</option>
                      <option value="Other">{t("અન્ય કામગીરી", "Other Inquiry")}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      {t("સંદેશ અથવા વિગત (Message)", "Message / Details")}
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t("તમારો મેસેજ લખો...", "Write your question or details...")}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t("અત્યારે જ વોટ્સએપ પર ઇન્ક્વાયરી મોકલો", "Send WhatsApp Inquiry Now")}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
