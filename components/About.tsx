export default function About() {
  return (
    <section id="about" className="pt-[100px] pb-3 max-md:pt-4 max-md:pb-1 px-6 text-center bg-[var(--bg2)]">
      <p className="text-sm text-[var(--gold)] mb-3 md:mb-10">نبذة</p>
      <p className="max-w-[760px] mx-auto text-lg md:text-xl leading-[2.1]">
        رائد أعمال سعودي بخبرة تمتد لأكثر من عشرين عامًا في بناء الأسواق وتطوير الأعمال، وأعمل اليوم على تأسيس علامات سعودية مستقلة بمعايير عالية وهوية طويلة الأمد.
      </p>
      <img src="/signature.png" alt="عمر العُمر"
        className="block h-24 md:h-32 w-auto object-contain mx-auto mt-3 md:mt-8 mix-blend-screen" />
    </section>
  );
}
