export default function Hero() {
  return (
    <section className="min-h-screen grid md:grid-cols-2 items-center gap-12 px-6 max-w-[1200px] mx-auto">
      <div>
        <h1 className="text-4xl md:text-[64px] leading-[1.3]">عمر العُمر</h1>
        <div className="w-12 h-[2px] bg-[var(--gold)] my-6" />
        <p dir="ltr" className="text-[var(--muted)] text-xl md:text-right">
          Founder | Entrepreneur
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-10">
          <a href="/booking"
             className="h-[52px] px-8 rounded-full bg-[var(--gold)] text-black grid place-items-center font-medium hover:bg-[var(--gold-hover)]">
            حجز اجتماع
          </a>
          <a href="/profile.pdf" download
             className="h-[52px] px-8 rounded-full border border-[var(--gold)] text-[var(--gold)] grid place-items-center hover:bg-[var(--glow)]">
            تحميل الملف التعريفي
          </a>
        </div>
      </div>
      <img src="/portrait.webp" alt="عمر العُمر"
           className="w-full aspect-[4/5] object-cover [mask-image:linear-gradient(to_bottom,black_70%,transparent)]"
           priority />
    </section>
  );
}
