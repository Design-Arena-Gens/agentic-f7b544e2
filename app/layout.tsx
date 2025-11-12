import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Modern Blog',
  description: 'Discover featured stories, recommendations, and the most viewed articles.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'Modern Blog',
    description: 'Featured stories, recommendations, and the most viewed articles.',
    url: 'https://agentic-f7b544e2.vercel.app',
    siteName: 'Modern Blog',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Modern Blog Cover',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-8 sm:py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
