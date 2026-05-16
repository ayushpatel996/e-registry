"use client";

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/office.jpg', alt: 'Vipin Consultancy Office' },
  { src: '/album1.png', alt: 'Luxury Residential' },
  { src: '/album2.png', alt: 'Modern Commercial' },
  { src: '/album3.png', alt: 'Suburban Home' },
  { src: '/album4.png', alt: 'Industrial Facility' },
];

const Album = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div style={{ position: 'relative', width: '100%', height: '500px', borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <Image 
            src={images[index].src} 
            alt={images[index].alt} 
            fill
            className="object-cover"
          />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', color: 'white' }}>
            <p style={{ fontSize: '0.875rem', fontWeight: '600' }}>{images[index].alt}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button onClick={prev} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.3)', border: 'none', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', color: 'white' }}>
        <ChevronLeft size={24} />
      </button>
      <button onClick={next} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.3)', border: 'none', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', color: 'white' }}>
        <ChevronRight size={24} />
      </button>

      <div style={{ position: 'absolute', bottom: '10px', right: '10px', display: 'flex', gap: '5px' }}>
        {images.map((_, i) => (
          <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: i === index ? 'white' : 'rgba(255,255,255,0.5)' }}></div>
        ))}
      </div>
    </div>
  );
};

export default Album;
