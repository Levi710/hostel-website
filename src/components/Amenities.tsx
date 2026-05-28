'use client';

import { motion } from 'framer-motion';
import {
  Bed,
  Shield,
  Wifi,
  UtensilsCrossed,
  Zap,
  FlameKindling,
  type LucideIcon,
} from 'lucide-react';

interface Amenity {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

const AMENITIES: Amenity[] = [
  { Icon: Bed,             title: 'Furnished Rooms',    desc: 'Comfortable beds, study tables, wardrobes' },
  { Icon: Shield,          title: '24/7 Security',      desc: 'CCTV surveillance and gated entry' },
  { Icon: Wifi,            title: 'High-Speed WiFi',    desc: 'Reliable internet across all floors' },
  { Icon: UtensilsCrossed, title: 'Meals Provided',     desc: 'Nutritious home-style food daily' },
  { Icon: Zap,             title: 'Power Backup',       desc: 'Uninterrupted 24hr electricity' },
  { Icon: FlameKindling,    title: 'Fire Safety',        desc: 'Fire extinguishers & emergency exits on premises' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
};

export default function Amenities() {
  return (
    <section id="amenities" style={{ padding: '8rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Heading */}
        <motion.div
          variants={headingVariants}
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
            What We Offer
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
            Life at{' '}
            <span style={{ color: 'var(--accent)' }}>
              Akanksha
            </span>
          </h2>
        </motion.div>

        {/* Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {AMENITIES.map((amenity) => (
            <AmenityCard key={amenity.title} amenity={amenity} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AmenityCard({ amenity }: { amenity: Amenity }) {
  const { Icon, title, desc } = amenity;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.03,
        borderColor: 'rgba(196, 85, 106, 0.5)',
        boxShadow: '0 0 32px rgba(196, 85, 106, 0.12)',
      }}
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        padding: '2rem',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        cursor: 'default',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
      }}
    >
      {/* Icon container */}
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          background: 'rgba(196, 85, 106, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
        }}
      >
        <Icon size={22} color="var(--accent)" strokeWidth={1.5} />
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '1.35rem',
          fontWeight: 600,
          color: 'var(--text)',
          marginBottom: '0.5rem',
        }}
      >
        {title}
      </h3>
      <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.65 }}>
        {desc}
      </p>
    </motion.div>
  );
}



