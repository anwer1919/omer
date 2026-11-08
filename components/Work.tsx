type Card = {
  name: string;
  desc?: string;
  img: string;
  href: string | null;
  pos: string;
  mask?: string;
  full?: boolean; // الصورة فيها الشعار والنص جاهزين، فلا نضيف نصًا فوقها
};

const MASK = '[mask-image:linear-gradient(to_bottom,#000_78%,transparent_98%)]';

const cards: Card[] = [
  { name: 'EDMARK', desc: '20 عامًا من الخبرة في بناء الأسواق وتطوير الأعمال عبر أكثر من 48 دولة.', img: '/logos/edmark-new.png', href: null, pos: 'object-[center_70%] max-md:object-[center_75%]', mask: MASK },
  { name: 'HOWK', desc: 'دار أزياء سعودية فاخرة تقوم على الندرة والحِرفة والتميّز.', img: '/logos/howk-new.png', href: 'https://howkworld.com/ar', pos: 'object-cover', mask: MASK },
  { name: 'نقوة الدار', desc: 'علامة سعودية للمنتجات المنزلية، تضع الجودة والثقة في صميم التجربة.', img: '/logos/naqwa-new.png', href: 'https://edmarksa.com/', pos: 'object-[center_0%]', mask: MASK },
  { name: 'زينة وخزينة', img: '/logos/img_7141.japg', href: 'https://snapchat.com/t/LtNHsw4T', pos: 'object-center', full: true },
];

export default function Work() {
  return (
    <section id="work" className="py-0.5 px-2 md:px-4 bg-[var(--bg)]">
      <p className="gold-shine text-center text-sm md:text-base mb-0.5">العلامات</p>

      <div className="max-w-[760px] mx-auto grid grid-cols-2 gap-1.5 md:gap-3">
        {cards.map(c => {
          const cls =
            'group relative overflow-hidden aspect-[1/1.05] rounded-[6px] border-2 border-[#d9a066] bg-[var(--card)] shadow-[0_0_10px_rgba(217,160,102,.25)] transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-[0_0_18px_rgba(217,160,102,.45)] active:scale-[0.97] cursor-pointer';

          const inner = c.full ? (
            <img src={c.img} alt={c.name} loading="lazy"
              className={`absolute inset-0 size-full object-cover ${c.pos} group-hover:brightness-110 transition`} />
          ) : (
            <>
              <img src={c.img} alt={c.name}
                className={`absolute inset-0 size-full object-cover ${c.pos} ${c.mask ?? ''} group-hover:brightness-110 transition`} />
              <div className="relative z-10 p-1.5 md:p-3 pt-0.5 text-center">
                <h3 className="gold-shine text-[13px] md:text-xl font-medium [text-shadow:0_2px_10px_rgba(0,0,0,.9)]">{c.name}</h3>
                <p className="text-[9px] md:text-sm text-[var(--text)] leading-[1.5] md:leading-[1.8] [text-shadow:0_1px_6px_rgba(0,0,0,.95)]">{c.desc}</p>
              </div>
            </>
          );

          return c.href
            ? <a key={c.name} href={c.href} target="_blank" rel="noopener noreferrer" aria-label={c.name} className={cls}>{inner}</a>
            : <div key={c.name} aria-label={c.name} className={cls}>{inner}</div>;
        })}
      </div>
    </section>
  );
}
