export default function About() {
  return (
    <section id="about" className="py-[100px] max-md:py-[72px] px-6 text-center">
      <p className="w-fit mx-auto text-[var(--gold)] text-sm border-b border-[var(--gold)]/60 pb-3 px-6 mb-12">نبذة</p>
      <p className="max-w-[800px] mx-auto text-lg md:text-xl leading-[2.1]">
        رائد أعمال سعودي، أعمل في بناء وتطوير المشاريع داخل وخارج المملكة.
        <br className="max-md:hidden" />
        وأؤمن بأن العلامة التجارية الحقيقية تُبنى بالقيمة قبل الانتشار.
      </p>
    </section>
  );
}
