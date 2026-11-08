import { FaFileLines, FaCalendarDays } from 'react-icons/fa6';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[var(--bg)] max-md:h-[calc(var(--u)*39)]">
      <div className="relative w-full max-md:h-full px-3 md:px-14 max-md:pt-[calc(var(--u)*8.5)] md:pt-[56px] md:pb-[40px]">
        {/* الصورة */}
        <div className="absolute inset-0">
          <img src="/portrait.png" alt="عمر العُمر"
            className="absolute inset-y-0 left-0 h-full w-full md:w-[55%] object-contain object-[0%_0%] md:object-cover md:object-[30%_25%] brightness-[1.05] contrast-[1.02] [mask-image:linear-gradient(to_bottom,#000_80%,transparent_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-l from-[var(--bg)] from-45% via-[var(--bg)]/60 via-58% to-transparent to-70%" />
        </div>

        {/* المحتوى */}
        <div className="relative z-10 flex flex-col md:w-[45%] md:ml-auto">
          <h1 className="logo-name max-md:[font-size:calc(var(--u)*11.3)] md:text-[60px] font-normal leading-[1.2] text-[var(--text)]">عمر العُمر</h1>
          <span className="block h-[2px] w-10 md:w-14 bg-[#d9a066] rounded-full mt-1 md:mt-2" />
          <p dir="ltr" className="gold-shine font-sans tracking-[.2em] md:tracking-[.35em] max-md:[font-size:calc(var(--u)*2.4)] md:text-sm mt-1 md:mt-2 text-right">FOUNDER • BRAND BUILDER</p>

          <div className="flex flex-row flex-wrap items-center gap-2 md:gap-4 max-md:mt-[calc(var(--u)*1.8)] md:mt-3">
            <a href="/booking" className="max-md:h-[calc(var(--u)*8.2)] md:h-[46px] px-2.5 md:px-6 rounded-[4px] border border-[var(--gold-dim)] bg-transparent flex items-center justify-center gap-1.5 md:gap-2 max-md:[font-size:calc(var(--u)*2.7)] md:text-sm whitespace-nowrap text-[var(--text)] hover:border-[var(--gold)] transition-colors">
              <FaCalendarDays className="size-3 md:size-3.5 text-[var(--gold)]" />
              حجز الاجتماع
            </a>
            <a href="/profile" className="max-md:h-[calc(var(--u)*8.2)] md:h-[46px] px-2.5 md:px-6 rounded-[4px] bg-[var(--gold)] text-black flex items-center justify-center gap-1.5 md:gap-2 max-md:[font-size:calc(var(--u)*2.7)] md:text-sm font-medium whitespace-nowrap hover:bg-[#d8a97e] transition-colors">
              <FaFileLines className="size-3 md:size-3.5" />
              الملف التنفيذي
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
