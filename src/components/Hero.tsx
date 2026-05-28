'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
} as const;

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '8rem 1.5rem 4rem',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blurred glow behind heading */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -55%)',
          width: 'min(800px, 90vw)',
          height: 'min(800px, 90vw)',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(196,85,106,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeInUp}
          style={{
            color: 'var(--muted)',
            fontSize: '0.8rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            fontWeight: 400,
          }}
        >
          Girls&apos; Hostel · Patna, Bihar
        </motion.p>

        {/* H1 */}
        <motion.h1
          variants={fadeInUp}
          style={{
          fontFamily: 'var(--font-inter)',
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            fontWeight: 700,
            lineHeight: 1.05,
            color: 'var(--text)',
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em',
          }}
        >
          Akanksha
          <br />
          <span style={{ color: 'var(--accent)' }}>
            Girls Hostel
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',

            color: 'var(--muted)',
            marginBottom: '3rem',
            fontWeight: 400,
          }}
        >
          A safe home away from home.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <motion.a
            href="#contact"
            id="hero-book-visit"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-block',
              padding: '0.875rem 2rem',
              background: 'var(--accent)',
              color: '#ffffff',
              fontWeight: 500,
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              letterSpacing: '0.04em',
            }}
          >
            Book a Visit
          </motion.a>
          <motion.a
            href="tel:09835071837"
            id="hero-call-now"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-block',
              padding: '0.875rem 2rem',
              background: 'transparent',
              color: 'var(--accent)',
              fontWeight: 500,
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              letterSpacing: '0.04em',
              border: '1px solid var(--accent)',
            }}
          >
            Call Now
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--muted)',
          zIndex: 1,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}


