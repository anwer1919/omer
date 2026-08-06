export default function Contact(){
  return (
    <section className="py-[120px] max-md:py-[72px] px-6 text-center">
      <h2 className="text-[40px] max-md:text-[28px] mb-12">للتواصل</h2>
      <div className="flex max-md:flex-col gap-8 max-md:gap-4 justify-center items-center mb-14">
        <a href="https://wa.me/9665xxxxxxx" className="max-md:w-full h-[52px] px-6 grid place-items-center text-[var(--muted)] hover:text-[var(--gold)]">واتساب</a>
        <a href="mailto:contact@omar.com" className="max-md:w-full h-[52px] px-6 grid place-items-center text-[var(--muted)] hover:text-[var(--gold)]">البريد الإلكتروني</a>
        <a href="https://linkedin.com/in/…" className="max-md:w-full h-[52px] px-6 grid place-items-center text-[var(--muted)] hover:text-[var(--gold)]">LinkedIn</a>
        <a href="/omar.vcf" download className="max-md:w-full h-[52px] px-6 grid place-items-center text-[var(--muted)] hover:text-[var(--gold)]">حفظ جهة الاتصال</a>
      </div>
      <a href="/booking" className="inline-grid h-[52px] px-10 rounded-full bg-[var(--gold)] text-black place-items-center font-medium hover:bg-[var(--gold-hover)]">حجز اجتماع</a>
      <footer className="mt-24 pt-8 border-t border-[var(--divider)] text-[13px] text-[var(--muted)]">© عمر العُمر 2026</footer>
    </section>
  );
}
