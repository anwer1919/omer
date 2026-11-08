type Card = {
  name: string;
  desc: string;
  img: string;
  href: string | null;
  pos: string;
  mask: string;
  descClass?: string;
  logo?: string; // شعار فوق الصورة (للبطاقة التي شعارها صورة)
};

const MASK = '[mask-image:linear-gradient(to_bottom,#000_78%,transparent_98%)]';

const cards: Card[] = [
  { name: 'EDMARK', desc: '20 عامًا من الخبرة في بناء الأسواق وتطوير الأعمال عبر أكثر من 48 دولة.', img: '/logos/edmark-new.png', href: null, pos: 'object-[center_70%] max-md:object-[center_75%]', mask: MASK },
  { name: 'HOWK', desc: 'دار أزياء سعودية فاخرة تقوم على الندرة والحِرفة والتميّز.', img: '/logos/howk-new.png', href: 'https://howkworld.com/ar', pos: 'object-cover', mask: MASK },
  { name: 'نقوة الدار', desc: 'علامة سعودية للمنتجات المنزلية، تضع الجودة والثقة في صميم التجربة.', img: '/logos/naqwa-new.png', href: 'https://edmarksa.com/', pos: 'object-[center_0%]', mask: MASK },
  {
    name: 'زينة وخزينة',
    desc: 'لوحات سيارات مميزة بأرقام وحروف منتقاة.',
    img: '/logos/zeena-car.jpg',
    logo: '/logos/zeena-logo.jpg',
    href: 'https://snapchat.com/t/LtNHsw4T',
    pos: 'object-[center_100%]',
    mask: '',
  },
];

export default function Work() {
  return (
    <section id="work" className="py-1 md:py-2 px-2 md:px-4 bg-[var(--bg)]">
      <p className="gold-shine text-center text-sm md:text-base mb-1 md:mb-2">العلامات</p>

      {/* شبكة 2×2 — الترتيب RTL: الأول يمين */}
      <div className="max-w-[760px] mx-auto grid grid-cols-2 gap-2 md:gap-4">
        {cards.map(c => {
          const cls =
            'group relative overflow-hidden aspect-[1/1.08] rounded-[6px] border-2 border-[#d9a066] bg-[var(--card)] shadow-[0_0_10px_rgba(217,160,102,.25)] transition-transform duration-200 ease-out hover:scale-[1.02] hover:shadow-[0_0_18px_rgba(217,160,102,.45)] active:scale-[0.97] cursor-pointer';

          const inner = c.logo ? (
            // بطاقة الشعار: صورة السيارة بالخلفية + الشعار أعلاها + الوصف تحته
            <>
              <img src={c.img} alt="" loading="lazy"
                className={`absolute inset-0 size-full object-cover ${c.pos} group-hover:brightness-110 transition`} />
              <div className="relative z-10 flex flex-col items-center px-2 pt-2 md:pt-4 text-center">
                <img src={c.logo} alt={c.name} loading="lazy"
                  className="w-[68%] h-auto mix-blend-screen" />
                <p className="text-[10px] md:text-sm text-[var(--text)] leading-[1.6] md:leading-[1.8] -mt-1 md:-mt-3 [text-shadow:0_1px_6px_rgba(0,0,0,.95)]">
                  {c.desc}
                </p>
              </div>
            </>
          ) : (
            <>
              <img src={c.img} alt={c.name}
                className={`absolute inset-0 size-full object-cover ${c.pos} ${c.mask} group-hover:brightness-110 transition`} />
              <div className="relative z-10 p-2 md:p-3 pt-1 text-center">
                <h3 className="gold-shine text-sm md:text-xl font-medium [text-shadow:0_2px_10px_rgba(0,0,0,.9)]">{c.name}</h3>
                <p className={`${c.descClass || 'text-[10px] md:text-sm'} text-[var(--text)] leading-[1.6] md:leading-[1.8] mt-0.5 md:mt-1 [text-shadow:0_1px_6px_rgba(0,0,0,.95)]`}>{c.desc}</p>
              </div>
            </>
          );

          return c.href
            ? <a key={c.name} href={c.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
            : <div key={c.name} className={cls}>{inner}</div>;
        })}
      </div>
    </section>
  );
}

