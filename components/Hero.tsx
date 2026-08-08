export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative w-full px-5 md:px-14 pt-[84px] md:pt-[80px]">
        <div className="absolute inset-0">
          {/* أوسع قليلًا ومثبّتة يمينًا → الشخص يميل يسارًا */}
          <img src="/portrait.png" alt="عمر العُمر"
            className="absolute inset-y-0 right-0 h-full w-[118%] md:w-[112%] max-w-none object-cover object-[center_15%] md:object-[center_25%]" />
          <div className="absolute inset-0 bg-gradient-to-l from-[var(--bg)] via-[var(--bg)]/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[12%] bg-gradient-to-t from-[var(--bg)] to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col md:w-[52%] md:ml-auto pt-4 md:pt-6">
          <h1 className="text-[34px] md:text-[68px] font-semibold leading-[1.2]">عمر العُمر</h1>
          <p dir="ltr" className="text-[var(--gold)] tracking-[.2em] md:tracking-[.35em] text-[9px] md:text-sm mt-4 md:mt-5 text-right">FOUNDER • ENTREPRENEUR</p>
          <p className="text-[15px] md:text-xl text-[var(--muted)] mt-4 md:mt-6">أبني علامات تستحق أن تبقى</p>
          <div className="flex flex-row flex-wrap items-center gap-2 md:gap-4 mt-6 md:mt-10">
            <a href="/profile" className="h-[40px] md:h-[52px] px-3.5 md:px-8 rounded-[4px] bg-[var(--gold)] text-black grid place-items-center text-[12px] md:text-base font

