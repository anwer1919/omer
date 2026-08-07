'use client';
import { useState } from 'react';
import { FaSnapchat, FaTiktok, FaXTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaGlobe } from 'react-icons/fa6';

const items = [
  { Icon: FaSnapchat, label: 'سناب شات', href: 'https://www.snapchat.com/add/h77_cz' },
  { Icon: FaTiktok, label: 'تيك توك', href: 'https://www.tiktok.com/@h77_cz' },
  { Icon: FaXTwitter, label: 'تويتر', href: 'https://x.com/h77_cz' },
  { Icon: FaInstagram, label: 'إنستقرام', href: '#' },
  { Icon: FaYoutube, label: 'يوتيوب', href: '#' },
  { Icon: FaLinkedinIn, label: 'لينكدان', href: '#' },
];

export default function Social() {
  const [sites, setSites] = useState(false);
  return (
    <section id="contact" className="pt-16 pb-8 px-6">
      <div dir="ltr" className="max-w-[1100px] mx-auto flex max-md:flex-wrap justify-center md:divide-x md:divide-[var(--divider)]">
        {items.map(({ Icon, label, href }) => (
          <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
             className="flex flex-col items-center gap-3 px-7 py-6 text-[var(--gold)] hover:text-[var(--gold-hover)]">
            <Icon className="size-6" />
            <span className="text-xs text-[var(--text)]">{label}</span>
          </a>
        ))}
        <div className="relative">
          <button onClick={() => setSites(!sites)} className="flex flex-col items-center gap-3 px-7 py-6 text-[var(--gold)] hover:text-[var(--gold-hover)]">
            <FaGlobe className="size-6" />
            <span className="text-xs text-[var(--text)]">المواقع</span>
          </button>
          {sites && (
            <div dir="rtl" className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 flex flex-col gap-2 rounded-[6px] bg-[var(--card)] border border-[var(--divider)] p-4 text-sm whitespace-nowrap z-10">
              <a href="https://howkworld.com/ar" target="_blank" className="hover:text-[var(--gold)]">HOWK</a>
              <a href="https://edmarksa.com/" target="_blank" className="hover:text-[var(--gold)]">EDMARK</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
