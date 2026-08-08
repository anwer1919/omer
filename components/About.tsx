export default function About() {
  return (
    <section id="about" className="py-[100px] max-md:py-8 px-6 text-center bg-[var(--bg2)]">
      <p className="text-sm text-[var(--gold)] mb-5 md:mb-10">نبذة</p>
      <p className="max-w-[760px] mx-auto text-lg md:text-xl leading-[2.1]">
        لأ نبني أعمالاً لنلفت الإنتباه ... أبنيها لتستحق البقاًء.
      </p>
      <img src="/signature.png" alt="عمر العُمر"
        className="h-20 md:h-28 w-auto object-contain mx-auto mt-6 md:mt-10 mix-blend-screen" />
    </section>
  );
}
