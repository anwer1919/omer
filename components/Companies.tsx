const list = [{ n: 'HOWK' }, { n: 'نقوة الدار' }];
export default function Companies() {
  return (
    <section id="companies" className="py-[120px] max-md:py-[72px] px-6 max-w-[1200px] mx-auto">
      <h2 className="text-[40px] max-md:text-[28px] mb-12 text-center">الشركات</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {list.map(c => (
          <div key={c.n} className="h-[220px] max-md:h-[180px] rounded-[14px] bg-[var(--card)] border border-[var(--divider)] p-8 grid content-center transition hover:border-[var(--gold)] hover:shadow-[0_0_24px_var(--glow)]">
            <h3 className="text-[32px]">{c.n}</h3>
            <p className="text-[var(--muted)] mt-2">سطر تعريفي يُعتمد من العميل</p>
          </div>
        ))}
      </div>
    </section>
  );
}
