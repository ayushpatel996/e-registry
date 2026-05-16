"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { CheckCircle2, PhoneCall, MapPin } from 'lucide-react';

const Process = () => {
  const { t } = useLanguage();

  return (
    <section className="section bg-white">
      <div className="container grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-3">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.process.title}</h2>
          <div className="space-y-6">
            {t.process.steps.map((step: string, index: number) => (
              <div key={index} className="flex gap-4 items-start group">
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {index + 1}
                </div>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed group-hover:text-slate-900 transition-colors">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 sticky top-28">
          <div className="bg-primary p-8 md:p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
            {/* Background Decorative Circle */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-8 shadow-lg ring-4 ring-white/10">
                <Image src="/office.jpg" alt="Vipin Consultancy Office" fill className="object-cover" />
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <PhoneCall className="text-accent-light" size={24} />
                <h3 className="text-2xl font-bold">{t.process.callbackTitle}</h3>
              </div>
              <p className="mb-8 text-slate-300 leading-relaxed">{t.process.callbackDesc}</p>
              
              <form className="space-y-4">
                <div className="space-y-1">
                  <input 
                    type="text" 
                    placeholder={t.process.namePlaceholder} 
                    className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white/20 transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <input 
                    type="tel" 
                    placeholder={t.process.phonePlaceholder} 
                    className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white/20 transition-all"
                  />
                </div>
                <button type="button" className="btn btn-accent w-full py-4 text-lg">
                  {t.process.btnRequest}
                </button>
              </form>

              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="text-accent-light" size={20} />
                  <h4 className="text-lg font-bold">{t.process.officeTitle}</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Vipin Consultancy<br />
                  Sagar, Madhya Pradesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
