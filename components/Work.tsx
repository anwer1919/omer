const cards = [
  { name: 'EDMARK', desc: '20 عامًا من الخبرة في بناء الأسواق وتطوير الأعمال عبر أكثر من 40 دولة.', img: '/logos/edmark.png', href: null },
  { name: 'HOWK', desc: 'دار أزياء سعودية فاخرة تقوم على الندرة والحِرفة والتميّز.', img: '/logos/howk.png', href: 'https://howkworld.com/ar' },
  { name: 'نقوة الدار', desc: 'علامة سعودية للمنتجات المنزلية، تضع الجودة والثقة في صميم التجربة.', img: '/logos/naqwa.png', href: '#' },
];

export default function Work() {
  return (
    <section id="work" className="py-[110px] max-md:py-[72px] px-6">
      <p className="text-center text-sm text-[var(--gold)] mb-14">الخبرة والأعمال</p>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-6">
        {cards.map(c => {
          const cls = 'group relative overflow-hidden aspect-[3/4] max-md:aspect-auto max-md:h-[420px] rounded-[6px] border border-[var(--gold-dim)] bg-[var(--card)] transition-transform duration-300 hover:scale-[1.02]';
          const inner = (
            <>
              {/* الصورة بنفس مقاس البطاقة ومدمجة معها */}
              <img src={c.img} alt={c.name}
                className="absolute inset-0 size-full object-contain object-[center_72%] px-8 pb-10 mix-blend-screen group-hover:brightness-110 transition" />
              <div className="relative z-10 p-8 pt-10">
                <h3 className="text-2xl font-medium text-center">{c.name}</h3>
                <p className="text-sm text-[var(--muted)] leading-[1.9] text-center mt-4">{c.desc}</p>
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
