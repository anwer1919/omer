export default function About() {
  return (
    <section id="about" className="pt-[100px] pb-3 max-md:pt-4 max-md:pb-1 px-3 md:px-6 text-center bg-[var(--bg)]">
      <p className="text-sm text-[var(--gold)] mb-3 md:mb-10">نبذة</p>
      <p className="max-w-[760px] mx-auto text-base md:text-lg leading-[1.9] md:leading-[2.1]">
        عشرون عامًا في بناء الأسواق والتوسع، واليوم أصنع علامات سعودية ذات أثر يبقى.
      </p>
      <img src="/signature.png" alt="عمر العُمر"
        className="block h-24 md:h-32 w-auto object-contain mx-auto mt-3 md:mt-8 mix-blend-screen" />
    </section>
  );
}
