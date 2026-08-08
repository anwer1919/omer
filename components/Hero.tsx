export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative w-full px-4 md:px-14 pt-[84px] md:pt-[80px]">
        <div className="absolute inset-0">
          <img src="/portrait.png" alt="عمر العُمر" className="absolute inset-y-0 right-0 h-full w-[114%] md:w-[110%] max-w-none object-contain object-top md:object-cover md:object-[center_8%] brightness-[1.6] contrast-[1.05]" />
          {/* تخفيف سطوع الوجه فقط */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_22%,rgba(0,0,0,.35),transparent_50%)]" />
          {/* الظل من بداية السطر الإنجليزي لآخره فقط */}
          <div className="absolute inset-0 bg-gradient-to-l from-[var(--bg)] from-5% via-[var(--bg)]/65 via-30% to-transparent to-50%" />
        </div>
        <div className="relative z-10 flex flex-col md:w-[52%] md:ml-auto pt-2 md:pt-6">
          <h1 className="text-[36px] md:text-[68px] font-normal leading-[1.2]">عمر العُمر</h1>
          <p dir="ltr" className="text-[var(--gold)] tracking-[.2em] md:tracking-[.35em] text-[9px] md:text-sm mt-4 md:mt-5 text-right">FOUNDER • ENTREPRENEUR</p>
          <div className="flex flex-row flex-wrap items-center gap-2 md:gap-4 mt-4 md:mt-10">
            <a href="/profile" className="h-[40px] md:h-[52px] px-3.5 md:px-8 rounded-[4px] bg-[var(--gold)] text-black grid place-items-center text-[12px] md:text-base font-medium whitespace-nowrap hover:bg-[#d1b07a] transition-colors">الملف التنفيذي</a>
            <a href="/booking" className="h-[40px] md:h-[52px] px-3.5 md:px-8 rounded-[4px] border border-[var(--gold-dim)] grid place-items-center text-[12px] md:text-base whitespace-nowrap hover:border-[var(--gold)] transition-colors">طلب اجتماع</a>
          </div>
        </div>
      </div>
    </section>
  );
}
