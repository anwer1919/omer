export default function OaDivider() {
  return (
    <div className="flex items-center justify-center gap-6 md:gap-8 py-4 max-md:py-2 px-6">
      <span className="h-px w-20 md:w-32 bg-[var(--gold-dim)]" />
      <img src="/logo.png" alt="" className="h-16 md:h-20 w-auto object-contain mix-blend-screen" />
      <span className="h-px w-20 md:w-32 bg-[var(--gold-dim)]" />
    </div>
  );
}
