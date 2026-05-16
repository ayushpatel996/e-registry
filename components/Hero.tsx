"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
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
            AUTHORIZED E-REGISTRY PROVIDER
          </div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Property E-Registry <br />
            <span style={{ color: 'var(--accent)' }}>Service Provider</span>
          </h1>
          <p className="text-muted text-lg mb-8" style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '500px' }}>
            Leading E-Registry Service Provider in Bhopal. We provide expert consultancy for property registration, sell deeds, and legal documentation with the Department of Registration and Stamps.
          </p>
          
          <div className="flex gap-4" style={{ display: 'flex', gap: '1rem' }}>
            <Link href="tel:+919098476107" className="btn btn-primary">
              <Phone size={18} style={{ marginRight: '0.5rem' }} /> Talk to an Expert
            </Link>
            <Link href="#services" className="btn" style={{ border: '1px solid var(--border)' }}>
              Our Services <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ position: 'relative' }}
        >
          <div style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <Image 
              src="/hero.png" 
              alt="E-Registry Services" 
              width={600} 
              height={500} 
              className="object-cover"
            />
          </div>
          {/* Stats Badge */}
          <div className="glass" style={{ position: 'absolute', bottom: '-20px', left: '-20px', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: 'var(--shadow)' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--accent)' }}>1000+</div>
            <div style={{ fontSize: '0.75rem', fontWeight: '600' }}>Successful Registrations</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import Link from 'next/link';
export default Hero;
