import { FaCalendarAlt, FaFileAlt } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen grid md:grid-cols-2">
      <div className="order-2 md:order-none md:col-start-1 flex flex-col justify-center px-6 md:px-16 pt-[120px] md:pt-[80px] pb-16">
        <h1 className="text-5xl md:text-[72px] leading-tight">عمر العُمر</h1>
        <p dir="ltr" className="text-[var(--gold)] tracking-[.3em] text-sm mt-4 md:text-right">FOUNDER • ENTREPRENEUR</p>
        <div className="w-16 h-px bg-[var(--gold)] my-8" />
        <p className="text-lg md:text-xl mb-10">أبني علامات تجارية تُصنع لتبقى.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/booking" className="flex h-[52px] px-8 rounded-[6px] bg-[var(--gold)] text-black items-center justify-center gap-3 font-medium hover:bg-[var(--gold-hover)]">
            <FaCalendarAlt /> حجز اجتماع
          </a>
          <a href="/profile.pdf" download className="flex h-[52px] px-8 rounded-[6px] border border-[var(--gold)] items-center justify-center gap-3 hover:bg-[var(--glow)]">
            <FaFileAlt /> السيرة الذاتية
          </a>
        </div>
      </div>
      <div className="order-1 md:order-none md:col-start-2 relative h-[70vh] md:h-auto">
        <img src="/portrait.jpg" alt="عمر العُمر" className="absolute inset-0 size-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent md:hidden" />
        <div className="absolute inset-0 max-md:hidden bg-gradient-to-r from-transparent to-black" />
      </div>
    </section>
  );
}
