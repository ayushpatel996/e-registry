"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Globe, Link as LinkIcon, X, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" style={{ background: '#111827', color: 'white', padding: '5rem 0 2rem' }}>
      <div className="container">
        <div className="grid grid-3" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
          <div>
            <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Vipin Consultancy</h3>
            <p style={{ opacity: 0.7, marginBottom: '2rem', maxWidth: '400px' }}>
              Your trusted partner for all E-Registry and legal consultancy services in Madhya Pradesh. We ensure a smooth, transparent, and legally sound registration process.
            </p>
            <div className="flex gap-4" style={{ display: 'flex', gap: '1rem' }}>
              <Link href="#" className="glass" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><Globe size={20} /></Link>
              <Link href="#" className="glass" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><X size={20} /></Link>
              <Link href="#" className="glass" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><LinkIcon size={20} /></Link>
            </div>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', opacity: 0.8 }}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="#services">Our Services</Link></li>
              <li><Link href="#">Refund Policy</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Contact Us</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', opacity: 0.8 }}>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <Phone className="text-accent" size={20} style={{ color: 'var(--accent)' }} />
                <span>+91 9098476107</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <Mail className="text-accent" size={20} style={{ color: 'var(--accent)' }} />
                <span>vipinpatel31@gmail.com</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <MapPin className="text-accent" size={20} style={{ color: 'var(--accent)' }} />
                <span>Sagar, Madhya Pradesh (M.P.) 470001</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', opacity: 0.5, fontSize: '0.875rem' }}>
          <p>© {new Date().getFullYear()} Vipin Consultancy. All Rights Reserved.</p>
        </div>
      </div>

      {/* Floating Widget */}
      <Link 
        href="https://wa.me/919098476107" 
        target="_blank"
        style={{ position: 'fixed', bottom: '2rem', right: '2rem', background: '#25d366', color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', zIndex: 100 }}
      >
        <MessageCircle size={32} />
      </Link>
    </footer>
  );
};

export default Footer;
