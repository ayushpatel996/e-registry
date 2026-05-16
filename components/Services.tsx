"use client";

import React from 'react';
import { Home, Building2, Map, Factory, UserPlus, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.residential.title,
      desc: t.services.residential.desc,
      icon: <Home size={32} />,
    },
    {
      title: t.services.commercial.title,
      desc: t.services.commercial.desc,
      icon: <Building2 size={32} />,
    },
    {
      title: t.services.agricultural.title,
      desc: t.services.agricultural.desc,
      icon: <Map size={32} />,
    },
    {
      title: t.services.industrial.title,
      desc: t.services.industrial.desc,
      icon: <Factory size={32} />,
    },
    {
      title: t.services.builders.title,
      desc: t.services.builders.desc,
      icon: <UserPlus size={32} />,
    },
    {
      title: t.services.banking.title,
      desc: t.services.banking.desc,
      icon: <Landmark size={32} />,
    },
  ];

  return (
    <section id="services" className="section bg-alt" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem' }}>{t.services.title}</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--accent)', margin: '0 auto' }}></div>
        </div>

        <div className="grid grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ translateY: -10 }}
              className="glass"
              style={{ padding: '2rem', borderRadius: '1rem', background: 'var(--white)', boxShadow: 'var(--shadow-sm)' }}
            >
              <div style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
