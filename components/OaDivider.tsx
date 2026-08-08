export default function OaDivider() {
  return (
    <div className="flex items-center justify-center gap-6 md:gap-8 py-3 max-md:py-0.5 px-3 md:px-6">
      <span className="h-px w-20 md:w-32 bg-[var(--gold-dim)]" />
      <img src="/logo.png" alt="" className="h-14 md:h-16 w-auto object-contain mix-blend-screen hue-rotate-[-10deg] saturate-[1.15]" />
      <span className="h-px w-20 md:w-32 bg-[var(--gold-dim)]" />
    </div>
  );
}
