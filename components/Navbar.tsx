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
    { name: t.nav.license, href: '#services', hasDropdown: true },
    { name: t.nav.registration, href: '#process', hasDropdown: true },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className="glass sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Vipin Consultancy" width={40} height={40} className="object-contain" />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-primary leading-none">VIPIN</span>
            <span className="text-[10px] font-bold text-accent tracking-wider uppercase">CONSULTANCY</span>
            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Since 2015</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link 
                href={link.href} 
                className="text-[13px] font-bold flex items-center gap-1 hover:text-accent transition-colors"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} />}
              </Link>
            </div>
          ))}
          
          <button 
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="flex items-center gap-2 text-[13px] font-bold text-primary hover:text-accent border border-gray-200 px-3 py-1.5 rounded-full transition-all"
          >
            <Languages size={16} />
            {language === 'en' ? 'हिन्दी' : 'English'}
          </button>

          <Link href="tel:+919098476107" className="btn btn-accent text-[13px] py-2 px-6">
            {t.nav.callNow}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button 
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="text-primary p-2"
          >
            <Languages size={22} />
          </button>
          <button className="text-primary p-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass border-t border-gray-100 p-4 flex flex-col gap-2 animate-in slide-in-from-top-2 duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-base font-bold py-3 border-b border-gray-50 flex justify-between items-center"
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={16} />}
            </Link>
          ))}
          <div className="pt-4">
            <Link 
              href="tel:+919098476107" 
              className="btn btn-accent w-full text-center py-4"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.callNow}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
