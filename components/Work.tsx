const cards = [
  { name: 'EDMARK', desc: '20 عامًا من الخبرة في بناء الأسواق وتطوير الأعمال عبر أكثر من 48 دولة.', img: '/logos/edmark-new.png', href: null, pos: 'object-[center_70%] max-md:object-[center_75%]', mask: '[mask-image:linear-gradient(to_bottom,#000_78%,transparent_98%)]' },
  { name: 'HOWK', desc: 'دار أزياء سعودية فاخرة تقوم على الندرة والحِرفة والتميّز.', img: '/logos/howk-new.png', href: 'https://howkworld.com/ar', pos: 'object-cover', mask: '[mask-image:linear-gradient(to_bottom,#000_78%,transparent_98%)]' },
  { name: 'نقوة الدار', desc: 'علامة سعودية للمنتجات المنزلية، تضع الجودة والثقة في صميم التجربة.', img: '/logos/naqwa-new.png', href: 'https://edmarksa.com/', pos: 'object-[center_0%]', mask: '[mask-image:linear-gradient(to_bottom,#000_78%,transparent_98%)]', descClass: 'text-[9px] md:text-sm' },
];

export default function Work() {
  return (
    <section id="work" className="py-0.5 md:py-1 px-2 md:px-4 bg-[var(--bg)]">
      <p className="gold-shine text-center text-sm md:text-base mb-0.5 md:mb-1">العلامات</p>
      <div className="max-w-[1200px] mx-auto grid grid-cols-3 gap-1 md:gap-2">
        {cards.map(c => {
          const cls = 'group relative overflow-hidden aspect-[3/4.4] rounded-[4px] border-2 border-[#d9a066] bg-[var(--card)] shadow-[0_0_10px_rgba(217,160,102,.25)] transition-transform duration-200 ease-out hover:scale-[1.03] hover:shadow-[0_0_18px_rgba(217,160,102,.45)] active:scale-[0.97] cursor-pointer';
          const inner = (
            <>
              <img src={c.img} alt={c.name}
                className={`absolute inset-0 size-full object-cover ${c.pos} ${c.mask} group-hover:brightness-110 transition`} />
              <div className="relative z-10 p-1.5 md:p-3 pt-0.5 md:pt-1 text-center">
                <h3 className="gold-shine text-[11px] md:text-xl font-medium [text-shadow:0_2px_10px_rgba(0,0,0,.9)]">{c.name}</h3>
                <p className={`${c.descClass || 'text-[10px] md:text-sm'} text-[var(--text)] leading-[1.6] md:leading-[1.8] mt-0.5 md:mt-1 [text-shadow:0_1px_6px_rgba(0,0,0,.95)]`}>{c.desc}</p>
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
