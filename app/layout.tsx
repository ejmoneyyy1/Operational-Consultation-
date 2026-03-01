import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { ArchitecturalGrid } from '@/components/ArchitecturalGrid';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | The Earth Atelier',
    default: 'The Earth Atelier | Operational Clarity Architect',
  },
  description: 'I diagnose, structure, and execute complex operations where ownership, clarity, and flow break down. Specializing in manufacturing, logistics, supply chain, and construction.',
  keywords: ['operational clarity', 'systems thinking', 'manufacturing consultant', 'supply chain logistics', 'operational execution'],
  openGraph: {
    title: 'The Earth Atelier | Operational Clarity Architect',
    description: 'I help organizations bring clarity, structure, and execution into complex operational systems.',
    url: 'https://your-vercel-domain.vercel.app', // Update this once deployed
    siteName: 'The Earth Atelier',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Earth Atelier',
    description: 'Diagnose the real system. Structure the path forward. Execute until stable.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ArchitecturalGrid />
        <Nav />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
