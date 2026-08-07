export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen grid grid-cols-[7fr_5fr] md:grid-cols-2 overflow-hidden">
      {/* الاسم والجملة والأزرار — يمين */}
      <div className="col-start-1 flex flex-col justify-center px-5 md:px-14 pt-[100px] md:pt-[72px] pb-10 md:pb-16">
        <h1 className="text-[34px] md:text-[68px] font-semibold leading-[1.2]">عمر العُمر</h1>
        <p dir="ltr" className="text-[var(--gold)] tracking-[.2em] md:tracking-[.35em] text-[9px] md:text-sm mt-4 md:mt-5 md:text-right">FOUNDER • ENTREPRENEUR</p>
       <p className="text-[15px] md:text-xl text-[var(--muted)] mt-4 md:mt-6">أبني علامات تستحق أن تبقى</p>
        {/* الأزرار جنب بعض دائمًا */}
        <div className="flex flex-row flex-wrap items-center gap-2 md:gap-4 mt-6 md:mt-10">
          <a href="/profile" className="h-[40px] md:h-[52px] px-3.5 md:px-8 rounded-[4px] bg-[var(--gold)] text-black grid place-items-center text-[12px] md:text-base font-medium whitespace-nowrap hover:bg-[#d1b07a] transition-colors">الملف التنفيذي</a>
          <a href="/booking" className="h-[40px] md:h-[52px] px-3.5 md:px-8 rounded-[4px] border border-[var(--gold-dim)] grid place-items-center text-[12px] md:text-base whitespace-nowrap hover:border-[var(--gold)] transition-colors">طلب اجتماع</a>
        </div>
      </div>
      {/* الصورة — يسار ومدمجة بالتدرج */}
      <div className="col-start-2 relative">
        <img src="/portrait.png" alt="عمر العُمر"
          className="absolute inset-0 size-full object-cover object-[center_20%] md:object-[center_30%]" />
        <div className="absolute inset-0 bg-gradient-to-l from-[var(--bg)] via-[var(--bg)]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--bg)] to-transparent" />
      </div>
    </section>
  );
}
