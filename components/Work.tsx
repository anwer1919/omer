type Card = {
  name: string;
  desc?: string;
  img: string;
  href: string | null;
  pos: string;
  mask?: string;
  full?: boolean; // الصورة فيها الشعار والنص جاهزين
};

const MASK = '[mask-image:linear-gradient(to_bottom,#000_78%,transparent_98%)]';

// pos = أي جزء من الصورة يظهر داخل البطاقة (النسبة من الأعلى)
const cards: Card[] = [
  { name: 'EDMARK', desc: '20 عامًا من الخبرة في بناء الأسواق وتطوير الأعمال عبر أكثر من 48 دولة.', img: '/logos/edmark-new.png', href: null, pos: 'object-[center_50%] md:object-[center_70%]', mask: MASK },
  { name: 'HOWK', desc: 'دار أزياء سعودية فاخرة تقوم على الندرة والحِرفة والتميّز.', img: '/logos/howk-new.png', href: 'https://howkworld.com/ar', pos: 'object-[center_42%] md:object-cover', mask: MASK },
  { name: 'نقوة الدار', desc: 'علامة سعودية للمنتجات المنزلية، تضع الجودة والثقة في صميم التجربة.', img: '/logos/naqwa-new.png', href: 'https://edmarksa.com/', pos: 'object-[center_28%] md:object-[center_0%]', mask: MASK },
  { name: 'زينة وخزينة', img: '/logos/IMG_7141.jpeg', href: 'https://snapchat.com/t/LtNHsw4T', pos: 'object-[center_30%] md:object-center', full: true },
];

export default function Work() {
  return (
    <section id="work" className="flex flex-col max-md:px-[calc(var(--u,1vw)*3.2)] md:px-4 max-md:pb-[calc(var(--u,1vw)*1)] md:py-1 bg-[var(--bg)]">
      <p className="gold-shine text-center flex items-center justify-center max-md:h-[calc(var(--u,1vw)*4)] max-md:[font-size:calc(var(--u,1vw)*3)] md:text-base md:mb-2">العلامات</p>

      {/* جوال: صفّان يملآن المساحة المتبقية. كمبيوتر: نسبة ثابتة */}
      <div className="w-full max-w-[760px] mx-auto grid grid-cols-2 max-md:gap-[calc(var(--u,1vw)*2)] md:gap-3 flex-1 min-h-0 max-md:min-h-[calc(var(--u,1vw)*60)] max-md:grid-rows-2">
        {cards.map(c => {
          const cls =
            'group relative overflow-hidden min-h-0 md:aspect-[1/0.95] rounded-[6px] border-2 border-[#d9a066] bg-black shadow-[0_0_8px_rgba(217,160,102,.25)] transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-[0_0_18px_rgba(217,160,102,.45)] active:scale-[0.97] cursor-pointer';

          const inner = c.full ? (
            <img src={c.img} alt={c.name} loading="lazy"
              className={`absolute inset-0 size-full max-md:object-fill md:object-cover ${c.pos} group-hover:brightness-110 transition`} />
          ) : (
            <>
              <img src={c.img} alt={c.name}
                className={`absolute inset-0 size-full max-md:object-fill md:object-cover ${c.pos} ${c.mask ?? ''} group-hover:brightness-110 transition`} />
              <div className="relative z-10 px-1.5 md:px-3 pt-0.5 text-center">
                <h3 className="gold-shine max-md:[font-size:calc(var(--u,1vw)*3.6)] md:text-xl font-medium leading-tight [text-shadow:0_2px_10px_rgba(0,0,0,.9)]">{c.name}</h3>
                <p className="text-[var(--text)] max-md:[font-size:calc(var(--u,1vw)*2.8)] md:text-sm max-md:leading-[1.4] md:leading-[1.8] [text-shadow:0_1px_6px_rgba(0,0,0,.95)]">{c.desc}</p>
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
