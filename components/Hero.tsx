export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen grid grid-cols-2 overflow-hidden">
      {/* الاسم والأزرار — يمين */}
      <div className="col-start-1 flex flex-col justify-center px-5 md:px-14 pt-[100px] md:pt-[72px] pb-10 md:pb-16">
        <h1 className="text-[34px] md:text-[68px] font-semibold leading-[1.2]">عمر العُمر</h1>
        <p dir="ltr" className="text-[var(--gold)] tracking-[.2em] md:tracking-[.35em] text-[9px] md:text-sm mt-4 md:mt-5 md:text-right">FOUNDER • ENTREPRENEUR</p>
        {/* أزرار بعرض المحتوى ومحاذاة يمين على الجوال */}
        <div className="flex flex-col items-start md:flex-row md:items-center gap-2.5 md:gap-4 mt-8 md:mt-12">
          <a href="/profile" className="h-[42px] md:h-[52px] px-5 md:px-8 rounded-[4px] bg-[var(--gold)] text-black grid place-items-center text-[13px] md:text-base font-medium hover:bg-[#d1b07a] transition-colors">الملف التنفيذي</a>
          <a href="/booking" className="h-[42px] md:h-[52px] px-5 md:px-8 rounded-[4px] border border-[var(--gold-dim)] grid place-items-center text-[13px] md:text-base hover:border-[var(--gold)] transition-colors">طلب اجتماع</a>
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
