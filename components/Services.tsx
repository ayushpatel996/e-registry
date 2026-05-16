"use client";

import React from 'react';
import { Home, Building2, Map, Factory, UserPlus, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Residential Property",
    desc: "Expert registry services for plots, flats, and independent houses.",
    icon: <Home size={32} />,
  },
  {
    title: "Commercial Property",
    desc: "Legal documentation and registry for shops, offices, and commercial complexes.",
    icon: <Building2 size={32} />,
  },
  {
    title: "Agricultural Land",
    desc: "Complete assistance in agricultural land registry and revenue records.",
    icon: <Map size={32} />,
  },
  {
    title: "Industrial Premises",
    desc: "Registration services for industrial plots, sheds, and factory buildings.",
    icon: <Factory size={32} />,
  },
  {
    title: "Registry for Builders",
    desc: "Specialized services for real estate developers and large-scale projects.",
    icon: <UserPlus size={32} />,
  },
  {
    title: "Banking & Finance",
    desc: "E-registry services specifically tailored for banks and financial institutions.",
    icon: <Landmark size={32} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="section bg-alt" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem' }}>Our Services Includes</h2>
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
