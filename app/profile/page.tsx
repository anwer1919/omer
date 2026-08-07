import Link from 'next/link';

export const metadata = { title: 'الملف التنفيذي | عمر العمر' };

export default function Profile() {
  return (
    <main className="max-w-[800px] mx-auto px-6 py-28">
      <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--gold)]">→ عودة</Link>
      <h1 className="text-4xl md:text-5xl font-semibold mt-8">الملف التنفيذي</h1>
      <p dir="ltr" className="text-[var(--gold)] tracking-[.3em] text-xs mt-4">FOUNDER • ENTREPRENEUR</p>
      <div className="h-px w-16 bg-[var(--gold-dim)] my-10" />
      <p className="text-lg leading-[2.1]">
        رائد أعمال سعودي بخبرة تمتد لأكثر من عشرين عامًا في بناء الأسواق وتطوير الأعمال، وأعمل اليوم على تأسيس علامات سعودية مستقلة بمعايير عالية وهوية طويلة الأمد.
      </p>
      <h2 className="text-xl font-medium mt-12 mb-6 text-[var(--gold)]">الخبرة والأعمال</h2>
      <ul className="space-y-6 text-[var(--muted)] leading-[1.9] text-right">
        <li><span className="text-[var(--text)]">EDMARK</span> — 20 عامًا من الخبرة في بناء الأسواق وتطوير الأعمال عبر أكثر من 40 دولة.</li>
        <li><span className="text-[var(--text)]">HOWK</span> — دار أزياء سعودية فاخرة تقوم على الندرة والحِرفة والتميّز.</li>
        <li><span className="text-[var(--text)]">نقوة الدار</span> — علامة سعودية للمنتجات المنزلية، تضع الجودة والثقة في صميم التجربة.</li>
      </ul>
      <a href="/profile.pdf" download className="mt-14 inline-grid h-[52px] px-8 rounded-[4px] border border-[var(--gold-dim)] place-items-center hover:border-[var(--gold)] transition-colors">تحميل النسخة PDF</a>
    </main>
  );
}
