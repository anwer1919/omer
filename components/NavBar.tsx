'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const links = [['#home','الرئيسية'],['#projects','الشركات'],['#about','السيرة الذاتية'],['#contact','تواصل']];

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
      <header dir="ltr" className={`fixed top-0 inset-x-0 z-40 h-[80px] transition ${scrolled ? 'bg-black/90 backdrop-blur' : ''}`}>
        <div className="max-w-[1200px] mx-auto h-full px-6 flex items-center justify-between">
          <Link href="#home" style={{ fontFamily: 'var(--font-head)' }} className="text-2xl text-[var(--gold)] tracking-tighter">OA</Link>
          <nav dir="rtl" className="max-md:hidden flex gap-10 text-sm">
            {links.map(([h, t], i) => (
              <a key={h} href={h} className={i === 0 ? 'text-[var(--gold)] border-b border-[var(--gold)] pb-2' : 'hover:text-[var(--gold)]'}>{t}</a>
            ))}
          </nav>
          <button aria-label="القائمة" onClick={() => setOpen(true)} className="md:hidden text-2xl text-[var(--gold)]">☰</button>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-50 bg-black grid place-items-center">
          <button aria-label="إغلاق" onClick={() => setOpen(false)} className="absolute top-6 left-6 text-2xl">✕</button>
          <nav className="flex flex-col gap-8 text-center text-2xl">
            {links.map(([h, t]) => <a key={h} href={h} onClick={() => setOpen(false)}>{t}</a>)}
          </nav>
        </div>
      )}
    </>
  );
}
