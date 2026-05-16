"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { CheckCircle2, PhoneCall, MapPin, Send } from 'lucide-react';

const Process = () => {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1500);
  };

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
              
              {!submitted ? (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <PhoneCall className="text-accent-light" size={24} />
                    <h3 className="text-2xl font-bold">{t.process.callbackTitle}</h3>
                  </div>
                  <p className="mb-8 text-slate-300 leading-relaxed">{t.process.callbackDesc}</p>
                  
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-1">
                      <input 
                        required
                        type="text" 
                        name="name"
                        placeholder={t.process.namePlaceholder} 
                        className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white/20 transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <input 
                        required
                        type="tel" 
                        name="phone"
                        placeholder={t.process.phonePlaceholder} 
                        className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white/20 transition-all"
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="btn btn-accent w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>{t.process.btnRequest} <Send size={18} /></>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {language === 'hi' ? 'धन्यवाद!' : 'Thank You!'}
                  </h3>
                  <p className="text-slate-300">
                    {language === 'hi' 
                      ? 'हमें आपका अनुरोध प्राप्त हो गया है। हम जल्द ही आपसे संपर्क करेंगे।' 
                      : 'We have received your request. We will get back to you shortly.'}
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm text-slate-400 hover:text-white underline"
                  >
                    {language === 'hi' ? 'फिर से भेजें' : 'Send another request'}
                  </button>
                </div>
              )}

              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="text-accent-light" size={20} />
                  <h4 className="text-lg font-bold">{t.process.officeTitle}</h4>
                </div>
                <a 
                  href="https://maps.app.goo.gl/NqWVT7ng7bqoEoTQA" 
                  target="_blank" 
                  className="text-slate-400 text-sm leading-relaxed hover:text-white transition-colors"
                >
                  Shope no 31, First floor, Near Old Collectorate,<br />
                  Clerk co-operative society building, Sagar 470002
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
