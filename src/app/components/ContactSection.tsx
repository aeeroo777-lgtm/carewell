'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';

interface ContactItem {
  icon: string;
  label: string;
  value: string;
  sub?: string;
  href?: string;
  accentColor: string;
}

const contactItems: ContactItem[] = [
  {
    icon: 'MapPinIcon',
    label: 'Clinic Address',
    value: 'Maikaley Tiraha, Kanchana Bihari Marg',
    sub: 'near Sachin Hotel, Kalyanpur, Lucknow, UP 226022',
    accentColor: '#00D4E8',
  },
  {
    icon: 'PhoneIcon',
    label: 'Phone',
    value: '063937 46051',
    sub: 'Call or WhatsApp',
    href: 'tel:06393746051',
    accentColor: '#34D399',
  },
  {
    icon: 'ClockIcon',
    label: 'Clinic Hours',
    value: 'Open Daily · 10 AM – 10 PM',
    sub: 'Mon – Sun · No appointment needed',
    accentColor: '#FBBF24',
  },
  {
    icon: 'GlobeAltIcon',
    label: 'Website',
    value: 'hplix.in',
    sub: 'Online information portal',
    href: 'https://hplix.in',
    accentColor: '#A78BFA',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background orb */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #00D4E8 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4">
            Find Us
          </span>
          <h2
            className="font-display text-foreground font-semibold leading-tight mb-4"
            style={{ fontSize: 'clamp(28px, 4.5vw, 48px)' }}
          >
            Visit Carewell Clinic
            <br />
            <span className="text-gradient-hero italic">Today</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
            Walk in or call ahead — our team is ready to help you seven days a
            week.
          </p>
        </motion.div>

        {/* Main grid: info card + map */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact info card */}
          <motion.div
            className="glass-card rounded-3xl p-8 lg:p-10"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center">
                <Icon name="BuildingOfficeIcon" size={20} className="text-primary" />
              </div>
              <div>
                <div className="text-foreground font-semibold">Carewell Clinic</div>
                <div className="text-muted-foreground text-xs">
                  Dr. S. Parveen · Consultant Gynecologist & Physician
                </div>
              </div>
            </div>

            <motion.div
              className="space-y-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {contactItems.map((item) => (
                <motion.div key={item.label} variants={itemVariants}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/[0.03] transition-colors duration-200 group cursor-pointer"
                    >
                      <ContactItemContent item={item} />
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/[0.03] transition-colors duration-200 group">
                      <ContactItemContent item={item} />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:06393746051"
                className="flex-1 bg-primary text-primary-foreground rounded-full px-6 py-3 text-sm font-semibold text-center hover:bg-primary/90 transition-all duration-300 glow-teal-sm hover:scale-105 active:scale-100"
              >
                Call Now
              </a>
              <a
                href="https://maps.google.com/?q=Carewell+Clinic+Kalyanpur+Lucknow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 liquid-glass text-foreground rounded-full px-6 py-3 text-sm font-medium text-center hover:bg-white/5 transition-all duration-300 hover:scale-105 active:scale-100"
              >
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            className="glass-card rounded-3xl overflow-hidden"
            style={{ minHeight: '480px' }}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Map embed placeholder visual */}
            <div className="relative w-full h-full min-h-[480px] flex flex-col">
              {/* Simulated map background */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="w-full h-full"
                  style={{
                    background:
                      'linear-gradient(135deg, #0d1b2a 0%, #0f2236 25%, #0a1929 50%, #0d1f33 75%, #0a1929 100%)',
                  }}
                />
                {/* Grid lines simulating map */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-10"
                  preserveAspectRatio="none"
                >
                  {Array.from({ length: 12 }).map((_, i) => (
                    <line
                      key={`h${i}`}
                      x1="0"
                      y1={`${(i / 12) * 100}%`}
                      x2="100%"
                      y2={`${(i / 12) * 100}%`}
                      stroke="#00D4E8"
                      strokeWidth="0.5"
                    />
                  ))}
                  {Array.from({ length: 16 }).map((_, i) => (
                    <line
                      key={`v${i}`}
                      x1={`${(i / 16) * 100}%`}
                      y1="0"
                      x2={`${(i / 16) * 100}%`}
                      y2="100%"
                      stroke="#00D4E8"
                      strokeWidth="0.5"
                    />
                  ))}
                </svg>

                {/* Road lines */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-20"
                  preserveAspectRatio="none"
                >
                  <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#00D4E8" strokeWidth="3" />
                  <line x1="40%" y1="0" x2="40%" y2="100%" stroke="#00D4E8" strokeWidth="2" />
                  <line x1="70%" y1="0" x2="70%" y2="100%" stroke="#00D4E8" strokeWidth="1.5" />
                  <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#00D4E8" strokeWidth="1" />
                  <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#00D4E8" strokeWidth="1" />
                </svg>
              </div>

              {/* Pin marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center glow-teal shadow-xl">
                    <Icon name="MapPinIcon" size={22} className="text-primary-foreground" variant="solid" />
                  </div>
                  <div className="w-2 h-2 rounded-full bg-primary/50 mt-1 blur-sm" />
                </motion.div>
              </div>

              {/* Location label */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
                <div className="glass-card rounded-xl px-5 py-3 text-center">
                  <div className="text-foreground text-sm font-semibold">Carewell Clinic</div>
                  <div className="text-muted-foreground text-xs mt-0.5">
                    Kalyanpur, Lucknow · UP 226022
                  </div>
                </div>
              </div>

              {/* Open in Maps button */}
              <div className="absolute top-4 right-4 z-10">
                <a
                  href="https://maps.google.com/?q=Maikaley+Tiraha+Kanchana+Bihari+Marg+Kalyanpur+Lucknow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass rounded-xl px-4 py-2 text-xs font-medium text-primary hover:bg-white/5 transition-colors flex items-center gap-2"
                >
                  <Icon name="ArrowTopRightOnSquareIcon" size={14} className="text-primary" />
                  Open in Maps
                </a>
              </div>

              {/* Accepting GPay badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="liquid-glass rounded-xl px-3 py-2 flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-primary">G</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Accepts GPay</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItemContent({ item }: { item: ContactItem }) {
  return (
    <>
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `${item.accentColor}15`,
          border: `1px solid ${item.accentColor}30`,
        }}
      >
        <Icon
          name={item.icon as Parameters<typeof Icon>[0]['name']}
          size={18}
          style={{ color: item.accentColor } as React.CSSProperties}
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-muted-foreground text-xs font-medium mb-0.5 uppercase tracking-wider">
          {item.label}
        </div>
        <div className="text-foreground text-sm font-semibold leading-snug">
          {item.value}
        </div>
        {item.sub && (
          <div className="text-muted-foreground text-xs mt-0.5">{item.sub}</div>
        )}
      </div>
      {item.href && (
        <Icon
          name="ChevronRightIcon"
          size={16}
          className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0 mt-1"
        />
      )}
    </>
  );
}