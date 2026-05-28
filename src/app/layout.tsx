import type { Metadata } from 'next';
import { Inter, DM_Sans } from 'next/font/google';
import './globals.css';
import ParticleCanvas from '@/components/ParticleCanvas';
import Navbar from '@/components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Akanksha Girls Hostel — Safe & Comfortable Hostel in Patna, Bihar',
  description:
    'Akanksha Girls Hostel offers safe, comfortable, and well-maintained accommodation for working women and students in Patna, Bihar. Located on Fraser Road near Jagat Trade Center. Call 098350 71837.',
  keywords: [
    'girls hostel Patna',
    'girls hostel Fraser Road Patna',
    'working women hostel Patna',
    'student hostel Patna Bihar',
    'Akanksha Girls Hostel',
    'hostel near Jagat Trade Center Patna',
  ],
  openGraph: {
    title: 'Akanksha Girls Hostel — Patna, Bihar',
    description:
      'A safe home away from home. Comfortable accommodation for working women and students in the heart of Patna.',
    type: 'website',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body>
        <ParticleCanvas />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
