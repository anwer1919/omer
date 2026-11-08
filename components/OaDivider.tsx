export default function OaDivider() {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-8 md:py-2 px-3 md:px-6 max-md:h-[calc(var(--u,1vw)*5)]">
      <span className="h-px w-16 md:w-32 bg-[var(--gold-dim)]" />
      <span aria-hidden className="block max-md:h-[calc(var(--u,1vw)*4)] md:h-14 aspect-square bg-[var(--gold)] [mask-image:url(/logo.png)] [mask-mode:luminance] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]" />
      <span className="h-px w-16 md:w-32 bg-[var(--gold-dim)]" />
    </div>
  );
}
