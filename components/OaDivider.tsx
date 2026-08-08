export default function OaDivider() {
  return (
    <div className="flex items-center justify-center gap-6 md:gap-8 py-3 max-md:py-0.5 px-3 md:px-6">
      <span className="h-px w-20 md:w-32 bg-[var(--gold-dim)]" />
      <span aria-hidden className="block h-14 md:h-16 aspect-square bg-[var(--gold)] [mask-image:url(/logo.png)] [mask-mode:luminance] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]" />
      <span className="h-px w-20 md:w-32 bg-[var(--gold-dim)]" />
    </div>
  );
}