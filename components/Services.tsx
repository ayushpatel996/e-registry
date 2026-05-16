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
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: t.services.commercial.title,
      desc: t.services.commercial.desc,
      icon: <Building2 size={32} />,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: t.services.agricultural.title,
      desc: t.services.agricultural.desc,
      icon: <Map size={32} />,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: t.services.industrial.title,
      desc: t.services.industrial.desc,
      icon: <Factory size={32} />,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: t.services.builders.title,
      desc: t.services.builders.desc,
      icon: <UserPlus size={32} />,
      color: "bg-rose-50 text-rose-600",
    },
    {
      title: t.services.banking.title,
      desc: t.services.banking.desc,
      icon: <Landmark size={32} />,
      color: "bg-indigo-50 text-indigo-600",
    },
  ];

  return (
    <section id="services" className="section bg-slate-50/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.title}</h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
