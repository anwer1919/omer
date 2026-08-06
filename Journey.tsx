const steps=[['2018','تأسيس HOWK'],['2021','إطلاق نقوة الدار'],['2024','توسّع إقليمي'],['2026','إطلاق الهوية الرقمية']];
export default function Journey(){
  return (
    <section className="py-[120px] max-md:py-[72px] px-6 max-w-[800px] mx-auto">
      <h2 className="text-[40px] max-md:text-[28px] mb-12 text-center">المسيرة</h2>
      <div className="border-r-2 border-[var(--gold)]/25 pr-8 space-y-12">
        {steps.map(([y,t])=>(
          <div key={y} className="relative">
            <span className="absolute right-[-41px] top-2 size-[10px] rounded-full bg-[var(--gold)]"/>
            <h3 className="text-[var(--gold)] text-2xl">{y}</h3>
            <p className="text-lg mt-1">{t}</p>
          </div>
        ))}
      </div>
      <a href="/profile.pdf" download className="mt-12 mx-auto block w-fit h-[52px] px-8 rounded-full border border-[var(--gold)] text-[var(--gold)] grid place-items-center hover:bg-[var(--glow)]">
        تحميل الملف التعريفي PDF
      </a>
    </section>
  );
}
