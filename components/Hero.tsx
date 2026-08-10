import { FaFileLines, FaCalendarDays } from 'react-icons/fa6';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[var(--bg)]">
      <div className="relative w-full px-3 md:px-14 pt-[24px] md:pt-[32px] pb-[16px] md:pb-[20px]">
        <div className="absolute inset-0">
          <img src="/portrait.png" alt="عمر العُمر"
            className="absolute inset-y-0 left-0 h-full w-full md:w-[55%] object-contain object-[0%_0%] md:object-cover md:object-[30%_25%] brightness-[1.05] contrast-[1.02] [mask-image:linear-gradient(to_bottom,#000_80%,transparent_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-l from-[var(--bg)] from-45% via-[var(--bg)]/60 via-58% to-transparent to-70%" />
        </div>
        <div className="relative z-10 flex flex-col md:w-[45%] md:ml-auto">
          <h1 className="logo-name text-[36px] md:text-[52px] font-normal leading-[1.1] text-[var(--text)]">عمر العُمر</h1>
          <span className="block h-[2px] w-10 md:w-14 bg-[#d9a066] rounded-full mt-0.5 md:mt-1" />
          <p dir="ltr" className="gold-shine font-sans tracking-[.2em] md:tracking-[.35em] text-[8px] md:text-xs mt-0.5 md:mt-1 text-right">FOUNDER  • BRAND BUILDER</p>
          <div className="flex flex-row flex-wrap items-center gap-1.5 md:gap-3 mt-1 md:mt-2">
            <a href="/booking" className="h-[28px] md:h-[38px] px-2 md:px-4 rounded-[4px] border border-[var(--gold-dim)] bg-transparent flex items-center justify-center gap-1 md:gap-1.5 text-[9px] md:text-xs whitespace-nowrap text-[var(--text)] hover:border-[var(--gold)] transition-colors">
              <FaCalendarDays className="size-2.5 md:size-3 text-[var(--gold)]" />
              حجز الاجتماع
            </a>
            <a href="/profile" className="h-[28px] md:h-[38px] px-2 md:px-4 rounded-[4px] bg-[var(--gold)] text-black flex items-center justify-center gap-1 md:gap-1.5 text-[9px] md:text-xs font-medium whitespace-nowrap hover:bg-[#d8a97e] transition-colors">
              <FaFileLines className="size-2.5 md:size-3" />
              الملف التنفيذي
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
