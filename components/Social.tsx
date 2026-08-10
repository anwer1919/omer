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
    <section id="contact" className="overflow-hidden py-2 md:py-4 px-3 md:px-6 text-center bg-[var(--bg3)]">
      <div dir="ltr" className="max-w-[1000px] mx-auto flex justify-center md:gap-6">
        {items.map(({ Icon, label, href }) => (
          <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
             className="flex flex-col items-center gap-1 md:gap-2 max-md:px-1 md:px-4 py-2 text-[#d9a066] hover:text-[#e8b880] transition-colors">
            <Icon className="size-4 md:size-5" />
            <span dir="ltr" className="text-[7px] md:text-[11px] max-md:tracking-normal md:tracking-wider text-[#a89080]">{label}</span>
          </a>
        ))}
        <div className="relative">
          <button onClick={() => setSites(!sites)} className="flex flex-col items-center gap-1 md:gap-2 max-md:px-1 md:px-4 py-2 text-[#d9a066] hover:text-[#e8b880] transition-colors">
            <FaGlobe className="size-4 md:size-5" />
            <span dir="ltr" className="text-[7px] md:text-[11px] max-md:tracking-normal md:tracking-wider text-[#a89080]">Websites</span>
          </button>
          {sites && (
            <div dir="rtl" className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 flex flex-col gap-2 rounded-[6px] bg-[var(--card)] border border-[#3a2a1a] p-4 text-sm whitespace-nowrap z-10">
              <a href="https://howkworld.com/ar" target="_blank" className="text-[var(--text)] hover:text-[#d9a066] transition-colors">HOWK</a>
              <a href="https://edmarksa.com/" target="_blank" className="text-[var(--text)] hover:text-[#d9a066] transition-colors">EDMARK</a>
            </div>
          )}
        </div>
      </div>
      <p dir="ltr" className="mt-1 md:mt-3 text-[12px] md:text-sm text-[#a89080] tracking-wider flex items-center justify-center flex-wrap gap-2 md:gap-3">
        <a href="mailto:EDMARK@live.in" className="flex items-center gap-2 hover:text-[#d9a066] transition-colors">
          <FaEnvelope className="size-3.5 md:size-4 text-[#d9a066]" />
          EDMARK@live.in
        </a>
        <span className="mx-1 text-[#a89080]">•</span>
        <a href="https://omar-alomar.com" className="flex items-center gap-2 hover:text-[#d9a066] transition-colors">
          <FaGlobe className="size-3.5 md:size-4 text-[#d9a066]" />
          omar-alomar.com
        </a>
      </p>
    </section>
  );
}
