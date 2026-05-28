'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Star } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '8rem 1.5rem',
        background:
          'radial-gradient(ellipse at 50% 60%, rgba(196,85,106,0.06) 0%, transparent 70%)',
      }}
    >
      <div
        style={{
          maxWidth: '540px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Section heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
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
            Reach Out
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              color: 'var(--text)',
              lineHeight: 1.1,
              marginBottom: '3rem',
            }}
          >
            Get in{' '}
            <span style={{ color: 'var(--accent)' }}>
              Touch
            </span>
          </h2>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '20px',
            padding: '2.5rem 2rem',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
            alignItems: 'center',
          }}
        >
          {/* Google Rating Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1.25rem',
              background: 'rgba(251, 191, 36, 0.08)',
              border: '1px solid rgba(251, 191, 36, 0.2)',
              borderRadius: '999px',
            }}
          >
            <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
              {[1, 2, 3].map((i) => (
                <Star key={i} size={13} fill="#fbbf24" color="#fbbf24" />
              ))}
              {/* Partial star for 3.7 */}
              <span style={{ fontSize: '13px', color: '#fbbf24', lineHeight: 1 }}>★</span>
            </div>
            <span
              style={{
                color: '#fbbf24',
                fontSize: '0.9rem',
                fontWeight: 600,
              }}
            >
              3.7
            </span>
            <span style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>
              · 183 reviews
            </span>
          </div>

          {/* Phone Number */}
          <div>
            <p
              style={{
                color: 'var(--muted)',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}
            >
              Call or WhatsApp
            </p>
            <a
              href="tel:09835071837"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 600,
                color: 'var(--text)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                display: 'block',
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

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.875rem',
              width: '100%',
            }}
          >
            <motion.a
              id="contact-call-now"
              href="tel:09835071837"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.875rem 1.5rem',
                background: 'var(--accent)',
                color: '#ffffff',
                fontWeight: 500,
                borderRadius: '10px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                letterSpacing: '0.04em',
                width: '100%',
              }}
            >
              <Phone size={16} />
              Call Now
            </motion.a>

            <motion.a
              id="contact-whatsapp"
              href="https://wa.me/919835071837"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.875rem 1.5rem',
                background: 'transparent',
                color: '#25d366',
                fontWeight: 500,
                borderRadius: '10px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                letterSpacing: '0.04em',
                border: '1px solid rgba(37, 211, 102, 0.3)',
                width: '100%',
              }}
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



