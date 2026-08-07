export default function Projects() {
  return (
    <section id="projects" className="py-[100px] max-md:py-[72px] px-6">
      <p className="w-fit mx-auto text-[var(--gold)] text-sm border-b border-[var(--gold)]/60 pb-3 px-6 mb-16">مشاريعي</p>
      <div dir="ltr" className="max-w-[1200px] mx-auto grid md:grid-cols-3 md:divide-x md:divide-[var(--divider)]">
        <a href="https://howkworld.com/ar" target="_blank" className="py-8 grid place-items-center">
          <img src="/logos/howk.png" alt="HOWK — Luxury Wear" className="h-20 md:h-30 object-contain" />
        </a>
        <a href="#" className="py-8 grid place-items-center">
          <img src="/logos/naqwa.png" alt="نقوة الدار — Home Essentials" className="h-20 md:h-30 object-contain" />
        </a>
        <a href="https://edmarksa.com/" target="_blank" className="py-8 grid place-items-center">
          <img src="/logos/edmark.png" alt="EDMARK — Since 1987" className="h-20 md:h-30 object-contain" />
        </a>
      </div>
    </section>
  );
}
