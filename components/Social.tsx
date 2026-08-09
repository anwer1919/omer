'use client';
import { useState } from 'react';
import { FaSnapchat, FaTiktok, FaXTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaGlobe, FaEnvelope } from 'react-icons/fa6';

const items = [
  { Icon: FaSnapchat, label: 'Snapchat', href: 'https://www.snapchat.com/add/h77_cz' },
  { Icon: FaTiktok, label: 'TikTok', href: 'https://www.tiktok.com/@h77_cz' },
  { Icon: FaXTwitter, label: 'X', href: 'https://x.com/h77_cz' },
  { Icon: FaInstagram, label: 'Instagram', href: '#' },
  { Icon: FaYoutube, label: 'YouTube', href: '#' },
  { Icon: FaLinkedinIn, label: 'LinkedIn', href: '#' },
];

export default function Social() {
  const [sites, setSites] = useState(false);
  return (
    <section id="contact" className="overflow-hidden pt-14 pb-6 max-md:pt-1 max-md:pb-0.5 px-3 md:px-6 text-center bg-[var(--bg3)]">
      <div dir="ltr" className="max-w-[1000px] mx-auto flex justify-center md:gap-6">
        {items.map(({ Icon, label, href }) => (
          <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
             className="flex flex-col items-center gap-2 md:gap-3 max-md:px-1 md:px-4 py-3 text-[var(--gold)] hover:text-[#d8a97e] transition-colors">
            <Icon className="size-4 md:size-5" />
            <span dir="ltr" className="text-[7px] md:text-[11px] max-md:tracking-normal md:tracking-wider text-[var(--muted)]">{label}</span>
          </a>
        ))}
        <div className="relative">
          <button onClick={() => setSites(!sites)} className="flex flex-col items-center gap-2 md:gap-3 max-md:px-1 md:px-4 py-3 text-[var(--gold)] hover:text-[#d8a97e] transition-colors">
            <FaGlobe className="size-4 md:size-5" />
            <span dir="ltr" className="text-[7px] md:text-[11px] max-md:tracking-normal md:tracking-wider text-[var(--muted)]">Websites</span>
          </button>
          {sites && (
            <div dir="rtl" className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 flex flex-col gap-2 rounded-[6px] bg-[var(--card)] border border-[var(--divider)] p-4 text-sm whitespace-nowrap z-10">
              <a href="https://howkworld.com/ar" target="_blank" className="hover:text-[var(--gold)]">HOWK</a>
              <a href="https://edmarksa.com/" target="_blank" className="hover:text-[var(--gold)]">EDMARK</a>
            </div>
          )}
        </div>
      </div>
      <p dir="ltr" className="mt-2 md:mt-10 text-[12px] md:text-sm text-[var(--muted)] tracking-wider flex items-center justify-center flex-wrap gap-2 md:gap-3">
        <a href="mailto:EDMARK@live.in" className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors">
          <FaEnvelope className="size-3.5 md:size-4 text-[var(--gold)]" />
          EDMARK@live.in
        </a>
        <span className="mx-1">•</span>
        <a href="https://omar-alomar.com" className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors">
          <FaGlobe className="size-3.5 md:size-4 text-[var(--gold)]" />
          omar-alomar.com
        </a>
      </p>
    </section>
  );
}
