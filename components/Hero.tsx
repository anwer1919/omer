export default function Hero() {
  return (
    <section id="home" className="min-h-screen grid md:grid-cols-2">
      {/* النص أولًا على الجوال — يمين على الديسكتوب */}
      <div className="order-1 md:order-none md:col-start-1 flex flex-col justify-center px-6 md:px-16 pt-[110px] md:pt-[72px] pb-16">
        <h1 className="text-5xl md:text-[68px] font-semibold leading-[1.2]">عمر العُمر</h1>
        <p dir="ltr" className="text-[var(--gold)] tracking-[.35em] text-xs md:text-sm mt-5 md:text-right">FOUNDER • ENTREPRENEUR</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <a href="/profile" className="h-[52px] px-8 rounded-[4px] bg-[var(--gold)] text-black grid place-items-center font-medium hover:bg-[#d1b07a] transition-colors">الملف التنفيذي</a>
          <a href="/booking" className="h-[52px] px-8 rounded-[4px] border border-[var(--gold-dim)] grid place-items-center hover:border-[var(--gold)] transition-colors">طلب اجتماع</a>
        </div>
      </div>
      {/* الصورة ثانيًا على الجوال — يسار على الديسكتوب، بقصّ الجذع-فأعلى */}
      <div className="order-2 md:order-none md:col-start-2 relative h-[65vh] md:h-auto">
        <img src="/portrait.png" alt="عمر العُمر" className="absolute inset-0 size-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] to-transparent md:hidden" />
        <div className="absolute inset-0 max-md:hidden bg-gradient-to-r from-transparent to-[var(--bg)]" />
      </div>
    </section>
  );
}
