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
    <section className="relative min-h-[600px] flex items-center overflow-hidden" style={{ minHeight: '600px', display: 'flex', alignItems: 'center', position: 'relative', background: '#f8fafc' }}>
      <div className="container grid grid-2 items-center gap-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', alignItems: 'center', gap: '3rem', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4 text-accent font-bold" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--accent)', fontWeight: '700' }}>
            <span className="h-px w-8 bg-accent" style={{ height: '1px', width: '2rem', background: 'var(--accent)' }}></span>
            {t.hero.badge}
          </div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            {t.hero.title1} <br />
            <span style={{ color: 'var(--accent)' }}>{t.hero.title2}</span>
          </h1>
          <p className="text-muted text-lg mb-8" style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '500px' }}>
            {t.hero.desc}
          </p>
          
          <div className="flex gap-4" style={{ display: 'flex', gap: '1rem' }}>
            <Link href="tel:+919098476107" className="btn btn-primary">
              <Phone size={18} style={{ marginRight: '0.5rem' }} /> {t.hero.ctaTalk}
            </Link>
            <Link href="#services" className="btn" style={{ border: '1px solid var(--border)' }}>
              {t.hero.ctaServices} <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ position: 'relative' }}
        >
          <Album />
          {/* Stats Badge */}
          <div className="glass" style={{ position: 'absolute', bottom: '-20px', left: '-20px', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: 'var(--shadow)', zIndex: 10 }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent)' }}>1000+</div>
            <div style={{ fontSize: '0.75rem', fontWeight: '600' }}>{t.hero.stats}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
