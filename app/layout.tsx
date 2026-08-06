import type { Metadata } from 'next';
import { Amiri, IBM_Plex_Sans_Arabic } from 'next/font/google';
import './globals.css';

const amiri = Amiri({ subsets: ['arabic'], weight: ['400', '700'], variable: '--font-head' });
const plex = IBM_Plex_Sans_Arabic({ subsets: ['arabic'], weight: ['300', '400', '500'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'عمر العُمر | Founder & Entrepreneur',
  description: 'الهوية الرقمية الرسمية لعمر العُمر — الشركات، المسيرة، الظهور الإعلامي، والتواصل.',
  openGraph: { title: 'عمر العُمر', description: 'Founder & Entrepreneur', type: 'profile' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${amiri.variable} ${plex.variable}`}>{children}</body>
    </html>
  );
}
