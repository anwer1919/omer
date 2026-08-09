import { FaFileLines, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';

export default function Hero() {
  return (
    <section id="hero" className="min-h-[70vh] md:min-h-[85vh] flex flex-col items-center justify-center text-center px-3 md:px-6 bg-[var(--bg)]">
      <h1 className="gold-shine text-4xl md:text-6xl font-bold mb-2 md:mb-4">عمر العُمر</h1>
      <p className="text-sm md:text-lg text-[var(--text)] max-w-[700px] leading-[1.9] md:leading-[2.1] mb-4 md:mb-8">
        أبني علامات سعودية تنافس عالميًا؛ خبرة تتجاوز 20 عامًا في بناء الأسواق والتوسع عبر أكثر من 48 دولة.
      </p>

      <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
        <a href="/profile" className="btn-gold-shine h-[32px] md:h-[46px] px-2.5 md:px-6 rounded-[4px] text-black flex items-center justify-center gap-1.5 md:gap-2 text-[10px] md:text-sm font-semibold whitespace-nowrap transition-shadow">
          <FaFileLines className="size-3 md:size-3.5" />
          الملف التنفيذي
        </a>
        <a href="#contact" className="h-[32px] md:h-[46px] px-2.5 md:px-6 rounded-[4px] border border-[var(--gold)] text-[var(--gold)] flex items-center justify-center text-[10px] md:text-sm whitespace-nowrap hover:bg-[rgba(212,175,55,.1)] transition-colors">
          تواصل معي
        </a>
      </div>

      <div className="flex items-center justify-center gap-3 md:gap-5 mt-4 md:mt-8">
        <a href="https://www.linkedin.com" target="_blank" className="text-[var(--gold)] hover:text-[#fffbe6] transition-colors">
          <FaLinkedin className="size-4 md:size-5" />
        </a>
        <a href="https://wa.me/" target="_blank" className="text-[var(--gold)] hover:text-[#fffbe6] transition-colors">
          <FaWhatsapp className="size-4 md:size-5" />
        </a>
      </div>
    </section>
  );
}
