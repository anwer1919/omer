export default function About() {
  return (
    <section id="about" className="py-2 md:py-6 px-3 md:px-6 text-center bg-[var(--bg2)]">
      <p className="text-sm text-[var(--gold)] mb-1 md:mb-4">نبذة</p>
      <p className="max-w-[760px] mx-auto text-base md:text-lg leading-[1.9] md:leading-[2.1] text-[var(--text)]">
        عشرون عامًا في بناء الأسواق والتوسع، واليوم أصنع علامات سعودية ذات أثر يبقى.
      </p>
      <img src="/signature.png" alt="عمر العُمر"
        className="block h-20 md:h-28 w-auto object-contain mx-auto mt-1 md:mt-4 mix-blend-screen" />
    </section>
  );
}
