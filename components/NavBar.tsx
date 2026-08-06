'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const links = [['#about','نبذة'],['#companies','الشركات'],['#journey','المسيرة'],['#media','الإعلام'],['#gallery','المعرض'],['#contact','تواصل']];

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
      <header className={`fixed top-0 inset-x-0 z-40 h-[72px] transition ${scrolled ? 'bg-[var(--bg)] shadow-lg' : ''}`}>
        <div className="max-w-[1200px] mx-auto h-full px-6 flex items-center justify-between">
          <Link href="/" className="text-xl">عمر العُمر</Link>
          <nav className="max-md:hidden flex gap-6 text-sm text-[var(--muted)]">
            {links.map(([h, t]) => <a key={h} href={h} className="hover:text-[var(--gold)]">{t}</a>)}
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/booking" className="max-md:hidden h-10 px-6 rounded-full bg-[var(--gold)] text-black grid place-items-center text-sm hover:bg-[var(--gold-hover)]">حجز اجتماع</Link>
            <button aria-label="القائمة" onClick={() => setOpen(true)} className="md:hidden text-2xl">☰</button>
          </div>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-50 bg-[var(--bg)] grid place-items-center">
          <button aria-label="إغلاق" onClick={() => setOpen(false)} className="absolute top-6 left-6 text-2xl">✕</button>
          <nav className="flex flex-col gap-6 text-center text-2xl">
            {links.map(([h, t]) => <a key={h} href={h} onClick={() => setOpen(false)}>{t}</a>)}
            <Link href="/booking" onClick={() => setOpen(false)} className="h-[52px] px-10 rounded-full bg-[var(--gold)] text-black grid place-items-center text-lg">حجز اجتماع</Link>
          </nav>
        </div>
      )}
    </>
  );
}
