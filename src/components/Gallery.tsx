'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  seed: number;
}

const IMAGES: GalleryImage[] = [
  { src: '/gallery/room1.png',       alt: 'Shared room with two beds',   width: 1020, height: 720,  seed: 1 },
  { src: '/gallery/room2.png',       alt: 'Furnished bedroom interior',  width: 1020, height: 720,  seed: 2 },
  { src: '/gallery/reception.png',   alt: 'Reception and office area',   width: 960,  height: 720,  seed: 3 },
  { src: '/gallery/signboard.png',   alt: 'Akanksha Girls Hostel board', width: 960,  height: 720,  seed: 4 },
  { src: '/gallery/fire-safety.png', alt: 'Fire extinguisher on site',   width: 720,  height: 960,  seed: 5 },
];

const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcvWZNPQAHbgK5knC4jgAAAABJRU5ErkJggg==';

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
};

export default function Gallery() {
  return (
    <section id="gallery" style={{ padding: '8rem 1.5rem' }}>
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
            Our Space
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
            A Glimpse{' '}
            <span style={{ color: 'var(--accent)' }}>
              Inside
            </span>
          </h2>
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="masonry-grid"
        >
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.seed}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
              className="masonry-item"
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: `${img.width} / ${img.height}`,
                  overflow: 'hidden',
                  borderRadius: '12px',
                }}
                className="gallery-wrapper"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.35s ease, filter 0.35s ease',
                  }}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  className="gallery-img"
                />
                <div className="gallery-overlay" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .masonry-grid {
          columns: 3;
          column-gap: 1rem;
        }
        .masonry-item {
          margin-bottom: 1rem;
          break-inside: avoid;
        }
        .gallery-wrapper { cursor: pointer; }
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(196, 85, 106, 0.15);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 12px;
        }
        .gallery-wrapper:hover .gallery-img {
          transform: scale(1.04);
          filter: brightness(1.1);
        }
        .gallery-wrapper:hover .gallery-overlay { opacity: 1; }

        @media (max-width: 640px) { .masonry-grid { columns: 1; } }
        @media (min-width: 641px) and (max-width: 900px) { .masonry-grid { columns: 2; } }
      `}</style>
    </section>
  );
}



