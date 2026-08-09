export default function About() {
  return (
    <section id="about" className="py-2 md:py-6 px-3 md:px-6 text-center bg-[var(--bg2)]">
      <p className="gold-shine text-lg md:text-2xl mt-2 md:mt-6 mb-2 md:mb-6">نبذة</p>
      <p className="max-w-[760px] mx-auto text-sm md:text-base leading-[1.9] md:leading-[2.1] text-[var(--text)]">
        رؤيةٌ تشكّلت عبر أسواقٍ وثقافاتٍ متعددة، وفهمٌ عميق للإنسان والفرص؛ تُترجم إلى قيمةٍ مستدامة.
      </p>
      <img src="/signature.png" alt="عمر العُمر"
        className="block h-20 md:h-28 w-auto object-contain mx-auto mt-1 md:mt-4 mix-blend-screen" />
    </section>
  );
}
