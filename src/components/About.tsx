'use client';

import { motion } from 'framer-motion';

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

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '8rem 1.5rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        {/* Left — decorative number + heading */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(6rem, 12vw, 10rem)',
              fontWeight: 800,
              color: 'rgba(196, 85, 106, 0.15)',
              lineHeight: 1,
              marginBottom: '-1rem',
              userSelect: 'none',
              letterSpacing: '-0.02em',
            }}
          >
            01
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: 'var(--text)',
            }}
          >
            About <br />
            <span style={{ color: 'var(--accent)' }}>
              Akanksha
            </span>
          </h2>
        </motion.div>

        {/* Right — paragraph + stats */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          <p style={{ color: 'var(--text)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Akanksha Girls Hostel is a safe, comfortable, and well-maintained
            residence for working women and students in the heart of Patna. Located
            at KRISHNA COMPOUND, Fraser Road — one of the city&apos;s most well-connected
            areas — we offer a nurturing environment where you can focus on your
            career and studies.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.8 }}>
            Our hostel is designed to feel like a true home away from home. With
            attentive management, quality amenities, and a community of like-minded
            women, Akanksha provides the perfect foundation for those building
            their futures in Patna.
          </p>

          {/* Stats row */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: 'flex',
              gap: '2rem',
              paddingTop: '0.75rem',
              flexWrap: 'wrap',
            }}
          >
            {[
              { value: '183+', label: 'Reviews' },
              { value: '3.7★', label: 'Google Rating' },
              { value: '100%', label: 'Women Only' },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '2rem',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    color: 'var(--muted)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginTop: '0.3rem',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


