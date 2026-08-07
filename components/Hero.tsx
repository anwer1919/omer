export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* صورة أعرض من الشاشة مثبّتة يمينًا → الشخص يظهر يسارًا */}
      <img src="/portrait.png" alt="عمر العُمر"
        className="absolute inset-y-0 right-0 h-full w-[150%] md:w-[135%] max-w-none object-cover object-[center_20%] md:object-[center_center]" />
      <div className="absolute inset-0 bg-gradient-to-l from-[var(--bg)] via-[var(--bg)]/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--bg)] to-transparent" />
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-14 pt-[100px] md:pt-[72px] pb-10 md:pb-16 md:w-[52%] md:ml-auto">
        <h1 className="text-[34px] md:text-[68px] font-semibold leading-[1.2]">عمر العُمر</h1>
        <p dir="ltr" className="text-[var(--gold)] tracking-[.2em] md:tracking-[.35em] text-[9px] md:text-sm mt-4 md:mt-5 md:text-right">FOUNDER • ENTREPRENEUR</p>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-8 md:mt-12">
          <a href="/profile" className="h-[46px] md:h-[52px] px-4 md:px-8 rounded-[4px] bg-[var(--gold)] text-black grid place-items-center text-sm md:text-base font-medium hover:bg-[#d1b07a] transition-colors">الملف التنفيذي</a>
          <a href="/booking" className="h-[46px] md:h-[52px] px-4 md:px-8 rounded-[4px] border border-[var(--gold-dim)] grid place-items-center text-sm md:text-base hover:border-[var(--gold)] transition-colors">طلب اجتماع</a>
        </div>
      </div>
    </section>
  );
}
