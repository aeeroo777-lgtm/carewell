'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Specialities', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="CarewellClinic home">
            <AppLogo
              size={38}
              iconName="HeartIcon"
              className="text-primary group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-foreground font-semibold text-base tracking-tight">
                Carewell Clinic
              </span>
              <span className="text-muted-foreground text-[11px] font-normal tracking-wide hidden sm:block">
                Dr. S. Parveen · Gynecologist & Physician
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks?.map((link) => (
              <Link
                key={link?.label}
                href={link?.href}
                className="text-foreground/75 text-sm font-medium hover:text-primary transition-colors duration-200 relative group"
              >
                {link?.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:06393746051"
              className="bg-primary text-primary-foreground rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-all duration-300 glow-teal-sm"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </nav>

        {/* Gradient divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      </header>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col pt-24 px-8 lg:hidden"
          onClick={handleLinkClick}
        >
          <nav className="flex flex-col gap-6">
            {navLinks?.map((link) => (
              <Link
                key={link?.label}
                href={link?.href}
                onClick={handleLinkClick}
                className="text-foreground/80 text-2xl font-medium hover:text-primary transition-colors duration-200 border-b border-border/30 pb-4"
              >
                {link?.label}
              </Link>
            ))}
            <a
              href="tel:06393746051"
              onClick={handleLinkClick}
              className="mt-4 bg-primary text-primary-foreground rounded-full px-8 py-4 text-base font-semibold text-center hover:bg-primary/90 transition-all duration-300"
            >
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </>
  );
}