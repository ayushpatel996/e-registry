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
    <div className="relative w-full h-[350px] md:h-[500px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image 
            src={images[index].src} 
            alt={images[index].alt} 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <motion.p 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white text-lg font-bold tracking-wide"
            >
              {images[index].alt}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 z-30">
        <button 
          onClick={prev} 
          className="p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all border border-white/30"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={next} 
          className="p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all border border-white/30"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-30">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Album;
