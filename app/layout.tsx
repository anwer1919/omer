import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic, Inter } from 'next/font/google';
import './globals.css';

const plex = IBM_Plex_Sans_Arabic({ subsets: ['arabic'], weight: ['400', '500', '600'], variable: '--font-body' });
const inter = Inter({ subsets: ['latin'], variable: '--font-en' });

export const metadata: Metadata = {
  title: 'عمر العُمر | Founder & Entrepreneur',
  description: 'الهوية الرقمية الرسمية لعمر العُمر — الخبرة والأعمال والتواصل.',
  openGraph: { title: 'عمر العُمر', description: 'Founder & Entrepreneur', type: 'profile' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${plex.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
