'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const links = [['#work','الخبرة والأعمال'],['#about','نبذة'],['#contact','تواصل']];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(scrollY > 40);
    addEventListener('scroll', f);
    return () => removeEventListener('scroll', f);
  }, []);
  return (
    <>
      <header dir="ltr" className={`fixed top-0 inset-x-0 z-40 h-[72px] transition-colors ${scrolled ? 'bg-[var(--bg)]/90 backdrop-blur' : ''}`}>
        <div className="max-w-[1200px] mx-auto h-full pl-1 pr-4 md:px-6 flex items-start justify-between">
          <Link href="#home" className="grid place-items-center pt-1 bg-black">
            <img src="/logo.png" alt="عمر العُمر" className="h-12 md:h-10 w-auto object-contain hue-rotate-[-12deg] saturate-[1.3]" />
          </Link>
          <nav dir="rtl" className="max-md:hidden flex gap-10 text-sm text-[var(--muted)] pt-6">
            {links.map(([h, t]) => <a key={h} href={h} className="hover:text-[var(--gold)] transition-colors">{t}</a>)}
          </nav>
          {/* معكوس: ☰ أقصى اليمين ثم الرئيسية على يسارها */}
          <div dir="rtl" className="flex items-start gap-4">
            <button aria-label="القائمة" onClick={() => setOpen(true)} className="md:hidden text-xl text-[var(--gold)] pt-3">☰</button>
            <a href="#home" className="flex flex-col items-center gap-1.5 pt-4 text-sm text-[var(--gold)] hover:text-[#d8a97e] transition-colors">
              الرئيسية
              <span className="h-px w-7 bg-[var(--gold)]" />
            </a>
          </div>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-50 bg-[var(--bg)] grid place-items-center">
          <button aria-label="إغلاق" onClick={() => setOpen(false)} className="absolute top-6 left-6 text-2xl">✕</button>
          <nav className="flex flex-col gap-8 text-center text-xl">
            {links.map(([h, t]) => <a key={h} href={h} onClick={() => setOpen(false)}>{t}</a>)}
          </nav>
        </div>
      )}
    </>
  );
}
