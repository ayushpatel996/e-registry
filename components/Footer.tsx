"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle, Globe, Link as LinkIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-lg">
                <Image src="/logo.png" alt="Vipin Consultancy" width={40} height={40} className="object-contain" />
              </div>
              <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight leading-none">VIPIN</span>
              <span className="text-[10px] font-bold text-accent-light tracking-widest uppercase">CONSULTANCY</span>
              <span className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-tighter">Since 2015</span>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Authorized E-Registry Provider in Sagar. Providing professional registry and legal documentation services for over 10 years.
          </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <LinkIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-8 border-b border-white/10 pb-4">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Registry Services', 'License Guide', 'Contact Us', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-accent-light transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-8 border-b border-white/10 pb-4">Contact Info</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <Phone className="text-accent-light flex-shrink-0 mt-1" size={20} />
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Phone</span>
                  <a href="tel:+919098476107" className="text-slate-300 hover:text-white transition-colors">+91 90984 76107</a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <Mail className="text-accent-light flex-shrink-0 mt-1" size={20} />
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Email</span>
                  <a href="mailto:vipinpatel31@gmail.com" className="text-slate-300 hover:text-white transition-colors">vipinpatel31@gmail.com</a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <MapPin className="text-accent-light flex-shrink-0 mt-1" size={20} />
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Location</span>
                  <a 
                    href="https://maps.app.goo.gl/NqWVT7ng7bqoEoTQA" 
                    target="_blank" 
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Shope no 31, First floor, Near Old Collectorate, Clerk co-operative society building, Sagar 470002
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-bold mb-8 border-b border-white/10 pb-4">Business Hours</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-bold">Mon - Sat:</span>
                <span className="text-slate-300">10:00 AM - 08:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-bold">Sunday:</span>
                <span className="text-accent-light font-bold">Closed</span>
              </div>
              <div className="mt-8 bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-xs text-slate-400 italic">
                  * For emergency registry requests, please call our mobile number directly.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Vipin Consultancy. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* WhatsApp Widget */}
      <Link 
        href="https://wa.me/919098476107" 
        target="_blank"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </Link>
    </footer>
  );
};

export default Footer;
