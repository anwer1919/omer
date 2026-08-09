import type { Metadata } from 'next';
import { Amiri, Aref_Ruqaa } from 'next/font/google';
import './globals.css';

const amiri = Amiri({ subsets: ['arabic', 'latin'], weight: ['400', '700'], variable: '--font-amiri' });
const arefRuqaa = Aref_Ruqaa({ subsets: ['arabic', 'latin'], weight: ['400', '700'], variable: '--font-aref' });

export const metadata: Metadata = {
  title: 'عمر العُمر — مؤسس ورائد أعمال',
  description: 'أبني علامات تستحق أن تبقى',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${amiri.variable} ${arefRuqaa.variable}`}>
      <body className={amiri.className}>{children}</body>
    </html>
  );
}
