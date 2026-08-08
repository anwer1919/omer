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
        {/* الشعار ملتصق بأقصى اليسار كما في المثال */}
        <div className="max-w-[1200px] mx-auto h-full pl-2 pr-5 md:px-6 flex items-center justify-between">
          <Link href="#home" className="grid place-items-center">
            <img src="/logo.png" alt="عمر العُمر" className="h-10 md:h-9 w-auto object-contain" />
          </Link>
          <nav dir="rtl" className="max-md:hidden flex gap-10 text-sm text-[var(--muted)]">
            {links.map(([h, t]) => <a key={h} href={h} className="hover:text-[var(--gold)] transition-colors">{t}</a>)}
          </nav>
          <button aria-label="القائمة" onClick={() => setOpen(true)} className="md:hidden text-xl text-[var(--gold)]">☰</button>
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

