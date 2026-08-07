export default function OaDivider() {
  return (
    <div className="flex items-center justify-center gap-6 py-20 max-md:py-14 px-6">
      <span className="h-px w-16 md:w-24 bg-[var(--divider)]" />
      <img src="/logo.png" alt="" className="h-8 w-auto object-contain mix-blend-screen opacity-80" />
      <span className="h-px w-16 md:w-24 bg-[var(--divider)]" />
    </div>
  );
}
