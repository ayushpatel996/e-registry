"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X, ChevronDown, Languages } from 'lucide-react';

interface NavLinkItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  items?: string[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();

  const navLinks: NavLinkItem[] = [
    { name: t.nav.home, href: '/' },
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
            <div 
              key={link.name} 
              className="relative"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                href={link.href} 
                className="text-[13px] font-bold flex items-center gap-1 hover:text-accent transition-colors py-2"
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} 
                  />
                )}
              </Link>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {link.hasDropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50"
                  >
                    {link.items?.map((item: string) => (
                      <Link
                        key={item}
                        href={link.href}
                        className="block px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-accent rounded-lg transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          
          <button 
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="flex items-center gap-2 text-[13px] font-bold text-primary hover:text-accent border border-gray-200 px-3 py-1.5 rounded-full transition-all ml-2"
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
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden glass border-t border-gray-100 overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <div 
                    className="flex justify-between items-center py-3 border-b border-gray-50 cursor-pointer"
                    onClick={() => link.hasDropdown ? setActiveDropdown(activeDropdown === link.name ? null : link.name) : setIsOpen(false)}
                  >
                    <Link 
                      href={link.href} 
                      className="text-base font-bold"
                      onClick={(e) => link.hasDropdown && e.stopPropagation()}
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <ChevronDown 
                        size={18} 
                        className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                      />
                    )}
                  </div>
                  
                  {/* Mobile Dropdown Items */}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div className="bg-slate-50/50 rounded-lg mt-1 p-2 flex flex-col">
                      {link.items?.map((item: string) => (
                        <Link 
                          key={item} 
                          href={link.href}
                          onClick={() => { setIsOpen(false); setActiveDropdown(null); }}
                          className="py-2.5 px-4 text-sm font-semibold text-slate-500"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
