const cards = [
  { name: 'EDMARK', desc: '20 عامًا من الخبرة في بناء الأسواق وتطوير الأعمال عبر أكثر من 48 دولة.', img: '/logos/edmark-new.png', href: null, pos: 'top-[16%] bottom-[-16%] max-md:top-[24%] max-md:bottom-[-24%]' },
  { name: 'HOWK', desc: 'دار أزياء سعودية فاخرة تقوم على الندرة والحِرفة والتميّز.', img: '/logos/howk-new.png', href: 'https://howkworld.com/ar', pos: 'inset-0' },
  { name: 'نقوة الدار', desc: 'علامة سعودية للمنتجات المنزلية، تضع الجودة والثقة في صميم التجربة.', img: '/logos/naqwa-new.png', href: 'https://edmarksa.com/', pos: 'top-[16%] bottom-[-16%] max-md:top-[24%] max-md:bottom-[-24%]' },
];

export default function Work() {
  return (
    <section id="work" className="py-1 md:py-3 px-3 md:px-6 bg-[var(--bg)]">
      <p className="gold-shine text-center text-base md:text-lg mb-1 md:mb-4">العلامات</p>
      <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-2 md:gap-6">
        {cards.map(c => {
          const cls = 'group relative overflow-hidden aspect-[3/4.4] rounded-[6px] border border-[var(--gold-dim)] bg-[var(--card)] transition-transform duration-300 hover:scale-[1.02]';
          const inner = (
            <>
              <img src={c.img} alt={c.name}
                className={`absolute inset-x-0 w-full h-auto object-cover ${c.pos} group-hover:brightness-110 transition`} />
              <div className="relative z-10 p-2 md:p-6 pt-1 md:pt-3 text-center">
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
