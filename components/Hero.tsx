export default function Hero() {
  return (
    <section id="home" className="min-h-screen grid grid-cols-2">
      {/* الاسم والزرار — يمين دائمًا */}
      <div className="col-start-1 flex flex-col justify-center px-4 md:px-16 pt-[100px] md:pt-[72px] pb-16">
        <h1 className="text-[34px] md:text-[68px] font-semibold leading-[1.2]">عمر العُمر</h1>
        <p dir="ltr" className="text-[var(--gold)] tracking-[.2em] md:tracking-[.35em] text-[9px] md:text-sm mt-4 md:mt-5 md:text-right">FOUNDER • ENTREPRENEUR</p>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 mt-8 md:mt-12">
          <a href="/profile" className="h-[46px] md:h-[52px] px-4 md:px-8 rounded-[4px] bg-[var(--gold)] text-black grid place-items-center text-sm md:text-base font-medium hover:bg-[#d1b07a] transition-colors">الملف التنفيذي</a>
          <a href="/booking" className="h-[46px] md:h-[52px] px-4 md:px-8 rounded-[4px] border border-[var(--gold-dim)] grid place-items-center text-sm md:text-base hover:border-[var(--gold)] transition-colors">طلب اجتماع</a>
        </div>
      </div>
      {/* الصورة — يسار دائمًا ومدمجة بالتدرج */}
      <div className="col-start-2 relative">
        <img src="/portrait.png" alt="عمر العُمر" className="absolute inset-0 size-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--bg)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
      </div>
    </section>
  );
}
