import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy', href: '#' },
  { label: 'hplix.in', href: 'https://hplix.in' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Single row: Logo | Links | Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="CarewellClinic home">
            <AppLogo
              size={28}
              iconName="HeartIcon"
              className="text-primary group-hover:scale-105 transition-transform duration-200"
            />
            <span className="text-foreground/80 font-medium text-sm tracking-tight hidden sm:block">
              Carewell Clinic
            </span>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer navigation">
            {footerLinks?.map((link, i) => (
              <React.Fragment key={link?.label}>
                {i > 0 && (
                  <span className="text-border hidden sm:block" aria-hidden>·</span>
                )}
                <Link
                  href={link?.href}
                  target={link?.href?.startsWith('http') ? '_blank' : undefined}
                  rel={link?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
                >
                  {link?.label}
                </Link>
              </React.Fragment>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm font-medium whitespace-nowrap">
            © 2026 Carewell Clinic
          </p>
        </div>
      </div>
    </footer>
  );
}