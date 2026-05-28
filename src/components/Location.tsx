'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: 'easeOut' as const },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: 'easeOut' as const },
  },
};

const TRAVEL_CHIPS = [
  { emoji: '🚌', label: '5 min', title: 'Bus' },
  { emoji: '🚗', label: '1 min', title: 'Car' },
  { emoji: '🚶', label: '1 min', title: 'Walk' },
];

export default function Location() {
  return (
    <section id="location" style={{ padding: '8rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p
            style={{
              color: 'var(--accent)',
              fontSize: '0.75rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            Find Us
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              color: 'var(--text)',
              lineHeight: 1.1,
            }}
          >
            Our{' '}
            <span style={{ color: 'var(--accent)' }}>
              Location
            </span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Address Info Card */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '2.5rem',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '1.6rem',
                fontWeight: 600,
                color: 'var(--text)',
              }}
            >
              Akanksha Girls Hostel
            </h3>

            {/* Address */}
            <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, marginTop: '2px' }}>
                <MapPin size={18} color="var(--accent)" strokeWidth={1.5} />
              </div>
              <p style={{ color: 'var(--text)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                KRISHNA COMPOUND, Fraser Rd,<br />
                Behind Jagat Trade Center,<br />
                Old Jakkanpur, Lodipur,<br />
                Patna, Bihar 800001
              </p>
            </div>

            {/* Phone */}
            <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'center' }}>
              <Phone size={18} color="var(--accent)" strokeWidth={1.5} />
              <a
                href="tel:09835071837"
                style={{
                  color: 'var(--text)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--accent)')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--text)')
                }
              >
                098350 71837
              </a>
            </div>

            {/* Travel Time Chips */}
            <div>
              <p
                style={{
                  color: 'var(--muted)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                From Patna Junction
              </p>
              <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
                {TRAVEL_CHIPS.map((chip) => (
                  <span
                    key={chip.title}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      padding: '0.35rem 0.75rem',
                      background: 'rgba(196, 85, 106, 0.12)',
                      border: '1px solid var(--border)',
                      borderRadius: '999px',
                      fontSize: '0.8rem',
                      color: 'var(--text)',
                    }}
                  >
                    <span>{chip.emoji}</span>
                    <span>{chip.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Google Maps iframe */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
            }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Akanksha+Girls+Hostel+Fraser+Rd+Patna&output=embed"
              width="100%"
              height="380"
              style={{
                display: 'block',
                border: 'none',

              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Akanksha Girls Hostel Location on Google Maps"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}



