"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Album from './Album';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[500px] lg:min-h-[640px] flex items-center overflow-hidden py-12 lg:py-0 bg-slate-50">
      <div className="container grid lg:grid-cols-[45%_55%] items-center gap-10 lg:gap-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 text-accent font-bold tracking-wider text-sm uppercase">
            <span className="h-[2px] w-8 bg-accent"></span>
            {t.hero.badge}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] tracking-tight">
            {t.hero.title1} <br />
            <span className="text-accent">{t.hero.title2}</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {t.hero.desc}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link href="tel:+919098476107" className="btn btn-primary w-full sm:w-auto py-4 px-8">
              <Phone size={20} className="mr-2" /> {t.hero.ctaTalk}
            </Link>
            <Link href="#services" className="btn border-2 border-slate-200 hover:border-accent hover:text-accent w-full sm:w-auto py-4 px-8">
              {t.hero.ctaServices} <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative px-4 lg:px-0"
        >
          <Album />
          {/* Stats Badge */}
          <div className="glass absolute -bottom-6 -left-2 lg:-left-6 p-6 rounded-xl shadow-xl z-20 border border-slate-100">
            <div className="text-3xl font-black text-accent mb-1">1000+</div>
            <div className="text-xs font-bold text-slate-700 tracking-wide uppercase">{t.hero.stats}</div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
