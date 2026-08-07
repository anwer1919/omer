const cards = [
  { name: 'EDMARK', desc: '20 عامًا من الخبرة في بناء الأسواق وتطوير الأعمال عبر أكثر من 40 دولة.', img: '/logos/edmark.png', href: null },
  { name: 'HOWK', desc: 'دار أزياء سعودية فاخرة تقوم على الندرة والحِرفة والتميّز.', img: '/logos/howk.png', href: 'https://howkworld.com/ar' },
  { name: 'نقوة الدار', desc: 'علامة سعودية للمنتجات المنزلية، تضع الجودة والثقة في صميم التجربة.', img: '/logos/naqwa.png', href: '#' },
];

export default function Work() {
  return (
    <section id="work" className="pt-2 md:pt-4 pb-[110px] max-md:pb-10 px-3 md:px-6">
      <p className="text-center text-sm text-[var(--gold)] mb-4 md:mb-6">العلامات</p>
      <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-2 md:gap-6">
        {cards.map(c => {
          const cls = 'group relative overflow-hidden aspect-[3/4] rounded-[6px] border border-[rgba(195,161,104,.65)] bg-[var(--card)] transition-transform duration-300 hover:scale-[1.02]';
          const inner = (
            <>
              <img src={c.img} alt={c.name}
                className="absolute inset-0 size-full object-contain object-center scale-[1.25] mix-blend-screen group-hover:brightness-110 transition" />
              <div className="relative z-10 p-2 md:p-8 pt-4 md:pt-10">
                <h3 className="text-[13px] md:text-2xl font-medium text-center text-[var(--gold)]">{c.name}</h3>
                <p className="text-[9px] md:text-sm text-[var(--muted)] leading-[1.7] md:leading-[1.9] text-center mt-1 md:mt-4">{c.desc}</p>
              </div>
            </>
          );
          return c.href
            ? <a key={c.name} href={c.href} target="_blank" className={cls}>{inner}</a>
            : <div key={c.name} className={cls}>{inner}</div>;
        })}
      </div>
    </section>
  );
}
