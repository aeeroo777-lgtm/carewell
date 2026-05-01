'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Review {
  text: string;
  author: string;
  rating: number;
  date: string;
}

const reviews: Review[] = [
  {
    text: 'Doctor listened well and gave clear advice and instructions.',
    author: 'Sunita Sharma',
    rating: 5,
    date: 'March 2025',
  },
  {
    text: 'Nice facilities in clinic. All doctors are good by nature.',
    author: 'Mukesh Kumar',
    rating: 5,
    date: 'February 2025',
  },
  {
    text: 'Very nice experience. Highly recommended for women\'s health.',
    author: 'Mohd Kalimuddin',
    rating: 5,
    date: 'January 2025',
  },
  {
    text: 'Dr. Parveen is very patient and explains everything clearly. Felt very comfortable.',
    author: 'Priya Verma',
    rating: 5,
    date: 'April 2025',
  },
  {
    text: 'Excellent consultation. The clinic is clean and well-maintained. Staff is helpful.',
    author: 'Rekha Singh',
    rating: 5,
    date: 'March 2025',
  },
  {
    text: 'Very knowledgeable doctor. My whole family trusts this clinic.',
    author: 'Anjali Mishra',
    rating: 5,
    date: 'February 2025',
  },
];

// Duplicate for seamless infinite loop
const allReviews = [...reviews, ...reviews];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-3.5 h-3.5 text-amber-400 fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsMarquee() {
  return (
    <section id="reviews" className="relative py-20 overflow-hidden">
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase block mb-1">
              Patient Voices
            </span>
            <h2 className="text-foreground font-semibold text-2xl lg:text-3xl leading-tight">
              Trusted by Patients
              <br />
              <span className="text-muted-foreground font-normal">
                Across Lucknow
              </span>
            </h2>
          </div>

          <div className="glass-card rounded-2xl px-6 py-4 flex items-center gap-4 flex-shrink-0">
            <div className="text-center">
              <div className="text-primary text-3xl font-bold leading-none">4.7</div>
              <StarRating count={5} />
              <div className="text-muted-foreground text-xs mt-1">59+ reviews</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-muted-foreground text-xs leading-relaxed max-w-[100px]">
              Verified on
              <br />
              <span className="text-foreground font-medium">Google Maps</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div
            className="flex gap-5 animate-marquee"
            style={{ width: 'max-content' }}
          >
            {allReviews.map((review, i) => (
              <div
                key={`${review.author}-${i}`}
                className="glass-card rounded-2xl p-6 flex flex-col gap-4 flex-shrink-0"
                style={{ width: '320px' }}
              >
                {/* Stars */}
                <StarRating count={review.rating} />

                {/* Review text */}
                <p className="text-foreground/85 text-sm leading-relaxed flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xs font-semibold">
                      {review.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-foreground text-sm font-medium leading-none mb-0.5">
                      {review.author}
                    </div>
                    <div className="text-muted-foreground text-xs">{review.date}</div>
                  </div>
                  <div className="ml-auto">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 opacity-30" fill="currentColor">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}