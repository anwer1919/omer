import { FaFileLines, FaCalendarDays } from 'react-icons/fa6';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[var(--bg)]">
      <div className="relative w-full px-3 md:px-14 pt-[72px] md:pt-[80px]">
        <div className="absolute inset-0">
          <img src="/portrait.png" alt="عمر العُمر"
            className="absolute inset-y-0 left-0 h-full w-full md:w-[55%] object-contain object-[0%_0%] md:object-cover md:object-[30%_25%] brightness-[1.05] contrast-[1.02]" />
          <div className="absolute inset-0 bg-gradient-to-l from-[var(--bg)] from-45% via-[var(--bg)]/60 via-58% to-transparent to-70%" />
        </div>
        <div className="relative z-10 flex flex-col md:w-[45%] md:ml-auto">
          <h1 className="logo-name text-[44px] md:text-[60px] font-normal leading-[1.2] text-[var(--text)]">عمر العُمر</h1>
          <span className="line-shine block h-px w-10 md:w-14 mt-1 md:mt-2" />
          <p dir="ltr" className="gold-shine font-sans tracking-[.2em] md:tracking-[.35em] text-[9px] md:text-sm mt-1 md:mt-2 text-right">FOUNDER • ENTREPRENEUR</p>
          <div className="flex flex-row flex-wrap items-center gap-2 md:gap-4 mt-2 md:mt-4">
            <a href="/booking" className="h-[32px] md:h-[46px] px-2.5 md:px-6 rounded-[4px] border border-[var(--gold-dim)] flex items-center justify-center gap-1.5 md:gap-2 text-[10px] md:text-sm whitespace-nowrap text-[var(--text)] hover:border-[var(--gold)] transition-colors">
              <FaCalendarDays className="size-3 md:size-3.5 text-[var(--gold)]" />
              حجز الاجتماع
            </a>
            <a href="/profile" className="h-[32px] md:h-[46px] px-2.5 md:px-6 rounded-[4px] bg-[var(--gold)] text-black flex items-center justify-center gap-1.5 md:gap-2 text-[10px] md:text-sm font-medium whitespace-nowrap hover:bg-[#d8a97e] transition-colors">
              <FaFileLines className="size-3 md:size-3.5" />
              الملف التنفيذي
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
