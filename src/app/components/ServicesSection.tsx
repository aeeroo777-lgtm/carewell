'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';

interface Service {
  icon: string;
  title: string;
  description: string;
  accent: string;
}

const services: Service[] = [
  {
    icon: 'HeartIcon',
    title: 'Gynecology Consultation',
    description:
      'Comprehensive women\'s health consultations covering hormonal health, menstrual disorders, PCOS, and reproductive care.',
    accent: '#FF6B9D',
  },
  {
    icon: 'UserGroupIcon',
    title: 'Pregnancy & Women Care',
    description:
      'Expert antenatal and postnatal care, high-risk pregnancy management, and complete maternal wellness support.',
    accent: '#00D4E8',
  },
  {
    icon: 'SparklesIcon',
    title: 'Skin & Hair Treatment',
    description:
      'Evidence-based dermatology and trichology consultations for acne, pigmentation, hair fall, and scalp health.',
    accent: '#A78BFA',
  },
  {
    icon: 'ClipboardDocumentCheckIcon',
    title: 'Physician Consultation',
    description:
      'General medicine consultations for fever, infections, chronic conditions, and preventive health check-ups.',
    accent: '#34D399',
  },
  {
    icon: 'ScaleIcon',
    title: 'Diet & Wellness',
    description:
      'Personalised diet plans and nutrition counselling for weight management, hormonal balance, and lifestyle disorders.',
    accent: '#FBBF24',
  },
  {
    icon: 'HomeIcon',
    title: 'Family Healthcare',
    description:
      'Holistic care for the entire family — from paediatric concerns to senior wellness, all under one trusted roof.',
    accent: '#F87171',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, #00D4E8 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Our Specialities
          </span>
          <h2 className="font-display text-foreground font-semibold leading-tight mb-4"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
          >
            Comprehensive Healthcare
            <br />
            <span className="text-gradient-hero italic">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Personalised treatment with modern care and experienced consultation
            — all at one trusted clinic.
          </p>
        </motion.div>

        {/* Services Grid — 6 cards, 3 cols desktop, 2 tablet, 1 mobile */}
        {/* BENTO AUDIT:
          Array: [Gynecology, Pregnancy, Skin&Hair, Physician, Diet, Family] = 6 cards
          Row 1 (desktop): [col-1: Gynecology] [col-2: Pregnancy] [col-3: Skin&Hair]
          Row 2 (desktop): [col-1: Physician]  [col-2: Diet]      [col-3: Family]
          Placed 6/6 ✓
        */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ scale: 1.025, y: -6 }}
              className="glass-card rounded-2xl p-7 flex flex-col gap-5 cursor-default group transition-all duration-300 hover:border-primary/20"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `${service.accent}15`,
                  border: `1px solid ${service.accent}30`,
                }}
              >
                <Icon
                  name={service.icon as Parameters<typeof Icon>[0]['name']}
                  size={22}
                  className="transition-transform duration-300 group-hover:scale-110"
                  style={{ color: service.accent } as React.CSSProperties}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-foreground font-semibold text-lg leading-snug">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover indicator */}
              <div
                className="mt-auto flex items-center gap-1.5 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: service.accent }}
              >
                <span>Learn more</span>
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}