import { FaLinkedin, FaWhatsapp, FaInstagram, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[var(--bg2)] border-t border-[var(--gold-dim)] py-4 md:py-6 px-3 md:px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-2 md:gap-3">
        {/* أيقونات الميديا */}
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <a href="https://www.linkedin.com" target="_blank" className="text-[var(--gold)] hover:text-[#daa06d] transition-colors">
            <FaLinkedin className="size-4 md:size-5" />
          </a>
          <a href="https://wa.me/" target="_blank" className="text-[var(--gold)] hover:text-[#daa06d] transition-colors">
            <FaWhatsapp className="size-4 md:size-5" />
          </a>
          <a href="https://www.instagram.com" target="_blank" className="text-[var(--gold)] hover:text-[#daa06d] transition-colors">
            <FaInstagram className="size-4 md:size-5" />
          </a>
          <a href="https://x.com" target="_blank" className="text-[var(--gold)] hover:text-[#daa06d] transition-colors">
            <FaXTwitter className="size-4 md:size-5" />
          </a>
        </div>

        {/* الخط الفاصل */}
        <span className="block h-px w-24 md:w-32 bg-[var(--gold-dim)]" />

        {/* حقوق النشر */}
        <p className="text-[10px] md:text-xs text-[var(--gold)] text-center">
          © {new Date().getFullYear()} عمر العُمر — جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
}
