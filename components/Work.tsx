const cards = [
  { name: 'EDMARK', desc: '20 عامًا من الخبرة في بناء الأسواق وتطوير الأعمال عبر أكثر من 48 دولة.', img: '/logos/edmark-new.png', href: null, pos: 'object-[center_70%] max-md:object-[center_75%]' },
  { name: 'HOWK', desc: 'دار أزياء سعودية فاخرة تقوم على الندرة والحِرفة والتميّز.', img: '/logos/howk-new.png', href: 'https://howkworld.com/ar', pos: 'object-cover' },
  { name: 'نقوة الدار', desc: 'علامة سعودية للمنتجات المنزلية، تضع الجودة والثقة في صميم التجربة.', img: '/logos/naqwa-new.png', href: 'https://edmarksa.com/', pos: 'object-[center_40%] max-md:object-[center_45%]' },
];

export default function Work() {
  return (
    <section id="work" className="py-0 md:py-1 px-3 md:px-6 bg-[var(--bg)]">
      <p className="gold-shine text-center text-base md:text-lg mb-0.5 md:mb-2">العلامات</p>
      <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-2 md:gap-4">
        {cards.map(c => {
          const cls = 'group relative overflow-hidden aspect-[3/4.4] rounded-[6px] border border-[var(--gold-dim)] bg-[var(--card)] transition-transform duration-300 hover:scale-[1.02]';
          const inner = (
            <>
              <img src={c.img} alt={c.name}
                className={`absolute inset-0 size-full object-cover ${c.pos} group-hover:brightness-110 transition [mask-image:linear-gradient(to_bottom,#000_78%,transparent_98%)]`} />
              <div className="relative z-10 p-2 md:p-4 pt-1 md:pt-2 text-center">
                <h3 className="gold-shine text-[13px] md:text-2xl font-medium [text-shadow:0_2px_10px_rgba(0,0,0,.9)]">{c.name}</h3>
                <p className="text-[11px] md:text-base text-[var(--text)] leading-[1.7] md:leading-[1.9] mt-1 md:mt-2 [text-shadow:0_1px_6px_rgba(0,0,0,.95)]">{c.desc}</p>
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
