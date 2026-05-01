'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';

const trustStats = [
{
  value: '4.7★',
  label: 'Google Rating',
  sublabel: 'Verified Reviews'
},
{
  value: '59+',
  label: 'Patient Reviews',
  sublabel: 'On Google Maps'
},
{
  value: '6+',
  label: 'Specialities',
  sublabel: 'Multispeciality Clinic'
},
{
  value: '10 PM',
  label: 'Open Till',
  sublabel: 'Open Daily'
}];


const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-background flex flex-col">
      
      {/* ── Cinematic background image ── */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1e0f5cc28-1772088778264.png"
          alt="Modern clinic interior with bright examination room, clean white walls, professional medical equipment, and calm natural light"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30" />
        
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/40" />
      </div>

      {/* ── Floating teal orbs ── */}
      <div
        className="absolute top-20 left-[8%] w-72 h-72 rounded-full opacity-20 animate-float pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, #00D4E8 0%, transparent 70%)',
          filter: 'blur(60px)'
        }} />
      
      <div
        className="absolute top-40 right-[10%] w-96 h-96 rounded-full opacity-15 animate-float-delayed pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, #0099AA 0%, transparent 70%)',
          filter: 'blur(80px)'
        }} />
      
      <div
        className="absolute bottom-32 left-[25%] w-64 h-64 rounded-full opacity-10 animate-pulse-glow pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, #00D4E8 0%, transparent 70%)',
          filter: 'blur(50px)'
        }} />
      

      {/* ── Hero content ── */}
      <div className="relative z-10 flex flex-col items-center text-center pt-36 pb-20 px-4 flex-1">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          
          <span className="liquid-glass inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-primary mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Multispeciality Healthcare Clinic · Lucknow
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="font-display text-gradient-hero leading-[0.93] tracking-[-0.04em] font-semibold mb-6"
          style={{
            fontSize: 'clamp(52px, 10vw, 110px)'
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
          
          Compassionate Care
          <br />
          <span className="italic">for Every Stage</span>
          <br />
          of Life
        </motion.h1>

        {/* Doctor attribution */}
        <motion.p
          className="text-primary/80 text-sm font-medium tracking-widest uppercase mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}>
          
          Dr. S. Parveen · Consultant Gynecologist & Physician
        </motion.p>

        {/* Subtext */}
        <motion.p
          className="text-hero-sub text-lg lg:text-xl leading-relaxed max-w-2xl opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
          
          Expert consultation in Gynecology, General Medicine, Skin, Hair &
          Diet Care — trusted by families across Lucknow.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}>
          
          <a
            href="tel:06393746051"
            className="bg-primary text-primary-foreground rounded-full px-8 py-3.5 text-base font-semibold hover:bg-primary/90 transition-all duration-300 glow-teal hover:scale-105 active:scale-100">
            
            Book Appointment
          </a>
          <a
            href="tel:06393746051"
            className="liquid-glass text-foreground rounded-full px-8 py-3.5 text-base font-normal hover:bg-white/5 transition-all duration-300 hover:scale-105 active:scale-100">
            
            Call Now · 063937 46051
          </a>
        </motion.div>

        {/* Trust Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}>
          
          {trustStats.map((stat, i) =>
          <motion.div
            key={stat.label}
            custom={i}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.04, y: -4 }}
            className="glass-card rounded-2xl px-4 py-5 flex flex-col items-center text-center cursor-default">
            
              <span className="text-primary text-2xl font-bold leading-none mb-1">
                {stat.value}
              </span>
              <span className="text-foreground text-sm font-semibold leading-tight">
                {stat.label}
              </span>
              <span className="text-muted-foreground text-xs mt-0.5">
                {stat.sublabel}
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-2 opacity-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 1.2 }}>
          
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            Scroll to explore
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent" />
        </motion.div>
      </div>
    </section>);

}