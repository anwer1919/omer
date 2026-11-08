export default function About() {
  return (
    <section id="about" className="flex flex-col justify-center md:block px-3 md:px-6 md:py-6 text-center bg-[var(--bg2)] max-md:h-[calc(var(--u,1vw)*34)]">
      <p className="gold-shine max-md:[font-size:calc(var(--u,1vw)*4.8)] md:text-2xl md:mt-6 md:mb-6">نبذة</p>
      <p className="max-w-[760px] mx-auto max-md:[font-size:calc(var(--u,1vw)*3.4)] md:text-base max-md:leading-[1.8] md:leading-[2.1] text-[var(--text)]">
        رؤيةٌ تشكّلت عبر أسواقٍ وثقافاتٍ متعددة، وتحولت الي خبرة في بناء الفرص والعلامات ذات القيمة .
      </p>
      <img src="/signature.png" alt="عمر العُمر"
        className="block max-md:h-[calc(var(--u,1vw)*14)] md:h-28 w-auto object-contain mx-auto md:mt-4 mix-blend-screen max-md:scale-[1.7]" />
    </section>
  );
}
