"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle, Globe, Link as LinkIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white pt-20 pb-10">
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
                <span className="text-slate-300">10:30 AM - 07:00 PM</span>
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
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="currentColor" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </Link>
    </footer>
  );
};

export default Footer;
