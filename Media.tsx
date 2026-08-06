const items=[1,2,3]; // تُستبدل بالمحتوى الحقيقي
export default function Media(){
  return (
    <section className="py-[120px] max-md:py-[72px] max-w-[1200px] mx-auto px-6">
      <h2 className="text-[40px] max-md:text-[28px] mb-12 text-center">الظهور الإعلامي</h2>
      <div className="grid md:grid-cols-3 gap-8 max-md:flex max-md:overflow-x-auto max-md:snap-x max-md:pb-4">
        {items.map(i=>(
          <article key={i} className="max-md:min-w-[80%] max-md:snap-center rounded-[14px] overflow-hidden bg-[var(--card)] border border-[var(--divider)]">
            <div className="aspect-video bg-[var(--divider)]"/>
            <div className="p-6">
              <p className="text-[var(--gold)] text-xs mb-2">اسم المنصة</p>
              <h3 className="text-lg">عنوان المقابلة / المقال</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
