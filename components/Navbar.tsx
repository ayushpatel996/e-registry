"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X, ChevronDown, Languages } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.license, href: '#', hasDropdown: true },
    { name: t.nav.registration, href: '#', hasDropdown: true },
    { name: t.nav.ngo, href: '#', hasDropdown: true },
    { name: t.nav.dsc, href: '#', hasDropdown: true },
    { name: t.nav.iso, href: '#', hasDropdown: true },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className="glass sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between py-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" className="flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Image src="/logo.png" alt="Vipin Consultancy" width={50} height={50} className="object-contain" />
          <div className="flex flex-col" style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="text-xl font-bold tracking-tight text-primary" style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)' }}>VIPIN</span>
            <span className="text-xs font-semibold text-accent" style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--accent)' }}>CONSULTANCY</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {navLinks.map((link) => (
            <div key={link.name} className="relative group" style={{ position: 'relative' }}>
              <Link 
                href={link.href} 
                className="text-sm font-bold flex items-center gap-1 hover:text-accent" 
                style={{ fontSize: '0.875rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} />}
              </Link>
            </div>
          ))}
          
          <button 
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="flex items-center gap-2 text-sm font-bold text-primary hover:text-accent"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '700', cursor: 'pointer', background: 'none', border: '1px solid var(--border)', padding: '0.25rem 0.75rem', borderRadius: '2rem' }}
          >
            <Languages size={16} />
            {language === 'en' ? 'हिन्दी' : 'English'}
          </button>

          <Link href="tel:+919098476107" className="btn btn-accent" style={{ padding: '0.5rem 1.5rem', borderRadius: '0.25rem' }}>
            {t.nav.callNow}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none' }}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
