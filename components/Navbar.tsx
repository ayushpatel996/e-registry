"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'LICENSE', href: '#', hasDropdown: true },
    { name: 'REGISTRATION', href: '#', hasDropdown: true },
    { name: 'NGO', href: '#', hasDropdown: true },
    { name: 'DSC', href: '#', hasDropdown: true },
    { name: 'ISO', href: '#', hasDropdown: true },
    { name: 'CONTACT US', href: '#contact' },
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
        <div className="hidden md:flex items-center gap-8" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
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
          <Link href="tel:+919098476107" className="btn btn-accent" style={{ padding: '0.5rem 1.5rem', borderRadius: '0.25rem' }}>
            CALL NOW
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
