"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const Process = () => {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container grid grid-2" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem', alignItems: 'start' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{t.process.title}</h2>
          <div className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {t.process.steps.map((step: string, index: number) => (
              <div key={index} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ minWidth: '24px', height: '24px', borderRadius: '50%', background: 'var(--primary)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold' }}>
                  {index + 1}
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass" style={{ padding: '2.5rem', borderRadius: '1rem', background: 'var(--primary)', color: 'var(--white)', position: 'sticky', top: '100px' }}>
          <div style={{ position: 'relative', width: '100%', height: '250px', borderRadius: '0.5rem', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image src="/office.jpg" alt="Vipin Consultancy" fill className="object-cover" />
          </div>
          <h3 style={{ color: 'var(--white)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>{t.process.callbackTitle}</h3>
          <p style={{ marginBottom: '2rem', opacity: 0.9 }}>{t.process.callbackDesc}</p>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input 
              type="text" 
              placeholder={t.process.namePlaceholder} 
              style={{ padding: '0.75rem', borderRadius: '0.25rem', border: 'none', background: 'rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} 
            />
            <input 
              type="tel" 
              placeholder={t.process.phonePlaceholder} 
              style={{ padding: '0.75rem', borderRadius: '0.25rem', border: 'none', background: 'rgba(255,255,255,0.1)', color: 'white', outline: 'none' }} 
            />
            <button className="btn btn-accent" style={{ width: '100%' }}>{t.process.btnRequest}</button>
          </form>

          <div style={{ marginTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
            <h4 style={{ color: 'var(--white)', fontSize: '1.125rem' }}>{t.process.officeTitle}</h4>
            <p style={{ opacity: 0.8, fontSize: '0.875rem' }}>
              Vipin Consultancy<br />
              Sagar, Madhya Pradesh<br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
