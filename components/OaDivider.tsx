export default function OaDivider() {
  return (
    <div className="flex items-center justify-center gap-8 pt-8 pb-14 max-md:pt-4 max-md:pb-8 px-6">
      <span className="h-px w-20 md:w-32 bg-[var(--gold-dim)]" />
      <img src="/logo.png" alt="" className="h-12 md:h-14 w-auto object-contain mix-blend-screen" />
      <span className="h-px w-20 md:w-32 bg-[var(--gold-dim)]" />
    </div>
  );
}
