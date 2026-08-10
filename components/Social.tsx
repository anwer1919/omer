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
    <section id="contact" className="overflow-hidden py-0.5 md:py-1 px-2 md:px-4 text-center bg-[var(--bg3)]">
      <div dir="ltr" className="max-w-[1000px] mx-auto flex flex-nowrap justify-center items-center gap-4 md:gap-8">
        {items.map(({ Icon, label, href }) => (
          <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
             className="flex flex-col items-center gap-1 py-1 text-[#d9a066] hover:text-[#e8b880] transition-colors">
            <Icon className="size-4 md:size-5" />
            <span dir="ltr" className="text-[7px] md:text-[11px] tracking-wider text-[#a89080] whitespace-nowrap">{label}</span>
          </a>
        ))}
        <div className="relative">
          <button onClick={() => setSites(!sites)} className="flex flex-col items-center gap-1 py-1 text-[#d9a066] hover:text-[#e8b880] transition-colors">
            <FaGlobe className="size-4 md:size-5" />
            <span dir="ltr" className="text-[7px] md:text-[11px] tracking-wider text-[#a89080] whitespace-nowrap">Websites</span>
          </button>
          {sites && (
            <div dir="rtl" className="absolute bottom-full right-1/2 translate-x-1/2 mb-1 flex flex-col gap-1 rounded-[4px] bg-[var(--card)] border border-[#3a2a1a] p-2 text-xs whitespace-nowrap z-10">
              <a href="https://howkworld.com/ar" target="_blank" className="text-[var(--text)] hover:text-[#d9a066] transition-colors">HOWK</a>
              <a href="https://edmarksa.com/" target="_blank" className="text-[var(--text)] hover:text-[#d9a066] transition-colors">EDMARK</a>
            </div>
          )}
        </div>
        <a href="mailto:EDMARK@live.in"
           className="flex flex-col items-center gap-1 py-1 text-[#d9a066] hover:text-[#e8b880] transition-colors">
          <FaEnvelope className="size-4 md:size-5" />
          <span dir="ltr" className="text-[7px] md:text-[11px] tracking-wider text-[#a89080] whitespace-nowrap">Email</span>
        </a>
      </div>
    </section>
  );
}
