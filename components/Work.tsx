const cards = [
  { name: 'EDMARK', desc: '20 عامًا من الخبرة في بناء الأسواق وتطوير الأعمال عبر أكثر من 40 دولة.', img: '/logos/edmark.png', href: null },
  { name: 'HOWK', desc: 'دار أزياء سعودية فاخرة تقوم على الندرة والحِرفة والتميّز.', img: '/logos/howk.png', href: 'https://howkworld.com/ar' },
  { name: 'نقوة الدار', desc: 'علامة سعودية للمنتجات المنزلية، تضع الجودة والثقة في صميم التجربة.', img: '/logos/naqwa.png', href: '#' },
];

export default function Work() {
  return (
    <section id="work" className="pt-0.5 md:pt-4 pb-[100px] max-md:pb-1 px-3 md:px-6">
      <p className="text-center text-sm text-[var(--gold)] mb-1 md:mb-8">العلامات</p>
      <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-2 md:gap-6">
        {cards.map(c => {
          const cls = 'group relative overflow-hidden aspect-[3/4] rounded-[6px] border border-[var(--gold-dim)] bg-[var(--card)] flex flex-col transition-transform duration-300 hover:scale-[1.02]';
          const inner = (
            <>
              <div className="p-2 md:p-6 pt-3 md:pt-6 text-center">
                <h3 className="text-[13px] md:text-2xl font-medium text-[var(--gold)]">{c.name}</h3>
                <p className="text-[9px] md:text-sm text-[var(--muted)] leading-[1.7] md:leading-[1.9] mt-1 md:mt-3">{c.desc}</p>
              </div>
              <div className="relative flex-1 mt-1 md:mt-4">
                <img src={c.img} alt={c.name}
                  className="absolute inset-0 size-full object-cover mix-blend-screen group-hover:brightness-110 transition" />
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