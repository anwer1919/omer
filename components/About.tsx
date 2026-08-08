export default function About() {
  return (
    <section id="about" className="py-[100px] max-md:py-6 px-6 text-center bg-[var(--bg2)]">
      <p className="text-sm text-[var(--gold)] mb-4 md:mb-10">نبذة</p>
      <p className="max-w-[760px] mx-auto text-lg md:text-xl leading-[2.1]">
        رائد أعمال سعودي بخبرة تمتد لأكثر من عشرين عامًا في بناء الأسواق وتطوير الأعمال، وأعمل اليوم على تأسيس علامات سعودية مستقلة بمعايير عالية وهوية طويلة الأمد.
      </p>
      {/* التوقيع أكبر ومدمج */}
      <img src="/signature.png" alt="عمر العُمر"
        className="h-24 md:h-32 w-auto object-contain mx-auto mt-4 md:mt-8 mix-blend-screen" />
    </section>
  );
}
